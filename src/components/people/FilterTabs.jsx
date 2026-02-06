import React from 'react';
import { motion } from 'framer-motion';

export default function FilterTabs({ sectors, activeSector, onSelect }) {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100 p-2 rounded-xl w-fit mx-auto">
            {sectors.map((sector) => (
                <button
                    key={sector}
                    onClick={() => onSelect(sector)}
                    className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-colors ${activeSector === sector ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    {activeSector === sector && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-acm-blue rounded-lg shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{sector}</span>
                </button>
            ))}
        </div>
    );
}
