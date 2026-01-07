import './Contact.css';

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-hero">
          <h1>Let's Work Together</h1>
          <p className="contact-intro">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="method-content">
                <h3>Email</h3>
                <a href="mailto:hello@example.com" className="contact-link">
                  hello@example.com
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="method-content">
                <h3>LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Connect with me
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
              <div className="method-content">
                <h3>Dribbble</h3>
                <a
                  href="https://dribbble.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  View my work
                </a>
              </div>
            </div>
          </div>

          <div className="availability-notice">
            <h2>Currently Available</h2>
            <p>
              I'm currently available for freelance projects and full-time opportunities.
              Let's discuss how we can work together to create something amazing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
