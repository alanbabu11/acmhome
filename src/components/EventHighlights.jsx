import React from 'react';

// Import images from assets
import highlight1 from '../../images/highlights/img1.avif';
import highlight2 from '../../images/highlights/2.avif';
import highlight3 from '../../images/highlights/3.avif';
import highlight4 from '../../images/highlights/img2.avif';

export default function EventHighlights() {
    return (
        <section className="bg-white py-20 px-5 sm:px-10 lg:px-20 overflow-hidden" id="event-highlights">
            <div>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-[700px]">
                        <h2 className="text-[2rem] font-extrabold mb-4 text-[#111] leading-tight">
                            Get to know some Event Highlights
                        </h2>
                        <p className="text-[#444] text-[1.1rem] leading-[1.6]">
                            From hands-on workshops to thrilling competitions and insightful seminars, we bring
                            together students, professionals, and experts from the tech world to inspire and empower
                            the next generation of innovators.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <a
                            href="#upcoming-events"
                            className="inline-flex items-center gap-3 bg-[#00AEEF] text-white font-bold py-3.5 px-8 rounded-2xl text-[1rem] transition-all duration-300 hover:bg-[#0090c5] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,174,239,0.25)] group"
                        >
                            Get to know more
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
                </div>

                {/* Bento Grid layout */}
                <div className="flex flex-col md:flex-row gap-6 min-h-[500px]">
                    {/* Main Large Card */}
                    <div className="flex-[2.4] relative rounded-[32px] overflow-hidden bg-[#eef2f7] group h-[400px] md:h-auto">
                        <img
                            src={highlight1}
                            alt="Event Highlight 1"
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Side Cards Column - Adjusted for better visibility */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex-1 min-h-[180px] rounded-[32px] overflow-hidden bg-[#eef2f7] group">
                            <img
                                src={highlight2}
                                alt="Event Highlight 2"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex-1 min-h-[180px] rounded-[32px] overflow-hidden bg-[#eef2f7] group">
                            <img
                                src={highlight3}
                                alt="Event Highlight 3"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="flex-1 min-h-[180px] rounded-[32px] overflow-hidden bg-[#eef2f7] group">
                            <img
                                src={highlight4}
                                alt="Event Highlight 4"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
