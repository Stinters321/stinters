import React from 'react';

const Tag = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 bg-[#162032] border border-slate-700/50 rounded-full px-3 py-1.5 sm:px-4 w-fit transition-all whitespace-nowrap">
      {Icon && <Icon className="text-slate-400 w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />}
      <span className="text-xs sm:text-sm text-slate-300 font-medium">
        {text}
      </span>
    </div>
  );
};

export default Tag;