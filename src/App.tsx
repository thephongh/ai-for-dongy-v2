import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ChapterList from './components/ChapterList';
import ChapterDetail from './components/ChapterDetail';
import { ProgressProvider } from './contexts/ProgressContext';
import './styles/design-system.css';

function App() {
  return (
    <Router>
      <ProgressProvider>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navigation />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chapters" element={<ChapterList />} />
              <Route path="/chapters/:chapterId" element={<ChapterDetail />} />
            </Routes>
          </main>
        </div>
      </ProgressProvider>
    </Router>
  );
}

export default App
