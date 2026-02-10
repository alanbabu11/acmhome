import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink } from 'lucide-react';

export default function MemberCard({ member, onClick }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            className="bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative overflow-hidden"
            onClick={() => onClick(member)}
        >
            <div className="relative w-32 h-32 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-acm-blue/20 group-hover:border-acm-blue transition-colors duration-300"></div>
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover p-1"
                />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{member.role}</p>

            <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-4 right-4">
                <ExternalLink size={18} className="text-gray-400" />
            </div>

            <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-acm-blue hover:text-blue-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
            >
                <Linkedin size={20} />
            </a>
        </motion.div>
    );
}
