import React from 'react';

// Please replace the SVG below with your actual ACM logo SVG if needed
const ACMLogo = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="44" fill="#fff" stroke="#00AEEF" strokeWidth="2"/>
    <circle cx="45" cy="45" r="36" fill="#00AEEF"/>
    <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold" fontFamily="Arial" dy=".3em">acm</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="footer-left">
          <h3>ACM Students Chapter</h3>
          <p>
            Founded in 2024, the ACM chapter at St. Joseph's College of Engineering handle and manages by Department of Computer Science and Engineering is dedicated to bridging the gap between students and the ever-evolving tech industry.
          </p>
        </div>
        <div className="footer-right">
          <ACMLogo />
          <div className="footer-org-text">
            <b>Association for<br />Computing Machinery</b>
            <div className="footer-org-details">
              St.Joseph's Student chapter<br />OMR, Chennai-19
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">About us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy policy</a>
          <a href="#">Sitemap</a>
          <a href="#">Terms of Use</a>
        </div>
        <div className="footer-socials">
          <span className="footer-social-icon" />
          <span className="footer-social-icon" />
          <span className="footer-social-icon" />
          <span className="footer-social-icon" />
          <span className="footer-social-icon" />
        </div>
      </div>
      <style>{`
        .footer-section {
          background: #fff;
          padding: 0 0 32px 0;
          width: 100%;
        }
        .footer-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 0 0 0;
        }
        .footer-left h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .footer-left p {
          color: #a0a7b2;
          font-size: 1.05rem;
          max-width: 480px;
        }
        .footer-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .footer-org-text {
          font-size: 1rem;
          color: #222;
        }
        .footer-org-details {
          color: #888;
          font-size: 0.95rem;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 40px auto 0 auto;
          border-top: 1px solid #f0f0f0;
          padding-top: 18px;
        }
        .footer-links {
          display: flex;
          gap: 28px;
        }
        .footer-links a {
          color: #a0a7b2;
          text-decoration: none;
          font-size: 1rem;
        }
        .footer-socials {
          display: flex;
          gap: 18px;
        }
        .footer-social-icon {
          width: 38px;
          height: 38px;
          background: #d9f3fc;
          border-radius: 50%;
          display: inline-block;
        }
        @media (max-width: 900px) {
          .footer-main, .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .footer-right {
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
