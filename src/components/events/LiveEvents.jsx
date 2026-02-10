import React, { useState, useEffect } from 'react';
import EventDetails from './EventDetails';
import EventModal from './EventModal';

const LiveEvents = () => {
    const events = [
        {
            name: "ACM Workshop: AI Basics",
            description: "Join us for an introductory workshop on Artificial Intelligence. Learn the fundamentals of machine learning and how to build your first model.",
            date: "14th September 2025",
            time: "10:30 AM",
            location: "Main Auditorium"
        },
        {
            name: "Coding Contest: Hack the Night",
            description: "A 12-hour coding marathon where developers compete to solve challenging algorithms and build innovative projects.",
            date: "20th September 2025",
            time: "09:00 PM",
            location: "Innovation Lab"
        },
        {
            name: "Tech Talk: Future of Web Dev",
            description: "Industry experts discuss the evolving landscape of web development, including Tailwind v4, React 19, and the rise of AI-driven coding.",
            date: "25th September 2025",
            time: "04:00 PM",
            location: "Virtual (Zoom)"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        // Pause auto-scroll when modal is open
        if (selectedEvent) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [events.length, selectedEvent]);

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-[60px] max-w-[1280px]">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-[14px] h-[14px] bg-acm-red rounded-full shadow-sm"></div>
                    <h1 className="text-[48px] font-semibold text-black font-inter tracking-tight">Live Events</h1>
                </div>

                {/* Carousel Container */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {events.map((event, index) => (
                            <div key={index} className="w-full flex-shrink-0 overflow-hidden">
                                <div
                                    onClick={() => setSelectedEvent(event)}
                                    className="flex gap-20 items-stretch w-full box-border cursor-pointer group"
                                >
                                    {/* Event Image */}
                                    <div className="flex-1 min-w-0">
                                        <div className="relative rounded-2xl overflow-hidden bg-gray-200 shadow-sm aspect-[1.4] transition-transform duration-300 group-hover:scale-[1.01]">
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-[#E8E8E8]">
                                                <span className="text-lg font-medium">Event Image Placeholder</span>
                                            </div>
                                            <div className="absolute bottom-6 right-6 bg-acm-red text-white py-1.5 px-3.5 rounded-xl text-[14px] font-semibold tracking-wide shadow-lg z-10">
                                                Live
                                            </div>
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <div className="transition-transform duration-300 group-hover:translate-x-2">
                                            <EventDetails {...event} showButtons={false} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Dots */}
                <div className="mt-12 flex gap-5 justify-center">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to event ${index + 1}`}
                            className={`w-[11px] h-[11px] rounded-full transition-all duration-300 transform ${currentIndex === index
                                ? 'bg-gray-500 scale-125'
                                : 'bg-gray-200 hover:bg-gray-300 scale-100'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    isLive={true}
                />
            )}
        </section>
    );
};

export default LiveEvents;
