import type { Chapter, Page, Quiz } from '../types/course';

// Helper function to load markdown file
async function loadMarkdownFile(path: string): Promise<string> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading markdown file ${path}:`, error);
    return '';
  }
}

// Helper function to load JSON file
async function loadJsonFile<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading JSON file ${path}:`, error);
    return null;
  }
}

// Load all pages for a chapter
async function loadChapterPages(chapterId: string): Promise<Page[]> {
  const pages: Page[] = [];
  
  // Determine number of pages for each chapter
  const pageCount: Record<string, number> = {
    'chapter-1': 9,
    'chapter-2': 10,
    'chapter-3': 9,
    'chapter-4': 7,
    'chapter-5': 7,
    'chapter-6': 6
  };

  const totalPages = pageCount[chapterId] || 9;

  for (let i = 1; i <= totalPages; i++) {
    const pagePath = `/courses/${chapterId}/page-${i}.md`;
    const content = await loadMarkdownFile(pagePath);
    
    if (content) {
      // Extract title from the first heading
      const lines = content.split('\n');
      const titleLine = lines.find(line => line.startsWith('# '));
      const title = titleLine ? titleLine.replace('# ', '').trim() : `Page ${i}`;
      
      pages.push({
        id: `${chapterId}-page-${i}`,
        title,
        content
      });
    }
  }

  return pages;
}

// Load quiz for a chapter
async function loadChapterQuiz(chapterId: string): Promise<Quiz | null> {
  const quizPath = `/courses/${chapterId}/quiz.json`;
  return await loadJsonFile<Quiz>(quizPath);
}

// Load all chapters
export async function loadAllChapters(): Promise<Chapter[]> {
  const chapterTitles = [
    'Khai Mở Tư Duy - AI và Y Học Cổ Truyền',
    'Giải Mã Ma Trận "Bộ Não" AI - Đào tạo, Tư duy và Giao tiếp',
    'Nghệ Thuật Giao Tiếp với AI - Prompt Nâng Cao',
    'AI Trợ Lý Toàn Năng - Ứng Dụng Lâm Sàng và Quản Lý',
    'Tinh Tường và An Toàn - Đạo Đức và Đánh Giá AI',
    'Con Đường Phía Trước - Tích Hợp và Phát Triển'
  ];

  const chapters: Chapter[] = [];

  for (let i = 1; i <= 6; i++) {
    const chapterId = `chapter-${i}`;
    
    // Load pages and quiz in parallel
    const [pages, quiz] = await Promise.all([
      loadChapterPages(chapterId),
      loadChapterQuiz(chapterId)
    ]);

    if (pages.length > 0 && quiz) {
      chapters.push({
        id: chapterId,
        title: chapterTitles[i - 1],
        pages,
        quiz
      });
    }
  }

  return chapters;
}

// Cache for loaded chapters
let chaptersCache: Chapter[] | null = null;

// Get chapters with caching
export async function getChapters(): Promise<Chapter[]> {
  if (!chaptersCache) {
    chaptersCache = await loadAllChapters();
  }
  return chaptersCache;
}

// Clear cache (useful for development)
export function clearChaptersCache(): void {
  chaptersCache = null;
}