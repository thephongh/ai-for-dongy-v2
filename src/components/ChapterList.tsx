import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ArrowRight, Play } from 'lucide-react';
import { loadChapters } from '../data/chapters';
import type { Chapter } from '../types/course';
import { useProgress } from '../contexts/ProgressContext';

const ChapterList: React.FC = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const { progress, completedChaptersCount, currentChapter } = useProgress();

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

  const getChapterStatus = (chapterId: string): 'completed' | 'current' | 'locked' => {
    const chapterProgress = progress.find(p => p.chapterId === chapterId);
    if (chapterProgress?.completed) return 'completed';
    if (chapterId === currentChapter) return 'current';
    // All chapters are unlocked and available
    return 'current';
  };

  const durations = [
    '45 phút', '50 phút', '40 phút', '60 phút', '35 phút', '30 phút'
  ];

  if (loading) {
    return (
      <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 className="h2-text">Đang tải khóa học...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem 0', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="h2-text" style={{ marginBottom: '1rem' }}>
            Khóa Học AI cho Lương Y
          </h1>
          <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
            6 chương học từ cơ bản đến nâng cao. Hoàn thành mỗi chương và vượt qua bài quiz để tiếp tục.
          </p>
        </div>

        {/* Progress Overview */}
        <div className="card-feature" style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h3 className="h3-text" style={{ marginBottom: '1rem' }}>
            Tiến độ học tập
          </h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: 'var(--color-green)' 
              }}></div>
              <span className="caption-text">Hoàn thành: {completedChaptersCount}/6</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                background: 'var(--color-yellow)' 
              }}></div>
              <span className="caption-text">Đang học: {currentChapter ? `Chương ${currentChapter.split('-')[1]}` : 'Chưa bắt đầu'}</span>
            </div>
          </div>
          <div style={{ 
            background: 'var(--color-gray-200)', 
            borderRadius: '10px', 
            height: '8px',
            overflow: 'hidden'
          }}>
            <div style={{ 
              background: 'var(--gradient-progress)', 
              height: '100%', 
              width: `${(completedChaptersCount / 6) * 100}%`,
              borderRadius: '10px'
            }}></div>
          </div>
        </div>

        {/* Chapter List */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gap: '1.5rem'
          }}>
            {chapters.map((chapter, index) => {
              const status = getChapterStatus(chapter.id);
              const chapterProgress = progress.find(p => p.chapterId === chapter.id);
              
              return (
                <div
                  key={chapter.id}
                  className={`card-step ${status}`}
                  style={{ 
                    opacity: status === 'locked' ? 0.6 : 1,
                    cursor: status === 'locked' ? 'not-allowed' : 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                    {/* Chapter Number */}
                    <div style={{
                      background: status === 'completed' 
                        ? 'var(--color-green)' 
                        : status === 'current' 
                        ? 'var(--gradient-step-number)'
                        : 'var(--color-gray-300)',
                      borderRadius: '50%',
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1.25rem',
                      flexShrink: 0
                    }}>
                      {status === 'completed' ? (
                        <CheckCircle size={24} />
                      ) : (
                        index + 1
                      )}
                    </div>

                    {/* Chapter Content */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <h3 className="h3-text" style={{ 
                          color: status === 'locked' ? 'var(--color-gray-500)' : 'var(--color-black)'
                        }}>
                          {chapter.title}
                        </h3>
                        {status !== 'locked' && (
                          <Link 
                            to={`/chapters/${chapter.id}`}
                            className="btn-primary"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                          >
                            {status === 'completed' ? 'Ôn lại' : status === 'current' ? 'Tiếp tục' : 'Bắt đầu'}
                            {status === 'current' ? <Play size={14} style={{ marginLeft: '0.5rem' }} /> : <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />}
                          </Link>
                        )}
                      </div>

                      {/* Chapter Meta */}
                      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Clock size={16} color="var(--color-gray-500)" />
                          <span className="caption-text">{durations[index]}</span>
                        </div>
                        {chapterProgress?.quizScore && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <CheckCircle size={16} color="var(--color-green)" />
                            <span className="caption-text">
                              Quiz: {chapterProgress.quizScore}/100 điểm
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Chapter Preview */}
                      <p className="body-small-text" style={{ 
                        color: status === 'locked' ? 'var(--color-gray-500)' : 'var(--color-gray-500)',
                        lineHeight: 1.5
                      }}>
                        {index === 0 && 'Khám phá bản chất của AI và vai trò của nó trong y học cổ truyền. Hiểu rõ tại sao AI là trợ lý đắc lực, không phải đối thủ của lương y.'}
                        {index === 1 && 'Tìm hiểu cách AI học tập và "tư duy". Từ đào tạo nền đến tinh chỉnh, khám phá bí mật đằng sau sức mạnh của LLM.'}
                        {index === 2 && 'Nắm vững nghệ thuật giao tiếp với AI. Học các kỹ thuật prompting nâng cao để tối ưu hóa kết quả từ AI.'}
                        {index === 3 && 'Ứng dụng AI vào thực tế lâm sàng. Case studies cụ thể về chẩn đoán, điều trị và quản lý phòng khám.'}
                        {index === 4 && 'Sử dụng AI một cách an toàn và có đạo đức. Hiểu rõ giới hạn của AI và cách xác minh thông tin.'}
                        {index === 5 && 'Lộ trình phát triển thành Lương y 4.0. Tương lai của AI trong YHCT và cách tích hợp bền vững.'}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterList;