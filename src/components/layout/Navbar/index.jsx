import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Logo from '/logo.png';
import { navLinks } from './data';
import { handleSmoothScroll } from '../utils/utils';
import MobileDrawer from './MobileDrawer';
import Button from '../../Button';

const Navbar = ({ openModal, openAuth }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeScrolled = window.scrollY > 20;
            setIsScrolled((prev) => prev !== shouldBeScrolled ? shouldBeScrolled : prev);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A0E18]/95 backdrop-blur-md border-b border-[#0D1521] py-2 shadow-xl' : 'bg-transparent py-2'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex flex-col cursor-pointer" onClick={(e) => handleSmoothScroll(e, '#Hero')}>
                        <img src={Logo} alt="Stintus logo" className='h-14 w-52' />
                    </div>

                    <nav className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-6">
                            {navLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.route}
                                    onClick={(e) => handleSmoothScroll(e, item.route)} // Callback is omitted for desktop
                                    className="px-2 py-1 rounded-lg text-sm font-medium text-[#81858B] hover:text-white hover:bg-[#1A1D23] transition-all duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="text-sm" onClick={openAuth}>Sign In</Button>
                            <Button variant="primary" className="text-sm" onClick={() => openModal("General Requirement")}>Submit Requirement</Button>
                        </div>
                    </nav>

                    <div className="flex lg:hidden items-center gap-3">
                        <Button variant="primary" className="text-xs px-3 py-2" onClick={() => openModal("General Requirement")}>Submit Requirement</Button>
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 border border-slate-700 rounded-md text-slate-300 hover:text-white bg-[#162032]"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </header>

            <MobileDrawer
                isOpen={isMobileMenuOpen}
                setIsOpen={setIsMobileMenuOpen}
                navLinks={navLinks}
                openModal={openModal}
                openAuth={openAuth}
            />
        </>
    );
};

export default Navbar;