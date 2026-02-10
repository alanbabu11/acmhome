import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../images/logo.svg';

export default function LoadingScreen({ isLoading }) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="loading-screen"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.8, 1.1, 1],
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="flex flex-col items-center gap-6"
                    >
                        <img
                            src={logo}
                            alt="ACM Logo"
                            className="w-48 h-auto"
                        />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="h-1 bg-[#00AEEF] rounded-full max-w-[200px]"
                        />
                        <p className="text-[#00AEEF] font-bold tracking-widest text-sm uppercase animate-pulse">
                            Initializing...
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
