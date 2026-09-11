import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          © {currentYear} Labocast Kenya • Reuni Dent Africa Ltd
        </p>
        <div className="footer-meta">
          <span>v1.0.0</span>
          <span>Built with React + Vite</span>
          <span>
            <a 
              href="https://taliad.co.ke" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              TALIAD LTD
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
