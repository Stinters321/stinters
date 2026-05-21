import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../Button';
import Logo from '/logo.png';
import { handleSmoothScroll } from './utils';

const MobileDrawer = ({ isOpen, setIsOpen, navLinks, openModal, openAuth }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] text-white p-5 flex flex-col"
                    style={{ backgroundColor: '#0B1120' }}
                >
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex flex-col cursor-pointer" onClick={(e) => handleSmoothScroll(e, '#Hero', setIsOpen)}>
                            <img src={Logo} alt="Stintus logo" className='h-10 w-36 object-contain' />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col flex-grow">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.route}
                                onClick={(e) => handleSmoothScroll(e, link.route, setIsOpen)}
                                className="flex items-center gap-4 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="w-10 h-10 bg-[#162032] border border-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <link.icon size={18} className={link.iconColor} />
                                </div>
                                <span className="text-base font-semibold text-slate-200 tracking-wide">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-auto pt-6 pb-2">
                        <Button
                            variant="dark"
                            className="w-[35%] flex justify-center py-4 bg-[#1C283D] border-slate-700 text-white rounded-xl"
                            onClick={openAuth}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant="primary"
                            className="flex-1 flex justify-center py-4 bg-blue-600 rounded-xl font-bold"
                            onClick={() => {
                                setIsOpen(false);
                                openModal("General Requirement");
                            }}
                        >
                            Submit Requirement
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileDrawer;