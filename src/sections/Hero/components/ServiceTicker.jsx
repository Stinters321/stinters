import React from 'react';

const ServiceTicker = () => {
  // Image se match karte hue exact emojis use kiye hain
  const services = [
    { name: 'Emergency Breakdown', icon: '🚨' },
    { name: 'Motor Repair', icon: '⚙️' },
    { name: 'Electrical Work', icon: '⚡' },
    { name: 'PLC / SCADA', icon: '💡' },
    { name: 'AMC Contract', icon: '📋' },
    { name: 'CNC Machining', icon: '🏭' },
    { name: 'Welding', icon: '🔥' },
    { name: 'Conveyor Repair', icon: '📦' },
    { name: 'Plumbing', icon: '🚿' },
    { name: 'Facility Mgmt', icon: '🏢' },
    { name: 'Spare Parts', icon: '🔩' },
  ];

  return (
    // Top border aur padding bilkul image ke hisaab se
    <div className="w-full border-t border-slate-800/80 bg-transparent py-5">
      
      {/* Container with overflow-x-auto so that smaller screens par scroll ho sake without breaking */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-x-auto hide-scrollbar">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="flex items-center gap-2 border border-slate-700/80 bg-[#121A2B]/40 hover:bg-[#2B80ED] transition-colors rounded-full px-2 py-1 whitespace-nowrap cursor-pointer"
          >
            <span className="text-sm">{service.icon}</span>
            <span className="text-[13px] font-medium text-[#61656D] hover:text-white">{service.name}</span>
          </div>
        ))}
      </div>

      {/* CSS to hide the scrollbar for clean UI on smaller devices */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default ServiceTicker;