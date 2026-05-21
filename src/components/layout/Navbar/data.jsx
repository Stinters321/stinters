import { Phone, HelpCircle, Handshake, FileText, Factory, Wrench } from 'lucide-react';

export const navLinks = [
    { name: 'Services', icon: Wrench, route: '#Services', iconColor: 'text-slate-400' },
    { name: 'Industries', icon: Factory, route: '#Industries', iconColor: 'text-purple-400' },
    { name: 'How It Works', icon: FileText, route: '#HowItWorks', iconColor: 'text-blue-400' },
    { name: 'Vendors', icon: Handshake, route: '#VendorSection', iconColor: 'text-amber-400' },
    { name: 'FAQ', icon: HelpCircle, route: '#Faq', iconColor: 'text-red-400' },
    { name: 'Contact', icon: Phone, route: '#Cta', iconColor: 'text-pink-400' },
];