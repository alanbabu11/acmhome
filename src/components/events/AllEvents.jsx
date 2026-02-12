import React, { useState } from 'react';
import EventModal from './EventModal';
import calendarIcon from '../../assets/icons/calendar-day.svg';

import { events } from '../../data/events';

const AllEvents = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

    // Extract unique categories from events data
    const categories = Array.from(new Set(events.map(event => event.category)));
    const allFilterOptions = [...categories];

    // Filter events based on search query and active filters
    const filteredEvents = events.filter(event => {
        const matchesSearch = searchQuery.trim() === '' ||
            event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            event.category.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter = activeFilters.length === 0 ||
            activeFilters.includes(event.category);

        return matchesSearch && matchesFilter;
    });

    const toggleFilter = (filter) => {
        if (activeFilters.includes(filter)) {
            setActiveFilters(activeFilters.filter(f => f !== filter));
        } else {
            setActiveFilters([...activeFilters, filter]);
        }
    };

    const removeFilter = (filter) => {
        setActiveFilters(activeFilters.filter(f => f !== filter));
    };

    const clearAllFilters = () => {
        setActiveFilters([]);
        setSearchQuery('');
    };

    // Use current system date for Live check
    const today = new Date("2026-02-12"); // System date provided
    const isToday = (dateString) => {
        const eventDate = new Date(dateString);
        return eventDate.toDateString() === today.toDateString();
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-[60px] max-w-[1280px]">
                <h2 className="text-[32px] font-semibold text-black mb-8 tracking-tight">All Events</h2>

                <div className="flex items-center gap-3 mb-4 flex-wrap relative">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#00AEEF] text-white rounded-lg text-[14px] font-medium shadow-sm">
                        {filteredEvents.length} Events
                    </div>

                    <div className="relative">
                        <button
                            onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-800 rounded-lg text-[14px] font-medium hover:bg-gray-200 transition-colors cursor-pointer group"
                        >
                            Filters
                            <svg className={`w-3 h-2 transition-transform ${isFilterDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.5L6 6.5L11 1.5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {isFilterDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-[100] py-2">
                                {allFilterOptions.map(option => (
                                    <div
                                        key={option}
                                        onClick={() => toggleFilter(option)}
                                        className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 cursor-pointer text-[14px]"
                                    >
                                        <span className={activeFilters.includes(option) ? 'text-[#00AEEF] font-semibold' : 'text-gray-700'}>
                                            {option}
                                        </span>
                                        {activeFilters.includes(option) && (
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={clearAllFilters}
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

                <div className="flex gap-2 mb-10 overflow-x-auto pb-2 min-h-[40px]">
                    {activeFilters.map(filter => (
                        <div key={filter} className="flex items-center gap-2 px-3 py-1 border border-[#00AEEF] text-[#00AEEF] rounded-3xl text-[12px] whitespace-nowrap bg-white shadow-sm">
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
                            key={event.id || index}
                            onClick={() => setSelectedEvent(event)}
                            className="flex flex-col gap-3 group cursor-pointer transform transition-transform duration-300 hover:-translate-y-1.5"
                        >
                            <div className="relative aspect-[1.6] bg-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="absolute bottom-3 right-3 bg-[#00AEEF] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                    {event.category}
                                </div>
                                {isToday(event.date) && (
                                    <div className="absolute top-3 left-3 bg-[#FF3B30] text-white px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider animate-pulse">
                                        Live
                                    </div>
                                )}
                            </div>
                            <h3 className="text-[16px] font-medium text-black leading-snug group-hover:text-[#00AEEF] transition-colors">{event.title}</h3>
                            <div className="flex items-center gap-2 text-[14px] text-gray-400">
                                <img src={calendarIcon} alt="Calendar" width="16" height="16" className="opacity-50" />
                                {event.date}
                            </div>
                        </div>
                    ))}
                    {filteredEvents.length === 0 && (
                        <div className="col-span-full py-20 text-center">
                            <div className="text-gray-400 mb-2">
                                <svg className="mx-auto w-12 h-12 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 font-medium">No events found matching your search.</p>
                            <button
                                onClick={clearAllFilters}
                                className="mt-4 text-[#00AEEF] text-sm font-semibold hover:underline cursor-pointer"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
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

export default AllEvents;
