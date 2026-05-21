import React from 'react';
import IndustryCard from './components/IndustryCard';
import FadeUp from '../../components/FadeUp';
import { industries } from './data';

const Industries = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8" id='Industries'>
        <FadeUp delay={0.1} className="mb-12">
          <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
            INDUSTRIES WE SERVE
          </div>

          <h2 className="text-4xl md:text-[2.6rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Built for Every Manufacturing Vertical
          </h2>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {industries.map((industry, index) => (
            <FadeUp
              key={index}
              delay={0.2 + (index * 0.05)}
              className="h-full"
            >
              <IndustryCard {...industry} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;