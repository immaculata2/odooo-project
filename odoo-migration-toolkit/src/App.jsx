import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Report from './pages/Report';
import Console from './pages/Console';
import Verification from './pages/Verification';
import './styles/global.css';

const THEME_KEY = 'odoo-theme-preference';

function App() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    
    // Then check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/console" element={<Console />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
