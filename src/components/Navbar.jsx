import { useState, useEffect } from 'react';
import { Menu, X, Phone, HelpCircle, Handshake, FileText, Factory, Wrench } from 'lucide-react';
import Button from './Button';
import Logo from '/logo.png'

const Navbar = ({openModal,openAuth}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', icon: Wrench },
    { name: 'Industries', icon: Factory },
    { name: 'How It Works', icon: FileText },
    { name: 'Vendors', icon: Handshake },
    { name: 'FAQ', icon: HelpCircle },
    { name: 'Contact', icon: Phone },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0E18]/95 backdrop-blur-md border-b border-[#0D1521] py-2 shadow-xl' : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex flex-col">
          {/* <span className="text-2xl font-black text-white tracking-tight">STINTERS</span> */}
          <img src={Logo} alt="Stintus logo" className='h-20 w-32'/>
          {/* <span className="text-[0.55rem] text-[#4E545C] tracking-widest font-medium uppercase mt-0.5">MRO · Facility · On-Demand Spares</span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {['Services', 'Industries', 'How It Works', 'Vendors', 'FAQ', 'Contact'].map((item) => (
              <a key={item} href="#" className="px-2 py-1 rounded-lg text-sm font-medium text-[#81858B] hover:text-white hover:bg-[#1A1D23] transition-all duration-300">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-sm" onClick={openAuth}>Sign In</Button>
            <Button variant="primary" className="text-sm" onClick={()=>openModal("General Requirement")}>Submit Requirement</Button>
          </div>
        </nav>

        {/* Mobile View: Right side actions */}
        <div className="flex lg:hidden items-center gap-3">
          <Button variant="primary" className="text-xs px-3 py-2">Submit Requirement</Button>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 border border-slate-700 rounded-md text-slate-300 hover:text-white bg-[#162032]"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#0A101E] p-4 flex flex-col">
          <div className="flex justify-between items-center mb-8">
             <div className="flex flex-col">
              <span className="text-2xl font-black text-white">STINTERS</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-[#162032] border border-slate-700 rounded-md text-slate-300">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex flex-col gap-2 flex-grow">
            {navLinks.map((link) => (
              <a key={link.name} href="#" className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#162032] text-slate-200 font-medium transition-colors">
                <div className="p-2 bg-[#1C283D] rounded-md text-blue-400">
                  <link.icon size={18} />
                </div>
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex gap-3 mt-auto pt-4 border-t border-slate-800">
            <Button variant="dark" className="flex-1">Sign In</Button>
            <Button variant="primary" className="flex-1">Submit Requirement</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;