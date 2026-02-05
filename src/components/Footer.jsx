import React from 'react';
import footer4 from '../assets/logos/footer-4.png';
import footer5 from '../assets/logos/footer-5.png';
import footer6 from '../assets/logos/footer-6.png';
import footer7 from '../assets/logos/footer-7.png';
import footer8 from '../assets/logos/footer-8.png';



export default function Footer() {
  return (
    <footer className="bg-white pb-8 w-full font-sans">
      <div className="flex justify-between items-start pt-16 px-5 sm:px-10 lg:px-20 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6">
        <div className="footer-left max-w-[500px]">
          <h3 className="text-[2rem] font-bold mb-4 text-black">ACM Students Chapter</h3>
          <p className="text-[#a0a7b2] text-[1.05rem] leading-relaxed">
            Founded in 2024, the ACM chapter at St. Joseph's College of Engineering handled and managed by the Department of Computer Science and Engineering, is dedicated to bridging the gap between students and the ever-evolving tech industry.
          </p>
        </div>

        <div className="flex items-center gap-6 max-[500px]:flex-col max-[500px]:items-start">
          <img src="/logo.svg" alt="ACM Logo" className="w-auto h-32" />
        </div>
      </div>

      <div className="mt-12 px-5 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center border-t border-[#f0f0f0] pt-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-8">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">About us</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Contact</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Privacy policy</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Sitemap</a>
            <a href="#" className="text-[#a0a7b2] hover:text-[#00AEEF] transition-colors no-underline text-[1rem]">Terms of Use</a>
          </div>

          <div className="flex gap-4">
            <SocialIcon src={footer4} alt="Facebook" />
            <SocialIcon src={footer5} alt="YouTube" />
            <SocialIcon src={footer6} alt="Website" />
            <SocialIcon src={footer7} alt="Figma" />
            <SocialIcon src={footer8} alt="WhatsApp" />
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ src, alt }) => (
  <a
    href="#"
    className="group w-12 h-12 flex items-center justify-center rounded-full bg-[#d9f3fc] hover:bg-[#00AEEF] transition-all duration-300 transform hover:scale-110"
  >
    <img src={src} alt={alt} className="w-6 h-6 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
  </a>
);
