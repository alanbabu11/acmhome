import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin } from 'lucide-react';

export default function MemberModal({ member, onClose }) {
    if (!member) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl z-10 overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <X size={24} className="text-gray-500" />
                    </button>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-40 h-40 mb-6 rounded-full border-4 border-acm-blue p-1">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                        <p className="text-xl text-acm-blue font-medium mb-4">{member.role}</p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            {member.description}
                        </p>

                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-full hover:bg-[#006396] transition-colors font-medium"
                        >
                            <Linkedin size={20} />
                            Connect on LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
