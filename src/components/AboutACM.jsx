import React from 'react';

export default function AboutACM() {
  return (
    <section className="pt-12">
      <div className="max-w-[1400px] mx-5 mb-10 flex gap-10 items-start justify-between px-5 sm:px-10 lg:px-20 max-[900px]:flex-col max-[900px]:gap-6">
        <div className="flex-[1.2] min-w-[320px]">
          <h2 className="text-[2rem] font-bold mb-4">ACM - An St. Joseph’s Student Chapter</h2>
          <p className="text-[1.08rem] text-[#444] mb-6 leading-[1.6]">
            Founded in 2024, the ACM chapter at St. Joseph's College of Engineering handle and manages by Department of Computer Science and Engineering is dedicated to bridging the gap between students and the ever-evolving tech industry. Our mission is to foster a community where aspiring technologists can collaborate, innovate, and gain hands-on experience with the latest industry standards. Through workshops, hackathons, and networking opportunities, we empower students to develop the skills and connections needed to succeed in the world of computing.
          </p>
          <a href="#upcoming-events" className="inline-block bg-[#00AEEF] text-white font-bold py-2.5 px-6 rounded text-[1.1rem] transition-colors duration-200 hover:bg-[#008fc5]">Our Events</a>
        </div>
        <div className="flex-1 min-w-[320px] flex items-center justify-center">
          <img
            src="/images/image 9.png"
            alt="ACM Chapter Group Photo"
            className="size-65 w-full max-w-[520px] rounded-lg shadow-[0_4px_32px_rgba(0,0,0,0.08)] max-[900px]:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
