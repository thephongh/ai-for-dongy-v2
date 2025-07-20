import type { Chapter } from '../types/course';
import { getChapters } from '../utils/contentLoader';

// Export a function that returns chapters loaded from markdown files
export async function loadChapters(): Promise<Chapter[]> {
  return await getChapters();
}

// Fallback static data (for development/fallback purposes)
export const fallbackChapters: Chapter[] = [
  {
    id: 'chapter-1',
    title: 'Khai Mở Tư Duy - AI và Y Học Cổ Truyền',
    pages: [
      {
        id: 'chapter-1-page-1',
        title: 'Chào mừng các Lương y đến với Tương Lai',
        content: '# Chào mừng các Lương y đến với Tương Lai\n\nLoading content...'
      }
    ],
    quiz: {
      id: 'chapter-1-quiz',
      chapterId: 'chapter-1',
      timeLimit: 20,
      passingScore: 75,
      questions: []
    }
  }
];

// For backward compatibility, export chapters as a variable
// This will be replaced by the component loading logic
export const chapters = fallbackChapters;