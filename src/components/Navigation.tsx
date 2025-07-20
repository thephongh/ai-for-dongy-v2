import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={24} />
            <span>AI Training Course</span>
          </Link>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Trang chủ
            </Link>
            <Link 
              to="/chapters" 
              className={`nav-link ${location.pathname.includes('/chapters') ? 'active' : ''}`}
            >
              Chương học
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;