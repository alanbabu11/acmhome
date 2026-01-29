import React from 'react';

export default function About() {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>ACM - An St. Joseph's Student Chapter</h2>
                        <p>
                            For over 75 years, ACM has been the world's largest scientific and educational
                            computing society, uniting computing educators, researchers and professionals to
                            inspire dialogue, share resources and address the field's challenges. As an ACM
                            member, you belong to a global community that includes more than 100,000 of your
                            peers... colleagues who are advancing computing as a science and a profession.
                        </p>
                        <a href="#" className="read-more-btn">Read More</a>
                    </div>
                    <div className="about-image">
                        <img src="/images/group-photo.jpg" alt="ACM Chapter Group Photo" />
                    </div>
                </div>
            </div>

            <style>{`
        .about-section {
          padding: 100px 0;
          background: white;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-text h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .about-text p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #444;
          margin-bottom: 32px;
        }

        .read-more-btn {
          display: inline-block;
          background-color: #00AEEF;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background-color: #0090c5;
          transform: translateY(-2px);
        }

        .about-image {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .about-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        @media (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .about-text h2 {
            font-size: 1.8rem;
          }

          .about-section {
            padding: 60px 0;
          }
        }
      `}</style>
        </section>
    );
}
