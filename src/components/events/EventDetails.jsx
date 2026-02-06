import React from 'react';
import calendarIcon from '../../assets/icons/calendar-day.svg';
import alarmIcon from '../../assets/icons/alarm.svg';
import locationIcon from '../../assets/icons/location.svg';

const EventDetails = ({ name, description, date, time, location, showButtons = true }) => {
    return (
        <div className="text-black flex flex-col justify-center h-full">
            <h2 className="text-[40px] font-semibold mb-4 font-inter tracking-tight leading-tight">{name}</h2>
            <div className="mb-6">
                <p className="text-secondary text-[15px] leading-relaxed max-w-[500px]">
                    {description || "Join us for this exciting live event and stay ahead in the tech world."}
                </p>
            </div>

            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                    <img src={calendarIcon} alt="Calendar" width="20" height="20" className="opacity-70" />
                    <div className="text-secondary text-[15px] font-normal">{date}</div>
                </div>

                <div className="flex items-center gap-4">
                    <img src={alarmIcon} alt="Time" width="20" height="20" className="opacity-70" />
                    <div className="text-secondary text-[15px] font-normal">{time}</div>
                </div>

                <div className="flex items-center gap-4">
                    <img src={locationIcon} alt="Location" width="16" height="16" className="opacity-70" />
                    <div className="text-secondary text-[15px] font-normal">{location}</div>
                </div>
            </div>

            {showButtons && (
                <div className="flex gap-4 mt-10">
                    <button
                        onClick={() => alert(`Registered for ${name}!`)}
                        className="bg-[#00AEEF] hover:bg-[#0096cc] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md cursor-pointer"
                    >
                        Register Now
                    </button>
                    <button
                        onClick={() => alert(`Added ${name} to your saved events.`)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
                    >
                        Save for later
                    </button>
                </div>
            )}
        </div>
    );
};

export default EventDetails;
