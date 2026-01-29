import React, { useState, useEffect } from 'react';
import navLogo from '../../images/logo.svg';

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
      <div className="flex items-center justify-between gap-[22px] px-5 sm:px-10 lg:px-20 max-w-[1400px] mx-auto">
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
          <li><a className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
          <li><a className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" href="#people" onClick={() => setMenuOpen(false)}>People</a></li>
          <li><a className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" href="#about" onClick={() => setMenuOpen(false)}>About us</a></li>
          <li><a className="font-bold text-[0.95rem] text-[#1a1a1a] capitalize tracking-normal transition-colors duration-200 hover:text-[#00AEEF]" href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
        </ul>

        <div className="flex gap-[15px] items-center max-[900px]:hidden" aria-label="Social links">
          <a className="w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M14 8.5V7.2c0-.9.2-1.4 1.4-1.4H17V3h-2.2C12.2 3 11 4.5 11 6.8v1.7H9v3h2V21h3v-9.5h2.5l.5-3H14Z" fill="currentColor" />
            </svg>
          </a>
          <a className="w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4A4.8 4.8 0 0 1 16.2 21H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3Zm0 2A2.8 2.8 0 0 0 5 7.8v8.4A2.8 2.8 0 0 0 7.8 19h8.4a2.8 2.8 0 0 0 2.8-2.8V7.8A2.8 2.8 0 0 0 16.2 5H7.8Z" fill="currentColor" />
              <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm5.3-2.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" fill="currentColor" />
            </svg>
          </a>
          <a className="w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Dribbble">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.9 9.2a15.2 15.2 0 0 0-6.1.2c-.2-.4-.3-.8-.5-1.2A16.2 16.2 0 0 0 18 6.4a8 8 0 0 1 1.9 4.8ZM16.5 4.9a14.3 14.3 0 0 1-4 3.2 28.2 28.2 0 0 0-3-4.2 7.9 7.9 0 0 1 7-.1ZM7.2 4.7a26.4 26.4 0 0 1 3.1 4.3 15.3 15.3 0 0 1-6.2 1.7 8 8 0 0 1 3.1-6Zm-3 8a17.2 17.2 0 0 0 7.1-2c.2.4.4.7.5 1.1a15.6 15.6 0 0 0-5.8 5.2 8 8 0 0 1-1.8-4.3Zm3.4 6a13.6 13.6 0 0 1 5.1-4.6 25.7 25.7 0 0 1 1.3 5.6 7.9 7.9 0 0 1-6.4-1Zm8.4.5a27.6 27.6 0 0 0-1.1-4.8c1.9-.6 4.1-.7 5.9-.3a8 8 0 0 1-4.8 5.1Z" fill="currentColor" />
            </svg>
          </a>
          <a className="w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="Figma">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M8.5 2A3.5 3.5 0 0 0 5 5.5 3.5 3.5 0 0 0 8.5 9H12V2H8.5Z" fill="currentColor" />
              <path d="M12 2h3.5A3.5 3.5 0 0 1 19 5.5 3.5 3.5 0 0 1 15.5 9H12V2Z" fill="currentColor" opacity="0.9" />
              <path d="M8.5 9A3.5 3.5 0 0 0 5 12.5 3.5 3.5 0 0 0 8.5 16H12V9H8.5Z" fill="currentColor" opacity="0.85" />
              <path d="M15.5 9A3.5 3.5 0 0 1 19 12.5 3.5 3.5 0 0 1 15.5 16 3.5 3.5 0 0 1 12 12.5 3.5 3.5 0 0 1 15.5 9Z" fill="currentColor" opacity="0.8" />
              <path d="M8.5 16H12v3.5A3.5 3.5 0 0 1 8.5 23 3.5 3.5 0 0 1 5 19.5 3.5 3.5 0 0 1 8.5 16Z" fill="currentColor" opacity="0.75" />
            </svg>
          </a>
          <a className="w-10 h-10 rounded-full border border-[#00AEEF]/25 bg-[#00AEEF]/12 text-[#00AEEF] text-base cursor-pointer flex items-center justify-center transition-all duration-200 hover:bg-[#00AEEF] hover:text-white" href="#" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M12 2a9.5 9.5 0 0 0-8.2 14.3L3 22l5.9-1.6A9.5 9.5 0 1 0 12 2Zm0 2a7.5 7.5 0 0 1 0 15 7.4 7.4 0 0 1-3.2-.7l-.5-.2-3.5 1 1-3.3-.3-.5A7.5 7.5 0 0 1 12 4Z" fill="currentColor" />
              <path d="M9.2 8.3c.2-.4.4-.4.6-.4h.5c.1 0 .3 0 .4.3l.7 1.7c.1.3 0 .5-.1.7l-.3.4c-.1.1-.2.3 0 .6.2.3.7 1.2 1.6 2 .9.8 1.6 1.1 1.9 1.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.7-.1l1.6.7c.3.1.3.3.3.4v.6c0 .2 0 .4-.4.6-.4.2-1.1.4-1.7.4-.6 0-1.4-.1-2.7-.8-1.3-.7-2.4-1.8-3.2-3.1-.7-1.2-.8-2.1-.8-2.7 0-.6.2-1.3.4-1.7Z" fill="currentColor" opacity="0.9" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
