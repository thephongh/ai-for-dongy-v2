import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { loadChapters } from '../data/chapters';
import type { Chapter } from '../types/course';
import ReactMarkdown from 'react-markdown';

const ChapterDetail: React.FC = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadContent = async () => {
      try {
        const loadedChapters = await loadChapters();
        setChapters(loadedChapters);
      } catch (error) {
        console.error('Failed to load chapters:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, []);
  
  const chapter = chapters.find(c => c.id === chapterId);
  const currentIndex = chapters.findIndex(c => c.id === chapterId);
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;

  if (loading) {
    return (
      <div className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1 className="h2-text">Đang tải nội dung...</h1>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="container" style={{ padding: '2rem 0', textAlign: 'center' }}>
        <h1 className="h2-text">Chương không tồn tại</h1>
        <Link to="/chapters" className="btn-primary" style={{ marginTop: '1rem' }}>
          Quay lại danh sách chương
        </Link>
      </div>
    );
  }

  const currentPage = chapter.pages[currentPageIndex];
  const isLastPage = currentPageIndex === chapter.pages.length - 1;
  const isFirstPage = currentPageIndex === 0;

  const handleNextPage = () => {
    if (currentPageIndex < chapter.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const handleCompleteChapter = () => {
    setShowQuiz(true);
  };

  const renderPageContent = () => {
    if (!currentPage) return null;

    return (
      <div className="markdown-content">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="h2-text" style={{ marginBottom: '2rem', color: 'var(--color-black)' }}>{children}</h1>,
            h2: ({ children }) => <h2 className="h3-text" style={{ marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-black)' }}>{children}</h2>,
            h3: ({ children }) => <h3 className="h4-text" style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-black)' }}>{children}</h3>,
            p: ({ children }) => <p className="body-text" style={{ marginBottom: '1.5rem', lineHeight: 1.7 }}>{children}</p>,
            ul: ({ children }) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>{children}</ul>,
            li: ({ children }) => <li className="body-text" style={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>{children}</li>,
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: '4px solid var(--color-purple)',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
                fontStyle: 'italic',
                background: 'var(--color-gray-100)',
                padding: '1rem 1rem 1rem 2rem',
                borderRadius: '0 0.5rem 0.5rem 0'
              }}>
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code style={{
                background: 'var(--color-gray-100)',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                fontSize: '0.875rem',
                fontFamily: 'monospace'
              }}>
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre style={{
                background: 'var(--color-gray-900)',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                overflow: 'auto',
                margin: '2rem 0'
              }}>
                {children}
              </pre>
            ),
            img: ({ src, alt }) => (
              <img 
                src={src} 
                alt={alt} 
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  margin: '1.5rem 0',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
            )
          }}
        >
          {currentPage.content}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'white' }}>
      {/* Header */}
      <div style={{ background: 'var(--color-gray-100)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Link 
              to="/chapters" 
              className="btn-secondary"
              style={{ 
                padding: '0.5rem',
                background: 'white',
                color: 'var(--color-gray-700)',
                border: '1px solid var(--color-gray-300)'
              }}
            >
              <ArrowLeft size={16} />
            </Link>
            <span className="caption-text">
              Chương {currentIndex + 1} / {chapters.length}
            </span>
          </div>
          
          <h1 className="h2-text" style={{ marginBottom: '0.5rem' }}>
            {chapter.title}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} color="var(--color-gray-500)" />
              <span className="caption-text">
                {currentIndex === 0 ? '45 phút' :
                 currentIndex === 1 ? '50 phút' :
                 currentIndex === 2 ? '40 phút' :
                 currentIndex === 3 ? '60 phút' :
                 currentIndex === 4 ? '35 phút' : '30 phút'}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={16} color="var(--color-gray-500)" />
              <span className="caption-text">
                Trang {currentPageIndex + 1} / {chapter.pages.length}
              </span>
            </div>
          </div>

          {/* Page Progress */}
          <div style={{ 
            background: 'var(--color-gray-200)', 
            borderRadius: '10px', 
            height: '6px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              background: 'var(--gradient-progress)', 
              height: '100%', 
              width: `${((currentPageIndex + 1) / chapter.pages.length) * 100}%`,
              borderRadius: '10px',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>
      </div>

      {!showQuiz ? (
        <>
          {/* Content */}
          <div className="container" style={{ padding: '3rem 0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {renderPageContent()}
            </div>
          </div>

          {/* Page Navigation */}
          <div style={{ background: 'var(--color-gray-100)', padding: '2rem 0' }}>
            <div className="container">
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button 
                    className="btn-secondary"
                    onClick={handlePrevPage}
                    disabled={isFirstPage}
                    style={{ 
                      opacity: isFirstPage ? 0.5 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <ChevronLeft size={16} />
                    Trang trước
                  </button>

                  {/* Page Indicators */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {chapter.pages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPageIndex(index)}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          border: 'none',
                          background: index === currentPageIndex 
                            ? 'var(--color-purple)' 
                            : 'var(--color-gray-300)',
                          cursor: 'pointer',
                          transition: 'background 0.2s ease'
                        }}
                      />
                    ))}
                  </div>

                  <button 
                    className="btn-primary"
                    onClick={handleNextPage}
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isLastPage ? 'Làm bài Quiz' : 'Trang tiếp theo'}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chapter Navigation */}
          {isLastPage && !showQuiz && (
            <div style={{ background: 'white', borderTop: '1px solid var(--color-gray-300)', padding: '2rem 0' }}>
              <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {prevChapter ? (
                      <Link 
                        to={`/chapters/${prevChapter.id}`}
                        className="btn-secondary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <ArrowLeft size={16} />
                        Chương trước
                      </Link>
                    ) : (
                      <div />
                    )}
                    
                    {nextChapter ? (
                      <Link 
                        to={`/chapters/${nextChapter.id}`}
                        className="btn-primary"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        Chương tiếp theo
                        <ArrowRight size={16} />
                      </Link>
                    ) : (
                      <button 
                        className="btn-primary"
                        onClick={handleCompleteChapter}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        Hoàn thành khóa học
                        <CheckCircle size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <QuizComponent chapter={chapter} onComplete={() => setShowQuiz(false)} />
      )}
    </div>
  );
};

// Quiz Component
const QuizComponent: React.FC<{ chapter: any; onComplete: () => void }> = ({ chapter, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(chapter.quiz.timeLimit * 60); // Convert to seconds

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < chapter.quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    chapter.quiz.questions.forEach((question: any, index: number) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / chapter.quiz.questions.length) * 100);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    const passed = score >= chapter.quiz.passingScore;

    return (
      <div className="container" style={{ padding: '3rem 0' }}>
        <div className="card-feature" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }}>
            {passed ? (
              <CheckCircle size={64} color="var(--color-green)" style={{ margin: '0 auto' }} />
            ) : (
              <div style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                background: 'var(--color-gray-300)', 
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                ❌
              </div>
            )}
          </div>
          
          <h2 className="h2-text" style={{ marginBottom: '1rem' }}>
            {passed ? 'Chúc mừng!' : 'Cần cố gắng thêm'}
          </h2>
          
          <p className="body-text" style={{ marginBottom: '2rem' }}>
            Điểm của bạn: <strong>{score}/100</strong>
            <br />
            Điểm cần đạt: {chapter.quiz.passingScore}/100
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {passed ? (
              <Link to="/chapters" className="btn-primary">
                Tiếp tục học
              </Link>
            ) : (
              <button className="btn-primary" onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResults(false);
                setTimeLeft(chapter.quiz.timeLimit * 60);
              }}>
                Làm lại bài quiz
              </button>
            )}
            <button className="btn-secondary" onClick={onComplete}>
              Quay lại nội dung
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = chapter.quiz.questions[currentQuestion];

  return (
    <div className="container" style={{ padding: '3rem 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Quiz Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          padding: '1rem',
          background: 'var(--color-gray-100)',
          borderRadius: '0.5rem'
        }}>
          <div>
            <span className="caption-text">
              Câu hỏi {currentQuestion + 1} / {chapter.quiz.questions.length}
            </span>
          </div>
          <div style={{ 
            background: timeLeft < 60 ? 'var(--color-yellow)' : 'var(--color-blue)',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            fontWeight: '600'
          }}>
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Question */}
        <div className="card-feature" style={{ marginBottom: '2rem' }}>
          <h3 className="h3-text" style={{ marginBottom: '2rem' }}>
            {question.question}
          </h3>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {question.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                style={{
                  padding: '1rem',
                  border: `2px solid ${answers[currentQuestion] === option ? 'var(--color-purple)' : 'var(--color-gray-300)'}`,
                  borderRadius: '0.5rem',
                  background: answers[currentQuestion] === option ? 'rgba(139, 92, 246, 0.1)' : 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="body-text"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            className="btn-secondary"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            style={{ opacity: currentQuestion === 0 ? 0.5 : 1 }}
          >
            <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
            Câu trước
          </button>

          <button 
            className="btn-primary"
            onClick={handleNextQuestion}
            disabled={!answers[currentQuestion]}
            style={{ opacity: !answers[currentQuestion] ? 0.5 : 1 }}
          >
            {currentQuestion === chapter.quiz.questions.length - 1 ? 'Nộp bài' : 'Câu tiếp theo'}
            <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterDetail;