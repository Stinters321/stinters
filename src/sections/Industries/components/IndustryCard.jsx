import React from 'react';

const IndustryCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center justify-center py-9 px-4 bg-[#F8FAFC] border border-slate-200/80 rounded-2xl transition-all duration-300 hover:border-[#2B80ED] hover:bg-[#F4F8FF] hover:shadow-[0_8px_24px_rgba(43,128,237,0.12)] hover:-translate-y-1">
      
      {/* Icon Box - Changes to solid blue on card hover */}
      <div className="w-[52px] h-[52px] flex items-center justify-center bg-white border border-slate-100 rounded-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.04)] mb-4 transition-colors duration-300 group-hover:bg-[#2B80ED] group-hover:border-[#2B80ED] group-hover:shadow-none">
        <span className="text-[22px] drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      </div>
      
      {/* Title */}
      <h4 className="text-[14.5px] font-bold text-slate-800 text-center tracking-tight transition-colors duration-300 group-hover:text-slate-900">
        {title}
      </h4>
    </div>
  );
};

export default IndustryCard;