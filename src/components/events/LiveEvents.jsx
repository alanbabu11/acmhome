import React, { useState, useEffect } from 'react';
import EventDetails from './EventDetails';
import EventModal from './EventModal';

import { events } from '../../data/events';

const LiveEvents = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Find the latest event based on date
    const latestEvent = events.reduce((latest, current) => {
        return new Date(current.date) > new Date(latest.date) ? current : latest;
    }, events[0]);

    // Use current system date for Live check
    const today = new Date("2026-02-12"); // System date provided
    const isToday = (dateString) => {
        const eventDate = new Date(dateString);
        return eventDate.toDateString() === today.toDateString();
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-[60px] max-w-[1280px]">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="w-[14px] h-[14px] bg-acm-red rounded-full shadow-sm"></div>
                    <h1 className="text-[48px] font-semibold text-black font-inter tracking-tight">Latest Event</h1>
                </div>

                {/* Single Event Display */}
                <div
                    onClick={() => setSelectedEvent(latestEvent)}
                    className="flex gap-20 items-stretch w-full box-border cursor-pointer group"
                >
                    {/* Event Image */}
                    <div className="flex-1 min-w-0">
                        <div className="relative rounded-2xl overflow-hidden bg-gray-200 shadow-sm aspect-[1.4] transition-transform duration-300 group-hover:scale-[1.01]">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-[#E8E8E8]">
                                <span className="text-lg font-medium">Event Image Placeholder</span>
                            </div>
                            {isToday(latestEvent.date) && (
                                <div className="absolute bottom-6 right-6 bg-acm-red text-white py-1.5 px-3.5 rounded-xl text-[14px] font-semibold tracking-wide shadow-lg z-10 animate-pulse">
                                    Live
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <div className="transition-transform duration-300 group-hover:translate-x-2">
                            <EventDetails
                                name={latestEvent.title}
                                description={latestEvent.description}
                                date={latestEvent.date}
                                time={latestEvent.time}
                                location={latestEvent.location}
                                showButtons={false}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    isLive={isToday(selectedEvent.date)}
                />
            )}
        </section>
    );
};

export default LiveEvents;
