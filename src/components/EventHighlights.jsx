/* REBOOT v2 - HIGH FIDELITY BENTO GRID */
import React from 'react';

export default function EventHighlights() {
    return (
        <section className="event-highlights-section" id="event-highlights">
            <div className="content-wrapper">
                <header className="highlights-header">
                    <div className="header-text">
                        <h2>Get to know some Event Highlights</h2>
                        <p className="description">
                            From hands-on workshops to thrilling competitions and insightful seminars, we bring
                            together students, professionals, and experts from the tech world to inspire and empower
                            the next generation of innovators.
                        </p>
                    </div>
                    <div className="header-action">
                        <a href="#" className="btn-know-more">
                            Get to know more
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </header>

                <div className="bento-grid">
                    <div className="main-feature">
                        <img src="/events/main.png" alt="Main Event" className="feature-img" />
                        <div className="events-badge">
                            <span className="chapter-label">ACM Chapter</span>
                            <span className="events-title">Our Events</span>
                        </div>
                    </div>
                    <div className="side-gallery">
                        <div className="gallery-card">
                            <img src="/events/comp.png" alt="Competition" />
                        </div>
                        <div className="gallery-card">
                            <img src="/events/seminar.png" alt="Seminar" />
                        </div>
                        <div className="gallery-card">
                            <img src="/events/workshop.png" alt="Workshop" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .event-highlights-section {
          padding: 100px 0;
          background-color: #f1f4f9;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          width: 100%;
          position: relative;
          z-index: 5;
        }

        .content-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .highlights-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end; /* Align to bottom of text like design */
          margin-bottom: 60px;
          gap: 40px;
        }

        .header-text {
          max-width: 650px;
        }

        .header-text h2 {
          font-size: 2.8rem;
          font-weight: 800;
          color: #111;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .header-text p.description {
          font-size: 1.1rem;
          color: #444;
          line-height: 1.6;
          margin: 0;
        }

        .btn-know-more {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: #00AEEF;
          color: white;
          padding: 16px 32px;
          border-radius: 16px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0, 174, 239, 0.15);
        }

        .btn-know-more:hover {
          background-color: #0090c5;
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 174, 239, 0.25);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 2.4fr 1fr;
          gap: 30px;
          height: 850px;
        }

        .main-feature {
          position: relative;
          border-radius: 48px;
          overflow: hidden;
          background: #eef2f7;
          box-shadow: 0 12px 48px rgba(0,0,0,0.06);
        }

        .feature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .main-feature:hover .feature-img {
          transform: scale(1.04);
        }

        .events-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 28px 56px;
          border-radius: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          pointer-events: none;
          z-index: 10;
        }

        .chapter-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: #777;
          margin-bottom: 6px;
        }

        .events-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #000;
          white-space: nowrap;
        }

        .side-gallery {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
          gap: 30px;
        }

        .gallery-card {
          border-radius: 36px;
          overflow: hidden;
          background: #eef2f7;
          box-shadow: 0 8px 32px rgba(0,0,0,0.04);
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .gallery-card:hover {
          transform: translateY(-8px);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 1200px) {
          .bento-grid {
            height: 700px;
          }
          .header-text h2 {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 992px) {
          .highlights-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .bento-grid {
            grid-template-columns: 1fr;
            height: auto;
            gap: 24px;
          }
          .main-feature {
            height: 500px;
          }
          .side-gallery {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 200px;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .side-gallery {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(3, 260px);
          }
          .content-wrapper {
            padding: 0 20px;
          }
          .event-highlights-section {
            padding: 60px 0;
          }
        }
      `}</style>
        </section>
    );
}
