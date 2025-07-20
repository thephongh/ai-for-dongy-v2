export interface Question {
  id: string;
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface Quiz {
  id: string;
  chapterId: string;
  timeLimit: number;
  passingScore: number;
  questions: Question[];
}

export interface Page {
  id: string;
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  title: string;
  pages: Page[];
  quiz: Quiz;
}

export interface CourseProgress {
  chapterId: string;
  currentPage?: number;
  pagesCompleted?: number[];
  completed: boolean;
  quizScore?: number;
  quizPassed?: boolean;
}