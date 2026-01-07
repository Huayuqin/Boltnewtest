import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="footer-text">
            Designed and built with care
          </p>
          <p className="footer-copy">
            © {currentYear} All rights reserved
          </p>
        </div>
        <div className="footer-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Dribbble
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
