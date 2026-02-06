import React from 'react';
import LiveEvents from '../components/events/LiveEvents';
import AllEvents from '../components/events/AllEvents';

const EventsPage = () => {
    return (
        <div className="events-page min-h-screen bg-[#F8FAFC]">
            <main>
                <LiveEvents />
                <AllEvents />
            </main>
        </div>
    );
};

export default EventsPage;
