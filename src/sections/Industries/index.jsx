import React from 'react';
import IndustryCard from './components/IndustryCard';

const Industries = () => {
  // Array of industries matching the exact emojis from the design
  const industries = [
    { icon: '🥤', title: 'Food & Beverage' },
    { icon: '📦', title: 'Packaging' },
    { icon: '🧵', title: 'Textile' },
    { icon: '💊', title: 'Pharma' },
    { icon: '🌾', title: 'Biomass & Cattle Feed' },
    { icon: '🚗', title: 'Automotive' },
    { icon: '🔥', title: 'Industrial Boiler' },
    { icon: '🍳', title: 'Kitchenware' },
    { icon: '🏭', title: 'Plastic Mfg.' },
    { icon: '🖨️', title: 'Printing' },
    { icon: '⚗️', title: 'Chemical' },
    { icon: '🔧', title: 'Engineering' }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-Aligned Section Header (matching Image 1) */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
            INDUSTRIES WE SERVE
          </div>
          
          <h2 className="text-4xl md:text-[2.6rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Built for Every Manufacturing Vertical
          </h2>
        </div>

        {/* Responsive Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Industries;