import React from 'react';


export default function AboutACM() {
  return (
    <section className="pt-12">
      <div className="mb-10 flex gap-10 items-start justify-between px-5 sm:px-10 lg:px-20 max-[900px]:flex-col max-[900px]:gap-6">
        <div className="flex-[1.2] min-w-[320px]">
          <h2 className="text-[2rem] font-bold mb-4">ACM - A St. Joseph’s Student Chapter</h2>
          <p className="text-[1.08rem] text-[#444] mb-6 leading-[1.6]">
            Founded in 2024, the ACM chapter at St. Joseph's College of Engineering handle and manages by Department of Computer Science and Engineering is dedicated to bridging the gap between students and the ever-evolving tech industry. Our mission is to foster a community where aspiring technologists can collaborate, innovate, and gain hands-on experience with the latest industry standards. Through workshops, hackathons, and networking opportunities, we empower students to develop the skills and connections needed to succeed in the world of computing.
          </p>
          <a
            href="#upcoming-events"
            className="inline-flex items-center gap-3 bg-[#00AEEF] text-white font-bold py-3.5 px-8 rounded-2xl text-[1rem] transition-all duration-300 hover:bg-[#0090c5] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,174,239,0.25)] group"
          >
            Our Events
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </div>
        <div className="flex-1 min-w-[320px] flex items-center justify-center 2xl:justify-end">
          <img
            src="/images/image9.svg"
            alt="ACM Chapter Group Photo"
            className="size-65 w-full max-w-[520px] rounded-lg shadow-[0_4px_32px_rgba(0,0,0,0.08)] max-[900px]:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
