import React from 'react';

// Component hiển thị phần Footer
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">Get in touch</h3>
          <ul className="contact-list">
            <li className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-text">021-3042-1000</span>
            </li>
            <li className="contact-item">
              <span className="contact-icon">📠</span>
              <span className="contact-text">021-8068-2838</span>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Find us on social media</h3>
          <div className="social-links">
            <a href="#" className="social-link" title="X (Twitter)">
              <span className="social-icon">𝕏</span>
            </a>
            <a href="#" className="social-link" title="Facebook">
              <span className="social-icon">f</span>
            </a>
            <a href="#" className="social-link" title="YouTube">
              <span className="social-icon">▶</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Tagline theo brand guidelines */}
      <div className="tagline">
        {/* Nội dung "FOR LIFE UNINTERRUPTED™" được thêm vào qua CSS */}
      </div>
      
      <div className="copyright">
        © 2025 Syngenta
      </div>
      
      <div className="legal-disclaimer">
        © 2016, Syngenta. Product names marked ® or TM, the ALLIANCE FRAME, the SYNGENTA wordmark and the PURPOSE ICON are trademarks of a Syngenta Group Company.
      </div>
    </footer>
  );
};

export default Footer;