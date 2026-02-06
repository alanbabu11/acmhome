import React, { useState } from 'react';
import EventModal from './EventModal';
import calendarIcon from '../../assets/icons/calendar-day.svg';

const AllEvents = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState(['ACM', 'Upcoming']);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const allEvents = Array(7).fill({
        title: "This is the Event title: ACM yes",
        date: "14th September 2025",
        category: "ACM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae augue ut est elementum blandit eu eget felis.",
        // Add more mock fields if needed
    });

    const filteredEvents = allEvents.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (activeFilters.length === 0 || activeFilters.includes(event.category))
    );

    const removeFilter = (filter) => {
        setActiveFilters(activeFilters.filter(f => f !== filter));
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-[60px] max-w-[1280px]">
                <h2 className="text-[32px] font-semibold text-black mb-8 tracking-tight">All Events</h2>

                <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[#00AEEF] text-white rounded-lg text-[14px] font-medium hover:bg-[#0096cc] transition-colors cursor-pointer group">
                        {filteredEvents.length} Events
                        <svg className="w-3 h-2 transition-transform group-hover:translate-y-0.5" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-800 rounded-lg text-[14px] font-medium hover:bg-gray-200 transition-colors cursor-pointer group">
                        Filter Option 1
                        <svg className="w-3 h-2 transition-transform group-hover:translate-y-0.5" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button className="px-6 py-2.5 bg-white border border-gray-300 text-gray-600 rounded-lg text-[14px] font-medium hover:bg-gray-50 transition-colors cursor-pointer">
                        Apply
                    </button>

                    <button
                        onClick={() => { setActiveFilters([]); setSearchQuery(''); }}
                        className="text-[14px] text-gray-400 hover:text-gray-600 transition-colors cursor-pointer ml-2"
                    >
                        Clear filters
                    </button>

                    <div className="flex-1 min-w-[300px] relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
                                <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-gray-100 border-none px-4 py-2.5 pl-11 rounded-lg text-[14px] text-gray-800 focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all"
                            placeholder="Search for Events"
                        />
                    </div>
                </div>

                <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
                    {activeFilters.map(filter => (
                        <div key={filter} className="flex items-center gap-2 px-3 py-1 border border-[#00AEEF] text-[#00AEEF] rounded-3xl text-[12px] whitespace-nowrap bg-white">
                            {filter}
                            <span
                                onClick={() => removeFilter(filter)}
                                className="cursor-pointer text-lg leading-none opacity-60 hover:opacity-100 transition-opacity"
                            >
                                ×
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
                    {filteredEvents.map((event, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedEvent(event)}
                            className="flex flex-col gap-3 group cursor-pointer transform transition-transform duration-300 hover:-translate-y-1.5"
                        >
                            <div className="relative aspect-[1.6] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="absolute bottom-3 right-3 bg-[#00AEEF] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                    New
                                </div>
                            </div>
                            <h3 className="text-[16px] font-medium text-black leading-snug group-hover:text-[#00AEEF] transition-colors">{event.title}</h3>
                            <div className="flex items-center gap-2 text-[14px] text-gray-400">
                                <img src={calendarIcon} alt="Calendar" width="16" height="16" className="opacity-50" />
                                {event.date}
                            </div>
                        </div>
                    ))}
                    {filteredEvents.length === 0 && (
                        <div className="col-span-full py-20 text-center text-gray-500">
                            No events found matching your search.
                        </div>
                    )}
                </div>
            </div>

            {selectedEvent && (
                <EventModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                />
            )}
        </section>
    );
};

export default AllEvents;
