import React from 'react';
import StepCard from './components/StepCard';

const HowItWorks = () => {
  const steps = [
    {
      stepNumber: '1',
      emoji: '📝',
      title: 'Tell Us What You Need',
      description: 'Breakdown, maintenance, spare part, or facility work. Takes 2 minutes.'
    },
    {
      stepNumber: '2',
      emoji: '🎯',
      title: 'We Match the Right Vendor',
      description: 'Our team assigns a verified vendor matched to your job, location, and urgency - under 6 hours.'
    },
    {
      stepNumber: '3',
      emoji: '📊',
      title: 'Compare Multiple Quotes',
      description: 'Receive quotes side by side - pricing and timelines. You decide. No pressure.'
    },
    {
      stepNumber: '4',
      emoji: '✅',
      title: 'Job Done. Fully Tracked.',
      description: 'Work executed and monitored on your dashboard. Closed with documentation.'
    }
  ];

  return (
    // Matching the dark background from the Hero section
    <section className="py-20 bg-[#0A101E]" id='HowItWorks'>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
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
        </div>

        {/* 4-Column Grid Layout for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 relative">
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;