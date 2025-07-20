import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, Target, Shield, ArrowRight, BookOpen, CheckCircle, Clock } from 'lucide-react';
import { chapters } from '../data/chapters';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Brain size={32} />,
      title: 'Hiểu rõ bản chất AI',
      description: 'Nắm vững AI là gì, cách hoạt động và vai trò trong y học cổ truyền'
    },
    {
      icon: <Users size={32} />,
      title: 'Giao tiếp hiệu quả',
      description: 'Học nghệ thuật prompting và các kỹ thuật nâng cao để tối ưu AI'
    },
    {
      icon: <Target size={32} />,
      title: 'Ứng dụng thực tế',
      description: 'Case studies cụ thể trong chẩn đoán, điều trị và quản lý phòng khám'
    },
    {
      icon: <Shield size={32} />,
      title: 'An toàn & Đạo đức',
      description: 'Sử dụng AI có trách nhiệm, bảo mật thông tin bệnh nhân'
    }
  ];

  const durations = ['45 phút', '50 phút', '40 phút', '60 phút', '35 phút', '30 phút'];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section 
        className="gradient-primary" 
        style={{ 
          padding: '6rem 0', 
          color: 'white',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/chapter-1/1.1-harmony-bridge.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="hero-text" style={{ 
            marginBottom: '1.5rem',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
          }}>
            Khóa Học AI cho Lương Y
          </h1>
          <p className="body-text" style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Trở thành Lương y 4.0 - Kết hợp tinh hoa y học cổ truyền với sức mạnh của trí tuệ nhân tạo
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/chapters" className="btn-primary">
              Bắt đầu học ngay <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </Link>
            <button className="btn-secondary">
              Xem giới thiệu
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="h2-text" style={{ marginBottom: '1rem' }}>
              Tại sao chọn khóa học này?
            </h2>
            <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Khóa học được thiết kế đặc biệt cho lương y, kết hợp lý thuyết và thực hành
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {features.map((feature, index) => (
              <div key={index} className="card-feature">
                <div style={{ 
                  background: 'var(--gradient-feature-icon)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  width: 'fit-content',
                  marginBottom: '1.5rem',
                  color: 'white'
                }}>
                  {feature.icon}
                </div>
                <h3 className="h3-text" style={{ marginBottom: '1rem' }}>
                  {feature.title}
                </h3>
                <p className="body-text">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section style={{ padding: '6rem 0', background: 'var(--color-gray-100)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="h2-text" style={{ marginBottom: '1rem' }}>
              Nội dung khóa học
            </h2>
            <p className="body-text">
              6 chương học từ cơ bản đến nâng cao, mỗi chương có bài quiz để kiểm tra hiểu biết
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {chapters.map((chapter, index) => (
              <div key={chapter.id} className="card-overview" style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    background: 'var(--gradient-overview-icon)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '600'
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="h4-text" style={{ marginBottom: '0.25rem' }}>
                      Chương {index + 1}: {chapter.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={16} color="var(--color-gray-500)" />
                      <span className="caption-text">{durations[index]}</span>
                    </div>
                  </div>
                  <CheckCircle size={20} color="var(--color-green)" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-secondary" style={{ padding: '6rem 0', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2-text" style={{ color: 'white', marginBottom: '1rem' }}>
            Sẵn sàng bắt đầu hành trình?
          </h2>
          <p className="body-text" style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Tham gia cùng hàng trăm lương y đã áp dụng thành công AI vào công việc
          </p>
          <Link to="/chapters" className="btn-primary">
            <BookOpen size={16} style={{ marginRight: '0.5rem' }} />
            Bắt đầu ngay
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;