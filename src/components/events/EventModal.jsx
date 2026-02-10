import React, { useState, useEffect } from 'react';
import calendarIcon from '../../assets/icons/calendar-day.svg';
import alarmIcon from '../../assets/icons/alarm.svg';

const EventModal = ({ event, onClose, isLive = false }) => {
    // Mock multiple images for the carousel
    const images = [
        event.image || '', // Fallback or event image
        // Add placeholders for carousel simulation
        '',
        ''
    ];

    // Use event specific images if available in future
    const displayImages = event.images || images;

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        // Disable body scroll when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
            setIsVisible(false);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev + 1) % displayImages.length);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    };

    return (
        <div
            className={`fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ease-out ${isVisible ? 'bg-black/40 backdrop-blur-md opacity-100' : 'bg-black/0 backdrop-blur-none opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className={`bg-white w-full max-w-[1100px] h-[85vh] max-h-[700px] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 transform relative ${isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Specific Close Button for Live Events */}
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-50 w-8 h-8 flex items-center justify-center bg-[#00AEEF] text-white rounded-full hover:bg-[#0096cc] transition-colors shadow-md cursor-pointer"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 3.5L3.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                {/* Left Side: Media Carousel */}
                <div className="w-full md:w-[60%] bg-[#E0E0E0] relative group select-none">
                    <div className="w-full h-full relative overflow-hidden">
                        <div
                            className="flex h-full transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {displayImages.map((img, idx) => (
                                <div key={idx} className="w-full h-full flex-shrink-0 flex items-center justify-center bg-gray-200">
                                    {/* Placeholder content if image fails or for demo */}
                                    <div className="text-gray-400 font-medium text-xl absolute">Event Poster/Video</div>
                                    <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover relative z-10 opacity-0" onLoad={(e) => e.target.classList.remove('opacity-0')} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    >
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L1 5L5 1" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    >
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 9L5 5L1 1" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                        {displayImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Side: Details */}
                <div className="w-full md:w-[40%] bg-white p-10 flex flex-col h-full overflow-y-auto">
                    <div className="flex-1">
                        {isLive && (
                            <div className="flex items-center gap-2 mb-3">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF3B30]"></span>
                                </span>
                                <span className="text-[#1a1a1a] font-medium text-[15px]">Live Now</span>
                            </div>
                        )}

                        <h2 className="text-[28px] font-semibold text-black mb-2 leading-tight">{event.title || event.name}</h2>
                        <div className="flex items-center gap-2 mb-8 text-[#555]">
                            {isLive ? (
                                <>
                                    <img src={alarmIcon} alt="Time" width="18" height="18" className="opacity-70" />
                                    <span className="text-[15px] font-medium">Ends in 3hrs</span>
                                </>
                            ) : (
                                <>
                                    <img src={calendarIcon} alt="Date" width="16" height="16" className="opacity-70" />
                                    <span className="text-[14px] font-medium">Ended on {event.date}</span>
                                </>
                            )}
                        </div>

                        <div className="space-y-6 text-[#666] text-[15px] leading-relaxed">
                            <p>
                                {event.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue ut est elementum blandit eu eget felis. Pellentesque rutrum lectus lacus, sit amet fringilla orci eleifend vitae."}
                            </p>
                            <p>
                                {event.details || "Sed consectetur, mauris in congue venenatis, nunc eros porta turpis, nec ultrices eros dui nec urna. Praesent convallis quis dolor in mattis. Maecenas libero nunc, ultrices dignissim est id, vestibulum auctor arcu. Pellentesque nec augue elit."}
                            </p>
                        </div>

                        {!isLive && (
                            <div className="mt-10">
                                <button className="bg-[#00AEEF] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#0096cc] transition-colors shadow-md cursor-pointer">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.25 10.5V12.25C12.25 12.5594 12.1271 12.8561 11.9083 13.0749C11.6895 13.2937 11.3928 13.4167 11.0833 13.4167H1.75C1.44058 13.4167 1.14387 13.2937 0.925063 13.0749C0.706249 12.8561 0.583333 12.5594 0.583333 12.25V2.91667C0.583333 2.60725 0.706249 2.31054 0.925063 2.09173C1.14387 1.87292 1.44058 1.75 1.75 1.75H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.75 0.583334H13.4167V5.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.83333 8.16667L13.4167 0.583334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Visit Gallery
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <h4 className="text-gray-400 text-sm font-medium mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {['ACM', 'Recent'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-full border border-[#00AEEF] text-[#00AEEF] text-xs font-medium flex items-center gap-1">
                                    {tag}
                                    <span className="text-gray-400 hover:text-red-500 cursor-pointer text-base leading-none">×</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventModal;
