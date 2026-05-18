import React from 'react';

const Tag = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center gap-2 bg-[#1C222C] border border-slate-700/50 rounded-full px-4 py-1.5 w-fit">
      {Icon && <Icon size={14} className="text-[#94979C]" />}
      <span className="text-sm text-[#94979C] font-medium">{text}</span>
    </div>
  );
};

export default Tag;