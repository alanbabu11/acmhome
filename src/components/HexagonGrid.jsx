import React, { useState, useEffect } from 'react';

const resolveImage = (file) => new URL(`./heximgs/${file}`, import.meta.url).href;

const TEAM_MEMBERS = [
  { id: 1, name: "Kavin Thangamani", role: "Chairperson", img: resolveImage('kavincol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 2, name: "Jasmine Ramola J", role: "Vice Chairperson", img: resolveImage('JasmineCol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 3, name: "Karston", role: "Secretary", img: resolveImage('karstoncol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 4, name: "Junaid", role: "Joint Secretary", img: resolveImage('noprofile.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 5, name: "Shobika D", role: "Research Head", img: resolveImage('shobikacol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 6, name: "Vidur Varshan", role: "Membership Chair", img: resolveImage('vidurcol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 7, name: "Ruth J", role: "Treasurer", img: resolveImage('ruthcol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 8, name: "Alan Babu K", role: "Technical Head", img: resolveImage('alanbabuCol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 9, name: "Jefray ", role: "Design Head", img: resolveImage('noprofile.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 10, name: "Joshua Ryan", role: "Social Media Head", img: resolveImage('JoshuaRyanCol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 11, name: "Allen Joseph", role: "Project Head", img: resolveImage('AllenCol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 12, name: "Harini S", role: "Event Head", img: resolveImage('HariniCol.svg'), linkedInUrl: "https://linkedin.com" },
  { id: 13, name: "Austin Jayaraj", role: "Web Master", img: resolveImage('AustinCol.svg'), linkedInUrl: "https://linkedin.com" },
];

const Hexagon = ({ member, isGhost, distance, side }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  // Hexagon clip path style
  const hexStyle = {
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
  };

  if (isGhost) {
    const opacity = distance === 1 ? 0.7 : 0.35;
    return (
      <div
        className={`hexagon-wrapper ghost ${side ? `ghost-${side}` : ''} w-[100px] h-[115px] relative mx-[2px] transition-transform duration-300 z-[1] md:w-[220px] md:h-[254px] md:mx-[4px] ${side === 'left' ? 'bg-gradient-to-r from-white to-[#999999]' : ''} ${side === 'right' ? 'bg-gradient-to-l from-white to-[#999999]' : ''}`}
        style={{ opacity, ...hexStyle }}
      />
    );
  }

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 768) {
      setPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleClick = () => {
    if (member.linkedInUrl) {
      window.open(member.linkedInUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <div
        className="hexagon-wrapper w-[100px] h-[115px] relative mx-[2px] transition-transform duration-300 z-[1] hover:z-10 hover:-translate-y-1 md:w-[220px] md:h-[254px] md:mx-[4px]"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="hexagon w-full h-full bg-[#eee] overflow-hidden cursor-[url('/cursor.svg'),auto] relative" style={hexStyle}>
          <img
            src={member.img}
            alt={member.name}
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.4s, transform 0.4s, opacity 0.7s',
              margin: 0,
              padding: 0,
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Mobile-only Label Overlay */}
        <div className="mobile-label md:hidden absolute bottom-[15px] left-0 right-0 text-center z-[2] pointer-events-none">
          <div className="mobile-label-content flex flex-col bg-white/90 p-1 rounded-[4px] mx-[10px]">
            <span className="mobile-name text-[0.6rem] font-bold text-[#333] truncate">{member.name}</span>
            <span className="mobile-role text-[0.5rem] text-[#666] truncate">{member.role}</span>
          </div>
        </div>
      </div>

      {isHovered && window.innerWidth >= 768 && (
        <div
          className="fixed-tooltip fixed pointer-events-none bg-white py-2 px-4 rounded-br-[1.5625rem] rounded-tl-none rounded-tr-[1.5625rem] rounded-bl-[1.5625rem] shadow-[0_10px_30px_rgba(0,0,0,0.15)] z-[1000] flex flex-col justify-center whitespace-nowrap animate-tooltipFade"
          style={{ top: pos.y + 15, left: pos.x + 15 }}
        >
          <span className="tooltip-name text-[#5c5c5c] font-bold text-[0.75rem] leading-normal">{member.name}</span>
          <span className="tooltip-role text-black font-semibold text-[0.875rem] leading-normal">{member.role}</span>
        </div>
      )}
    </>
  );
};

export default function HexagonGrid() {
  // 4-5-4 Layout structure with multiple ghosts for background effect
  const rowConfigs = [
    { ghostLeft: 2, count: 4, ghostRight: 2, start: 0 },
    { ghostLeft: 2, count: 5, ghostRight: 2, start: 4 },
    { ghostLeft: 2, count: 4, ghostRight: 2, start: 9 },
  ];

  return (
    <section className="team-section py-20 overflow-hidden">
      <div className="container mx-6">
        <div className="header-content text-left mb-16 max-w-[800px] px-5 sm:px-10 lg:px-20">
          <h2 className="text-[2rem] font-extrabold mb-4 text-black leading-tight tracking-tight md:text-[2rem]">Driving Change, Leading the Charge</h2>
          <p className="subtitle text-[#555] text-[1.1rem] leading-[1.6]">
            Our leadership team is dedicated to creating opportunities, fostering growth, and inspiring the next generation of tech leaders. These are the changemakers who guide ACM St. Joseph's Chapter toward success and innovation.
          </p>
        </div>

        <div className="hex-grid-container flex flex-col items-center mt-5">
          {rowConfigs.map((row, rowIndex) => (
            <div key={rowIndex} className={`hex-row flex justify-center mb-[-25px] md:mb-[-60px] row-${rowIndex}`}> {/* Overlap rows */}
              {/* Left ghosts */}
              {Array.from({ length: row.ghostLeft }).map((_, i) => {
                const distance = row.ghostLeft - i;
                return <Hexagon key={`ghost-l-${rowIndex}-${i}`} isGhost={true} distance={distance} side="left" />;
              })}

              {/* Members */}
              {TEAM_MEMBERS.slice(row.start, row.start + row.count).map(member => (
                <Hexagon key={member.id} member={member} />
              ))}

              {/* Right ghosts */}
              {Array.from({ length: row.ghostRight }).map((_, i) => {
                const distance = i + 1;
                return <Hexagon key={`ghost-r-${rowIndex}-${i}`} isGhost={true} distance={distance} side="right" />;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

