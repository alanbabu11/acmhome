import React from 'react';

export default function UpcomingEvents() {
  return (
    <section className="w-full bg-white pt-[100px] max-[768px]:pt-[60px]">
      <div className="max-w-[1200px] mx-auto mb-9 text-left px-5 md:px-10 lg:px-0">
        <h2 className="text-[2.5rem] font-extrabold mb-2 text-[#111]">Upcoming Events</h2>
        <p className="text-[#444] text-[1.1rem] mb-0 max-w-[700px]">
          From hands-on workshops to thrilling competitions and insightful seminars, we bring<br />
          together students, professionals, and experts from the tech world to inspire and empower
          the next generation of innovators.
        </p>
      </div>
      <div className="bg-[#d9f3fc] rounded-[18px] py-9 flex items-center justify-center mx-auto mb-10 max-w-[95vw]">
        <button
          className="bg-none border-none text-[2rem] text-[#6a7a8c] cursor-pointer px-6 select-none transition-colors duration-200 hover:text-[#222] after:content-['\\2190']"
          tabIndex={0}
          aria-label="Previous Event"
        />
        <div className="flex gap-8 max-[900px]:gap-4">
          <div className="w-[320px] h-[220px] bg-[#d3d3d3] rounded-[16px] transition-shadow duration-200 hover:cursor-pointer hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-[900px]:w-[200px] max-[900px]:h-[140px]" />
          <div className="w-[320px] h-[220px] bg-[#d3d3d3] rounded-[16px] transition-shadow duration-200 hover:cursor-pointer hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-[900px]:w-[200px] max-[900px]:h-[140px]" />
          <div className="w-[320px] h-[220px] bg-[#d3d3d3] rounded-[16px] transition-shadow duration-200 hover:cursor-pointer hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-[900px]:w-[200px] max-[900px]:h-[140px]" />
        </div>
        <button
          className="bg-none border-none text-[2rem] text-[#6a7a8c] cursor-pointer px-6 select-none transition-colors duration-200 hover:text-[#222] after:content-['\\2192']"
          tabIndex={0}
          aria-label="Next Event"
        />
      </div>
    </section>
  );
}
