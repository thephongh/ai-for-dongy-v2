import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { ProgressService } from '../services/progressService';
import type { CourseProgress } from '../types/course';

interface ProgressContextType {
  progress: CourseProgress[];
  getChapterProgress: (chapterId: string) => CourseProgress | undefined;
  updateChapterProgress: (chapterId: string, updates: Partial<CourseProgress>) => void;
  markPageCompleted: (chapterId: string, pageIndex: number) => void;
  completeQuiz: (chapterId: string, score: number, passingScore: number) => void;
  resetProgress: () => void;
  completedChaptersCount: number;
  currentChapter: string | null;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<CourseProgress[]>([]);

  useEffect(() => {
    setProgress(ProgressService.getProgress());
  }, []);

  const getChapterProgress = (chapterId: string) => {
    return progress.find(p => p.chapterId === chapterId);
  };

  const updateChapterProgress = (chapterId: string, updates: Partial<CourseProgress>) => {
    ProgressService.updateChapterProgress(chapterId, updates);
    setProgress(ProgressService.getProgress());
  };

  const markPageCompleted = (chapterId: string, pageIndex: number) => {
    ProgressService.markPageCompleted(chapterId, pageIndex);
    setProgress(ProgressService.getProgress());
  };

  const completeQuiz = (chapterId: string, score: number, passingScore: number) => {
    ProgressService.completeQuiz(chapterId, score, passingScore);
    setProgress(ProgressService.getProgress());
  };

  const resetProgress = () => {
    ProgressService.resetProgress();
    setProgress([]);
  };

  const value: ProgressContextType = {
    progress,
    getChapterProgress,
    updateChapterProgress,
    markPageCompleted,
    completeQuiz,
    resetProgress,
    completedChaptersCount: ProgressService.getCompletedChaptersCount(),
    currentChapter: ProgressService.getCurrentChapter()
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};