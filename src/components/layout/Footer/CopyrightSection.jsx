import React from 'react';
import FadeUp from '../../FadeUp';

const CopyrightSection = () => {
    return (
        <FadeUp delay={0.5} className="flex flex-col lg:flex-row lg:justify-between lg:w-3/4 items-center text-white/20 text-[12px] gap-2 mt-5">
            <p>© 2026 Stintus. All rights reserved.</p>
            <div className="flex items-center gap-4">
                <p className="cursor-pointer hover:text-white transition-colors">Privacy Policy</p>
                <p className="cursor-pointer hover:text-white transition-colors">Terms & Conditions</p>
            </div>
        </FadeUp>
    );
};

export default CopyrightSection;