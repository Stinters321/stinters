import React from 'react';

const StepCard = ({ stepNumber, emoji, title, description, isLast }) => {
  return (
    <div className="relative flex flex-col items-center text-center p-8 bg-[#1D2535]/60 border border-slate-700/50 rounded-xl transition-all duration-300 hover:bg-[#162032] hover:border-slate-600 cursor-default h-full">
      <div className="w-12 h-12 rounded-full bg-[#223353] border border-blue-900/50 flex items-center justify-center text-[#2B80ED] font-bold text-[15px] mb-5 shadow-[0_0_15px_rgba(43,128,237,0.1)]">
        {stepNumber}
      </div>
      <div className="text-[22px] mb-4">
        {emoji}
      </div>
      <h4 className="text-white font-bold text-[15px] mb-3 leading-snug">
        {title}
      </h4>
      <p className="text-[#727782] text-[13px] leading-relaxed">
        {description}
      </p>

      {!isLast && (
        <div className="hidden lg:flex absolute top-1/5 -right-1 -translate-y-1/2 translate-x-1/2 text-slate-700 z-10 items-center justify-center w-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16" />
            <path d="m14 6 6 6-6 6" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default StepCard;