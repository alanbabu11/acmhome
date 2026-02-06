import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../images/logo.svg';
import footer4 from '../assets/logos/footer-4.png';
import footer5 from '../assets/logos/footer-5.png';
import footer6 from '../assets/logos/footer-6.png';
import footer7 from '../assets/logos/footer-7.png';
import footer8 from '../assets/logos/footer-8.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 w-full z-[1000] py-3.5 transition-[box-shadow,background] duration-250 ease-linear text-[#1a1a1a] bg-[#ecf0f1]/95 backdrop-blur-[6px] ${scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.08)]' : ''}`}>
      <div className="flex items-center justify-between gap-[22px] px-5 sm:px-10 lg:px-20">
        <a className="inline-flex items-center min-w-auto" href="#home" aria-label="ACM Home">
          <img className="block h-[72px] w-auto" src={navLogo} alt="ACM Logo" />
        </a>

        <button
          className="hidden w-11 h-11 rounded-[14px] border border-[#0f172a]/12 bg-[#ffffff]/55 cursor-pointer items-center justify-center gap-[5px] p-2.5 max-[900px]:inline-flex"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="block h-[2px] w-full bg-[#0f172a]/80 rounded-[2px]" />
          <span className="block h-[2px] w-full bg-[#0f172a]/80 rounded-[2px]" />
          <span className="block h-[2px] w-full bg-[#0f172a]/80 rounded-[2px]" />
        </button>

        <ul className={`flex gap-10 items-center justify-center flex-1 list-none max-[900px]:hidden ${menuOpen ? '!flex absolute left-1/2 -translate-x-1/2 top-[76px] w-[min(720px,calc(100vw-40px))] bg-[#ffffff]/92 border border-[#0f172a]/8 shadow-[0_14px_40px_rgba(0,0,0,0.10)] rounded-[18px] p-4 gap-[18px] justify-around' : ''}`}>
          <li><Link className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" to="/#home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li>
          <li><Link className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" to="/people" onClick={() => setMenuOpen(false)}>People</Link></li>
          <li><Link className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" to="/#about" onClick={() => setMenuOpen(false)}>About us</Link></li>
          <li><Link className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        </ul>

        <div className="flex gap-[15px] items-center max-[900px]:hidden" aria-label="Social links">
          <a className="group w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Facebook">
            <img src={footer4} alt="Facebook" className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
          </a>
          <a className="group w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Instagram">
            <img src={footer5} alt="Instagram" className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
          </a>
          <a className="group w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Dribbble">
            <img src={footer6} alt="Dribbble" className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
          </a>
          <a className="group w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Figma">
            <img src={footer7} alt="Figma" className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
          </a>
          <a className="group w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="WhatsApp">
            <img src={footer8} alt="WhatsApp" className="w-5 h-5 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
          </a>
        </div>
      </div>
    </nav>
  );
}
