import React from 'react';
import ChallengeCard from './components/ChallengeCard';

const Challenge = () => {
  const challenges = [
    {
      mainEmoji: '🔍',
      badgeIcon: '🎉',
      badgeText: 'VENDOR DISCOVERY',
      topBgClass: 'bg-[#FFF5F5]',         // Soft Red Tint for top icon box
      badgeBgClass: 'bg-[#FFEAEB]',       // Soft Red Background for badge
      accentColorClass: 'bg-[#EF4444]',   // Continuous Solid Red Left Bar
      textColorClass: 'text-[#DC2626]',   // Sharp Red Text
      title: 'You Call 6 People. Nobody Shows Up.',
      description: 'Need a motor repaired urgently? You call 5–6 numbers — 2 don\'t answer, 1 is too far, 1 doesn\'t have the part. The machine stays down.',
      quote: 'We lost half a shift just finding someone to fix the conveyor motor. By the time they arrived, we\'d already missed our dispatch.'
    },
    {
      mainEmoji: '⏱️',
      badgeIcon: '⏱️',
      badgeText: 'PRODUCTION LOSS',
      topBgClass: 'bg-[#FFF9F2]',         // Soft Orange Tint for top icon box
      badgeBgClass: 'bg-[#FFEEDC]',       // Soft Orange Background for badge
      accentColorClass: 'bg-[#F59E0B]',   // Continuous Solid Orange Left Bar
      textColorClass: 'text-[#D97706]',   // Sharp Orange Text
      title: 'Every Hour Down Is Money Out the Door',
      description: 'A broken machine stops your whole line, delays orders, and costs you in overtime. And the vendor still hasn\'t called back.',
      quote: 'One breakdown cost us ₹4 lakh last quarter. Worst part? We had no system to find a backup vendor fast.'
    },
    {
      mainEmoji: '🔩',
      badgeIcon: '📦',
      badgeText: 'SPARE PARTS CHAOS',
      topBgClass: 'bg-[#FAF6FF]',         // Soft Purple Tint for top icon box
      badgeBgClass: 'bg-[#F0E5FF]',       // Soft Purple Background for badge
      accentColorClass: 'bg-[#8B5CF6]',   // Continuous Solid Purple Left Bar
      textColorClass: 'text-[#7C3AED]',   // Sharp Purple Text
      title: 'Finding One Spare Part Takes 3 Days',
      description: 'Hunting catalogues, calling distributors, waiting on quotes — and then the part\'s out of stock. One critical spare can shut operations for days.',
      quote: 'My engineer spends more time finding parts than fixing machines. We needed a smarter way.'
    },
    {
      mainEmoji: '👁️',
      badgeIcon: '🟢',
      badgeText: 'ZERO VISIBILITY',
      topBgClass: 'bg-[#F4FBF7]',         // Soft Green Tint for top icon box
      badgeBgClass: 'bg-[#E1F7EC]',       // Soft Green Background for badge
      accentColorClass: 'bg-[#10B981]',   // Continuous Solid Green Left Bar
      textColorClass: 'text-[#059669]',   // Sharp Green Text
      title: "Vendor Said 2PM. It's 5PM. No One's Here.",
      description: '3 open jobs, 3 vendors, managed entirely over WhatsApp. No status, no accountability, no idea what\'s happening.',
      quote: 'Three work orders, three vendors, zero visibility. That\'s not operations — that\'s hoping for the best.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
            THE REAL CHALLENGE
          </div>
          <h2 className="text-4xl md:text-[2.6rem] font-extrabold text-slate-900 max-w-xl leading-[1.15] tracking-tight">
            What Industrial Teams Deal With Every Single Day
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <ChallengeCard key={index} {...challenge} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Challenge;