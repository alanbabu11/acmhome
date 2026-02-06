import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { members, sectors } from '../data/members';
import MemberCard from '../components/people/MemberCard';
import MemberModal from '../components/people/MemberModal';
import FilterTabs from '../components/people/FilterTabs';

const PeoplePage = () => {
    const [activeSector, setActiveSector] = useState(sectors[0]);
    const [selectedMember, setSelectedMember] = useState(null);

    const filteredMembers = useMemo(() => {
        return members.filter(member => member.sector === activeSector);
    }, [activeSector]);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <header className="text-center pt-16 pb-12 px-4">
                <div className="w-16 h-16 bg-gray-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-outfit">
                    Meet the <span className="text-acm-blue relative inline-block">
                        People
                        <span className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 -z-10"></span>
                    </span>
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-inter">
                    These are the change makers who guide ACM St. Joseph's Chapter toward success and innovation.
                </p>

                <div className="mt-8 flex justify-center">
                    <svg width="60" height="10" viewBox="0 0 60 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5C1 5 5 1 10 5C15 9 15 1 20 5C25 9 25 1 30 5C35 9 35 1 40 5C45 9 45 1 50 5C55 9 59 5 59 5" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 pb-24">
                <FilterTabs
                    sectors={sectors}
                    activeSector={activeSector}
                    onSelect={setActiveSector}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredMembers.map((member) => (
                            <MemberCard
                                key={member.id}
                                member={member}
                                onClick={setSelectedMember}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            <MemberModal
                member={selectedMember}
                onClose={() => setSelectedMember(null)}
            />
        </div>
    );
};

export default PeoplePage;
