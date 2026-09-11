import { NavLink } from 'react-router-dom';
import LabocastLogo from '../assets/LabocastLogo';
import './header.css';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container header-content">
        <NavLink to="/" className="header-logo" aria-label="Labocast Kenya - Home">
          <LabocastLogo />
        </NavLink>
        
        <nav className="header-nav" aria-label="Main navigation">
          <NavLink 
            to="/report" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            end={false}
          >
            Report
          </NavLink>
          <NavLink 
            to="/console" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Console
          </NavLink>
          <NavLink 
            to="/verification" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Verification
          </NavLink>
          
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title="Toggle theme"
          >
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
