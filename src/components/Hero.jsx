import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden max-[900px]:h-[50vh]">
      <img
        src="/images/banner.svg"
        alt="St. Joseph's College Banner"
        className="w-full h-full object-cover block will-change-transform"
        style={{
          transform: `translateY(${offset * 0.3}px) scale(1.1)`
        }}
      />
    </section>
  );
}
