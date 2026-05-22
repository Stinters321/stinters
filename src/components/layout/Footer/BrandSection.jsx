import React from 'react';
import FadeUp from '../../FadeUp';
import Logo from '/logo.png';
import { handleSmoothScroll } from '../utils/utils';

const FSocial = ({ text }) => {
    return (
        <div className="flex justify-center items-center h-6 w-6 border p-3.5 rounded-md bg-white/5 border-white/8 transition-colors hover:bg-blue-500 hover:text-white focus:bg-blue-500 cursor-pointer">
            <p className="font-['Sora'] font-bold text-[10px]">{text}</p>
        </div>
    )
}

const BrandSection = () => {
    return (
        <FadeUp delay={0.1} className="flex flex-col text-white/40 gap-2">
            <img src={Logo} alt="Stintus logo" className='h-14 w-52 cursor-pointer' onClick={(e) => handleSmoothScroll(e, '#Hero')}/>
            <p className="text-[9px] text-white/22">MRO · Facility Management · On-Demand Spares</p>
            <p className="text-xs w-[62%] text-white/27">Connecting Indian manufacturing businesses with verified vendors - faster, smarter, with full visibility. Serving Industrial Gujarat.</p>
            <div className="flex items-center gap-2">
                <FSocial text={'Li'} />
                <FSocial text={'Tw'} />
                <FSocial text={'WA'} />
            </div>
        </FadeUp>
    );
};

export default BrandSection;