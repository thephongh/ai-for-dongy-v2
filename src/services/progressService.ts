import type { CourseProgress } from '../types/course';

const PROGRESS_KEY = 'ai-for-dongy-course-progress';

export class ProgressService {
  static getProgress(): CourseProgress[] {
    try {
      const stored = localStorage.getItem(PROGRESS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading progress:', error);
      return [];
    }
  }

  static saveProgress(progress: CourseProgress[]): void {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }

  static getChapterProgress(chapterId: string): CourseProgress | undefined {
    const allProgress = this.getProgress();
    return allProgress.find(p => p.chapterId === chapterId);
  }

  static updateChapterProgress(chapterId: string, updates: Partial<CourseProgress>): void {
    const allProgress = this.getProgress();
    const existingIndex = allProgress.findIndex(p => p.chapterId === chapterId);
    
    if (existingIndex >= 0) {
      allProgress[existingIndex] = { ...allProgress[existingIndex], ...updates };
    } else {
      allProgress.push({ chapterId, completed: false, ...updates });
    }
    
    this.saveProgress(allProgress);
  }

  static markPageCompleted(chapterId: string, pageIndex: number): void {
    const progress = this.getChapterProgress(chapterId) || { 
      chapterId, 
      completed: false,
      pagesCompleted: []
    };
    
    const pagesCompleted = progress.pagesCompleted || [];
    if (!pagesCompleted.includes(pageIndex)) {
      pagesCompleted.push(pageIndex);
    }
    
    this.updateChapterProgress(chapterId, { 
      pagesCompleted,
      currentPage: pageIndex 
    });
  }

  static completeQuiz(chapterId: string, score: number, passingScore: number): void {
    const passed = score >= passingScore;
    this.updateChapterProgress(chapterId, {
      quizScore: score,
      quizPassed: passed,
      completed: passed
    });
  }

  static resetProgress(): void {
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  }

  static getCompletedChaptersCount(): number {
    const progress = this.getProgress();
    return progress.filter(p => p.completed).length;
  }

  static getCurrentChapter(): string | null {
    const progress = this.getProgress();
    const inProgress = progress.find(p => !p.completed && (p.currentPage !== undefined || p.pagesCompleted?.length));
    if (inProgress) return inProgress.chapterId;
    
    const lastCompleted = progress
      .filter(p => p.completed)
      .sort((a, b) => {
        const aNum = parseInt(a.chapterId.split('-')[1]);
        const bNum = parseInt(b.chapterId.split('-')[1]);
        return bNum - aNum;
      })[0];
    
    if (lastCompleted) {
      const num = parseInt(lastCompleted.chapterId.split('-')[1]);
      return `chapter-${num + 1}`;
    }
    
    return 'chapter-1';
  }
}