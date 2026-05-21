import React from 'react';
import ChallengeCard from './components/ChallengeCard';
import FadeUp from '../../components/FadeUp';
import { challenges } from './data';

const Challenge = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp delay={0.1} className="mb-16">
          <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
            <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
            THE REAL CHALLENGE
          </div>
          <h2 className="text-4xl md:text-[2.6rem] font-extrabold text-slate-900 max-w-xl leading-[1.15] tracking-tight">
            What Industrial Teams Deal With Every Single Day
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <FadeUp key={index} delay={0.2 + (index * 0.1)} className="h-full">
              <ChallengeCard {...challenge} />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Challenge;