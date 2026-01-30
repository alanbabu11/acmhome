import React, { useState, useEffect, useCallback } from 'react';

const EVENTS = [
  { id: 1, title: "Workshop 1" },
  { id: 2, title: "Hackathon 2024" },
  { id: 3, title: "Tech Talk" },
  { id: 4, title: "Networking Night" },
  { id: 5, title: "Code Jam" },
  { id: 6, title: "UI/UX Seminar" },
];

// Triple cloning for seamless infinite loop
const EXTENDED_EVENTS = [...EVENTS, ...EVENTS, ...EVENTS];

export default function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const totalOriginal = EVENTS.length;

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(totalOriginal);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(totalOriginal - 1);
      }, 10);
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, totalOriginal]);

  useEffect(() => {
    let timeout;
    if (currentIndex >= totalOriginal * 2) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalOriginal);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, totalOriginal]);

  return (
    <section className="w-full bg-white pt-[100px] max-[768px]:pt-[60px]">
      <div className="mx-25 mb-9 text-left">
        <h2 className="text-[2.5rem] font-extrabold mb-2 text-[#111]">Upcoming Events</h2>
        <p className="text-[#444] text-[1.1rem] mb-0 max-w-[700px]">
          From hands-on workshops to thrilling competitions and insightful seminars, we bring<br />
          together students, professionals, and experts from the tech world to inspire and empower
          the next generation of innovators.
        </p>
      </div>

      <div className="bg-[#d9f3fc] rounded-[18px] py-9 flex items-center mx-25 mb-10 relative overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full text-[#1a1a1a] shadow-sm hover:bg-white hover:scale-110 transition-all cursor-pointer border-none"
          tabIndex={0}
          aria-label="Previous Event"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="flex-1 overflow-hidden px-8">
          <div
            className="flex gap-8"
            style={{
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              transform: `translateX(calc(-${currentIndex * 320}px - ${currentIndex * 2}rem))`
            }}
          >
            {EXTENDED_EVENTS.map((event, idx) => (
              <div
                key={`${event.id}-${idx}`}
                className="min-w-[320px] w-[320px] h-[220px] bg-[#d3d3d3] rounded-[16px] transition-shadow duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-[900px]:min-w-[200px] max-[900px]:w-[200px] max-[900px]:h-[140px] flex items-center justify-center text-[#666] font-medium"
              >
                {event.id}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full text-[#1a1a1a] shadow-sm hover:bg-white hover:scale-110 transition-all cursor-pointer border-none"
          tabIndex={0}
          aria-label="Next Event"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
