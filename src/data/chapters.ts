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
  },
  {
    id: 'chapter-2',
    title: 'Giải Mã Ma Trận "Bộ Não" AI - Đào tạo, Tư duy và Giao tiếp',
    pages: [
      {
        id: 'chapter-2-page-1',
        title: 'LLM: "Bộ Não" của AI Tạo Sinh',
        content: '# LLM: "Bộ Não" của AI Tạo Sinh\n\nLoading content...'
      }
    ],
    quiz: {
      id: 'chapter-2-quiz',
      chapterId: 'chapter-2',
      timeLimit: 20,
      passingScore: 75,
      questions: []
    }
  },
  {
    id: 'chapter-3',
    title: 'Nghệ Thuật Đối Thoại - Prompt Engineering và Kỹ Thuật Nâng Cao',
    pages: [
      {
        id: 'chapter-3-page-1',
        title: 'Nghệ Thuật Đối Thoại với AI',
        content: '# Nghệ Thuật Đối Thoại với AI\n\nLoading content...'
      }
    ],
    quiz: {
      id: 'chapter-3-quiz',
      chapterId: 'chapter-3',
      timeLimit: 20,
      passingScore: 75,
      questions: []
    }
  },
  {
    id: 'chapter-4',
    title: 'Ứng Dụng Thực Tế - AI trong Chẩn Đoán và Điều Trị',
    pages: [
      {
        id: 'chapter-4-page-1',
        title: 'AI trong Chẩn Đoán',
        content: '# AI trong Chẩn Đoán\n\nLoading content...'
      }
    ],
    quiz: {
      id: 'chapter-4-quiz',
      chapterId: 'chapter-4',
      timeLimit: 20,
      passingScore: 75,
      questions: []
    }
  },
  {
    id: 'chapter-5',
    title: 'Tinh Tường và An Toàn - Đạo Đức và Đánh Giá AI',
    pages: [
      {
        id: 'chapter-5-page-1',
        title: 'Nguyên tắc đạo đức hàng đầu',
        content: '# Nguyên tắc đạo đức hàng đầu\n\nLoading content...'
      }
    ],
    quiz: {
      id: 'chapter-5-quiz',
      chapterId: 'chapter-5',
      timeLimit: 20,
      passingScore: 75,
      questions: []
    }
  },
  {
    id: 'chapter-6',
    title: 'Con Đường Phía Trước - Tích Hợp và Phát Triển',
    pages: [
      {
        id: 'chapter-6-page-1',
        title: 'Tổng kết những gì đã học',
        content: '# Tổng kết những gì đã học\n\nLoading content...'
      }
    ],
    quiz: {
      id: 'chapter-6-quiz',
      chapterId: 'chapter-6',
      timeLimit: 20,
      passingScore: 75,
      questions: []
    }
  }
];

// For backward compatibility, export chapters as a variable
// This will be replaced by the component loading logic
export const chapters = fallbackChapters;