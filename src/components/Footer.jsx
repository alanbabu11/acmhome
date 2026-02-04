import React from 'react';
import { FaFacebookF, FaYoutube, FaGlobe, FaBehance, FaWhatsapp } from 'react-icons/fa';



export default function Footer() {
  return (
    <footer className="bg-white pb-8 w-full font-sans">
      <div className="flex justify-between items-start max-w-[1400px] mx-auto pt-16 px-6 sm:px-10 lg:px-20 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
        <div className="footer-left max-w-[500px]">
          <h3 className="text-[2rem] font-bold mb-4 text-black">ACM Students Chapter</h3>
          <p className="text-[#a0a7b2] text-[1.05rem] leading-relaxed">
            Founded in 2024, the ACM chapter at St. Joseph's College of Engineering handle and manages by Department of Computer Science and Engineering is dedicated to bridging the gap between students and the ever-evolving tech industry.
          </p>
        </div>

        <div className="flex items-center gap-6 max-[500px]:flex-col max-[500px]:items-start">
          <img src="/logo.svg" alt="ACM Logo" className="w-auto h-32" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-12 px-6 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center border-t border-[#f0f0f0] pt-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-8">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">About us</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Contact</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Privacy policy</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Sitemap</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Terms of Use</a>
          </div>

          <div className="flex gap-4">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaYoutube />} />
            <SocialIcon icon={<FaGlobe />} />
            <SocialIcon icon={<FaBehance />} />
            <SocialIcon icon={<FaWhatsapp />} />
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d9f3fc] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);
