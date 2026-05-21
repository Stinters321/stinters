import React from 'react';
import BrandSection from './BrandSection';
import LinkColumn from './LinkColumn';
import ContactSection from './ContactSection';
import CopyrightSection from './CopyrightSection';
import { servicesData, companySectionData } from './data';

const Footer = () => {
    return (
        <div className="flex flex-col h-max w-screen bg-[#0d1420]">
            <div className="flex flex-col py-20 px-5 h-max lg:items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full lg:w-3/4 h-full gap-y-10 py-5 border-b border-white/6">
                    <BrandSection />
                    <LinkColumn
                        title="SERVICES"
                        data={servicesData}
                        delay={0.2}
                    />
                    <LinkColumn
                        title="COMPANY"
                        data={companySectionData}
                        delay={0.3}
                    />
                    <ContactSection />
                </div>
                <CopyrightSection />
            </div>
        </div>
    );
}

export default Footer;