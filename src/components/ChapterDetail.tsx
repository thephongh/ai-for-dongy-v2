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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (currentPageIndex < chapter.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      scrollToTop();
    } else {
      setShowQuiz(true);
      scrollToTop();
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      scrollToTop();
    }
  };

  const handlePageSelect = (pageIndex: number) => {
    setCurrentPageIndex(pageIndex);
    scrollToTop();
  };

  const handleCompleteChapter = () => {
    setShowQuiz(true);
  };

  const renderPageContent = () => {
    if (!currentPage) return null;

    return (
      <div className="markdown-content" style={{ width: '100%', overflow: 'visible' }}>
        <ReactMarkdown
          components={{
            h1: ({ children }) => null, // Hide h1 since it's already in the header
            h2: ({ children }) => <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-black)' }}>{children}</h2>,
            h3: ({ children }) => <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-black)' }}>{children}</h3>,
            p: ({ children }) => <p style={{ fontSize: '1.125rem', fontWeight: '400', lineHeight: '1.7', color: 'var(--color-gray-600)', marginBottom: '1.5rem' }}>{children}</p>,
            ul: ({ children }) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>{children}</ul>,
            li: ({ children }) => <li style={{ fontSize: '1.125rem', fontWeight: '400', lineHeight: '1.7', color: 'var(--color-gray-600)', marginBottom: '0.75rem' }}>{children}</li>,
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: '4px solid var(--gradient-progress)',
                paddingLeft: '1.5rem',
                margin: '2rem 0',
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
                padding: '2rem 2rem 2rem 3rem',
                borderRadius: '0 1rem 1rem 0',
                boxShadow: '0 4px 16px rgba(139, 92, 246, 0.1)',
                fontSize: '1.125rem',
                color: 'var(--color-gray-700)'
              }}>
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code style={{
                background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", Consolas, "Courier New", monospace',
                border: '1px solid var(--color-gray-300)',
                color: 'var(--color-purple)'
              }}>
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre style={{
                background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                color: 'white',
                padding: '1.5rem',
                borderRadius: '1rem',
                overflow: 'auto',
                margin: '2rem 0',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                fontSize: '0.9rem',
                lineHeight: '1.6',
                fontFamily: 'Consolas, "Courier New", monospace',
                whiteSpace: 'pre',
                display: 'block',
                width: '100%',
                boxSizing: 'border-box'
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
                  borderRadius: '1rem',
                  margin: '2rem 0',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--color-gray-200)'
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
      <div style={{ background: 'var(--gradient-primary)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <Link 
              to="/chapters" 
              className="btn-secondary"
              style={{ 
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '0.5rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s ease'
              }}
            >
              <ArrowLeft size={16} />
            </Link>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                onClick={handlePrevPage}
                disabled={isFirstPage}
                style={{ 
                  opacity: isFirstPage ? 0.3 : 1,
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  cursor: isFirstPage ? 'not-allowed' : 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronLeft size={14} />
              </button>

              <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', fontWeight: '500' }}>
                Chương {currentIndex + 1} / {chapters.length}
              </span>

              {/* Page Dots - Hidden on small screens */}
              <div style={{ 
                display: 'flex', 
                gap: '0.4rem', 
                alignItems: 'center'
              }}>
                {chapter.pages.slice(0, window.innerWidth < 768 ? 5 : chapter.pages.length).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageSelect(index)}
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      border: 'none',
                      background: index === currentPageIndex 
                        ? 'white' 
                        : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      transform: index === currentPageIndex ? 'scale(1.3)' : 'scale(1)',
                      boxShadow: index === currentPageIndex ? '0 2px 8px rgba(255, 255, 255, 0.5)' : 'none',
                      display: window.innerWidth < 480 ? 'none' : 'block'
                    }}
                  />
                ))}
                {chapter.pages.length > 5 && window.innerWidth < 768 && (
                  <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.75rem' }}>...</span>
                )}
              </div>

              <button 
                onClick={handleNextPage}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease'
                }}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
          
          <h1 className="hero-text" style={{ marginBottom: '0.5rem', color: 'white', fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', lineHeight: '1.3' }}>
            {currentPage ? currentPage.title || `Trang ${currentPageIndex + 1}` : chapter.title}
          </h1>
          


          {/* Page Progress */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.3)', 
            borderRadius: '8px', 
            height: '6px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(255, 255, 255, 0.9) 100%)', 
              height: '100%', 
              width: `${((currentPageIndex + 1) / chapter.pages.length) * 100}%`,
              borderRadius: '8px',
              transition: 'width 0.3s ease',
              boxShadow: '0 2px 8px rgba(255, 255, 255, 0.3)'
            }}></div>
          </div>
        </div>
      </div>

      {!showQuiz ? (
        <>
          {/* Content */}
          <div className="container" style={{ padding: '4rem 0' }}>
            <div className="card-feature" style={{ 
              width: 'min(90vw, 1200px)', 
              margin: '0 auto', 
              background: 'white', 
              borderRadius: '1rem', 
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' 
            }}>
              <div style={{ 
                padding: 'clamp(1.5rem, 4vw, 3rem)', 
                maxWidth: 'none'
              }}>
                {renderPageContent()}
              </div>
            </div>
          </div>

          {/* Page Navigation */}
          <div style={{ background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)', padding: '3rem 0', borderTop: '1px solid var(--color-gray-300)' }}>
            <div className="container">
              <div style={{ 
                width: 'min(90vw, 1200px)', 
                margin: '0 auto' 
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  alignItems: 'center', 
                  background: 'white', 
                  padding: '1rem 2rem', 
                  borderRadius: '1rem', 
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  gap: '1rem'
                }}>
                  <button 
                    onClick={handlePrevPage}
                    disabled={isFirstPage}
                    style={{ 
                      opacity: isFirstPage ? 0.5 : 1,
                      background: isFirstPage ? 'var(--color-gray-200)' : 'var(--color-gray-100)',
                      color: isFirstPage ? 'var(--color-gray-400)' : 'var(--color-gray-700)',
                      border: '1px solid var(--color-gray-300)',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      transition: 'all 0.3s ease',
                      cursor: isFirstPage ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {/* Page Indicators - Responsive */}
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem', 
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {chapter.pages.slice(0, window.innerWidth < 768 ? 5 : chapter.pages.length).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageSelect(index)}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          border: 'none',
                          background: index === currentPageIndex 
                            ? 'var(--gradient-progress)' 
                            : 'var(--color-gray-300)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          transform: index === currentPageIndex ? 'scale(1.2)' : 'scale(1)',
                          boxShadow: index === currentPageIndex ? '0 2px 8px rgba(139, 92, 246, 0.3)' : 'none',
                          display: window.innerWidth < 480 ? 'none' : 'block'
                        }}
                      />
                    ))}
                    {chapter.pages.length > 5 && window.innerWidth < 768 && window.innerWidth >= 480 && (
                      <span style={{ color: 'var(--color-gray-500)', fontSize: '0.75rem' }}>...</span>
                    )}
                  </div>

                  <button 
                    onClick={handleNextPage}
                    style={{ 
                      background: 'var(--gradient-progress)',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 2px 8px rgba(139, 92, 246, 0.3)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

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
        <div className="card-feature" style={{ 
          textAlign: 'center', 
          width: 'min(85vw, 700px)',
          margin: '0 auto',
          padding: 'clamp(1.5rem, 4vw, 3rem)'
        }}>
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
      <div style={{ 
        width: 'min(85vw, 1000px)', 
        margin: '0 auto' 
      }}>
        {/* Quiz Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%)',
          borderRadius: '1rem',
          border: '1px solid var(--color-gray-300)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
        }}>
          <div>
            <span style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--color-gray-700)' }}>
              Câu hỏi {currentQuestion + 1} / {chapter.quiz.questions.length}
            </span>
          </div>
          <div style={{ 
            background: timeLeft < 60 ? 'var(--gradient-secondary)' : 'var(--gradient-overview-icon)',
            color: 'white',
            padding: '0.75rem 1.25rem',
            borderRadius: '0.75rem',
            fontWeight: '700',
            fontSize: '1rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
          }}>
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Question */}
        <div className="card-feature" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-black)', marginBottom: '2rem', lineHeight: '1.4' }}>
            {question.question}
          </h3>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {question.options.map((option: string, index: number) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                style={{
                  padding: '1.5rem',
                  border: `2px solid ${answers[currentQuestion] === option ? 'var(--color-purple)' : 'var(--color-gray-300)'}`,
                  borderRadius: '0.75rem',
                  background: answers[currentQuestion] === option ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)' : 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1.125rem',
                  fontWeight: '400',
                  color: 'var(--color-gray-700)',
                  boxShadow: answers[currentQuestion] === option ? '0 4px 16px rgba(139, 92, 246, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transform: answers[currentQuestion] === option ? 'translateY(-2px)' : 'translateY(0)'
                }}
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