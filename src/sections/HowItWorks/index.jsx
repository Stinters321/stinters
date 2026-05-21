import React from 'react';
import StepCard from './components/StepCard';
import FadeUp from '../../components/FadeUp';
import { steps } from './data';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0A101E]" id='HowItWorks'>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <FadeUp delay={0.1} className="mb-14">
          <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-[2.6rem] font-extrabold text-white max-w-2xl leading-[1.15] tracking-tight mb-5">
            Four Steps From Problem to Done
          </h2>
          <p className="text-[#727782] text-[15px] max-w-[28rem] leading-relaxed">
            Simple. Transparent. Built around how industrial teams actually operate.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 relative">
          {steps.map((step, index) => (
            <FadeUp
              key={index}
              delay={0.2 + (index * 0.1)}
              className="h-full"
            >
              <StepCard
                {...step}
                isLast={index === steps.length - 1}
              />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;