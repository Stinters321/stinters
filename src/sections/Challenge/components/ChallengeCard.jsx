import React from 'react';

const ChallengeCard = ({ 
  mainEmoji, 
  badgeIcon, 
  badgeText, 
  title, 
  description, 
  quote, 
  topBgClass,
  badgeBgClass,
  accentColorClass,
  textColorClass 
}) => {
  return (
    <div className="group bg-white rounded-[22px] border border-slate-200/90 overflow-hidden transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 cursor-default flex flex-col h-full">
      
      {/* Top Half: Icon Container with theme-specific soft background tint */}
      <div className={`py-14 flex justify-center items-center border-b border-slate-100/80 ${topBgClass}`}>
        <div className="text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
          {mainEmoji}
        </div>
      </div>

      {/* Bottom Half: Content Wrapper with full-length left accent line */}
      <div className="p-8 pb-9 relative flex-grow flex flex-col pl-9">
        
        {/* Full-length thick left indicator spanning top-to-bottom of content area */}
        <div className={`absolute left-0 top-0 bottom-0 w-[5px] ${accentColorClass}`}></div>
        
        {/* Badge with proper background, padding, and text styling */}
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10.5px] font-bold tracking-wider uppercase mb-4 w-fit ${badgeBgClass} ${textColorClass}`}>
          <span className="text-xs">{badgeIcon}</span> 
          <span>{badgeText}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3 tracking-tight">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-[14.5px] text-slate-500 leading-relaxed mb-6 font-normal">
          {description}
        </p>

        {/* Spacer to align quotes perfectly if description heights vary */}
        <div className="mt-auto"></div>

        {/* Divider line before quote */}
        <hr className="border-slate-100 mb-5" />
        
        {/* Testimonial/Quote block */}
        <p className="text-[13.5px] text-slate-400/90 italic leading-relaxed font-normal">
          "{quote}"
        </p>
      </div>
    </div>
  );
};

export default ChallengeCard;