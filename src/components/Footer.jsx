import React from 'react';

// Please replace the SVG below with your actual ACM logo SVG if needed
const ACMLogo = () => (
  <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="45" cy="45" r="44" fill="#fff" stroke="#00AEEF" strokeWidth="2" />
    <circle cx="45" cy="45" r="36" fill="#00AEEF" />
    <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold" fontFamily="Arial" dy=".3em">acm</text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white pb-8 w-full">
      <div className="flex justify-between items-end max-w-[1400px] mx-10 pt-10 px-6 sm:px-10 lg:px-20 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
        <div className="footer-left">
          <h3 className="text-[2rem] font-bold mb-[10px]">ACM Students Chapter</h3>
          <p className="text-[#a0a7b2] text-[1.05rem] max-w-[480px]">
            Founded in 2024, the ACM chapter at St. Joseph's College of Engineering handle and manages by Department of Computer Science and Engineering is dedicated to bridging the gap between students and the ever-evolving tech industry.
          </p>
        </div>
        <div className="flex items-center gap-[18px] max-[900px]:items-start">
          <ACMLogo />
          <div className="text-[1rem] text-[#222]">
            <b className="font-bold">Association for<br />Computing Machinery</b>
            <div className="text-[#888] text-[0.95rem]">
              St.Joseph's Student chapter<br />OMR, Chennai-19
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center max-w-[1400px] mx-10 mt-10 border-t border-[#f0f0f0] pt-[18px] px-6 sm:px-10 lg:px-20 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
        <div className="flex gap-[28px]">
          <a href="#" className="text-[#a0a7b2] no-underline text-[1rem]">About us</a>
          <a href="#" className="text-[#a0a7b2] no-underline text-[1rem]">Contact</a>
          <a href="#" className="text-[#a0a7b2] no-underline text-[1rem]">Privacy policy</a>
          <a href="#" className="text-[#a0a7b2] no-underline text-[1rem]">Sitemap</a>
          <a href="#" className="text-[#a0a7b2] no-underline text-[1rem]">Terms of Use</a>
        </div>
        <div className="flex gap-[18px]">
          <span className="w-[38px] h-[38px] bg-[#d9f3fc] rounded-full inline-block" />
          <span className="w-[38px] h-[38px] bg-[#d9f3fc] rounded-full inline-block" />
          <span className="w-[38px] h-[38px] bg-[#d9f3fc] rounded-full inline-block" />
          <span className="w-[38px] h-[38px] bg-[#d9f3fc] rounded-full inline-block" />
          <span className="w-[38px] h-[38px] bg-[#d9f3fc] rounded-full inline-block" />
        </div>
      </div>
    </footer>
  );
}
