import React from 'react';
import { Shield, ArrowRight, Wrench, Building2, Settings, CheckCircle2, Clock, Users, Star, Zap, Check } from 'lucide-react';
import Button from '../../components/Button';
import Tag from './components/Tag';
import ServiceTicker from './components/ServiceTicker';

const Hero = () => {
  return (
    // Applied the specific hero-bg class here instead of global body
    <section className="relative w-full hero-bg pt-28 flex flex-col justify-between min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex-grow flex items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            
            {/* Top Badge */}
            <div className="flex items-center gap-2 bg-[#101C32] border border-blue-900/50 rounded-full px-4 py-1.5 w-fit">
              <Shield size={14} className="text-blue-400" />
              <span className="text-xs font-bold tracking-wider text-blue-100 uppercase">Trusted Industrial Operations Partner</span>
            </div>

            {/* Headings */}
            <div className="space-y-4">
              <p className="text-2xl font-semibold tracking-[0.2em] text-[#646E79] uppercase">
                MRO · Facility Management · On-Demand Spares
              </p>
              <h1 className="text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight">
                We Fix It.<br />
                We Manage It.<br />
                We Source It — <span className="text-blue-500">Right Now.</span>
              </h1>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Tag icon={Wrench} text="Maintenance & Repair" />
              <Tag icon={Building2} text="Facility Management" />
              <Tag icon={Settings} text="On-Demand Spares" />
            </div>

            {/* Description */}
            <p className="text-lg text-[#94979C] max-w-lg leading-relaxed">
              Machine down? Spare part missing? Facility needs attention? Just tell us — we connect you with verified vendors fast. No calls, no chaos, no waiting.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button variant="primary" className="gap-2 text-base px-8 py-4">
                Submit Requirement <ArrowRight size={18} />
              </Button>
              <Button variant="dark" className="text-base px-8 py-4">
                See All Services
              </Button>
            </div>

            {/* Trust Indicators (Moved below buttons, top border removed, bottom border added) */}
            <div className="flex flex-wrap items-center gap-6 pb-8">
              {[
                { icon: CheckCircle2, text: 'Verified Vendors' },
                { icon: Clock, text: 'Response in 6h' },
                { icon: Users, text: 'Multiple Quotes' },
                { icon: Star, text: 'SME & MSME First' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon size={16} className="text-blue-500" />
                  <span className="text-sm font-medium text-[#6B6F72]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── HERO RIGHT: SVG Illustration + Cards (UPDATED) ─── */}
          <div className="relative w-full max-w-lg mx-auto lg:ml-auto flex flex-col gap-3">
            
            {/* Main Illustration Wrapper */}
            <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] p-5 aspect-[4/3] flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
              
              {/* Floating Badge A (Top Right) */}
              <div className="absolute top-4 right-4 flex items-center gap-3 bg-[#090E16]/92 border border-white/[0.12] backdrop-blur-[14px] rounded-xl py-2 px-3 shadow-[0_8px_28px_rgba(0,0,0,0.3)] z-10 animate-[flt_5s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                  <Zap size={14} className="text-white" />
                </div>
                <div>
                  <strong className="block font-bold text-[13px] text-white leading-tight">Line 3 — Breakdown</strong>
                  <span className="text-[10px] text-white/50">Technician assigned · 42 min</span>
                </div>
              </div>

              {/* Floating Badge B (Bottom Left) */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-[#090E16]/92 border border-white/[0.12] backdrop-blur-[14px] rounded-xl py-2 px-3 shadow-[0_8px_28px_rgba(0,0,0,0.3)] z-10 animate-[flt_5s_2.2s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-lg bg-[#10B981] flex items-center justify-center shrink-0">
                  <Check size={16} className="text-white" strokeWidth={3} />
                </div>
                <div>
                  <strong className="block font-bold text-[13px] text-white leading-tight">Spare Part Sourced</strong>
                  <span className="text-[10px] text-white/50">Delivered to site in 18h</span>
                </div>
              </div>

              {/* Fake UI Wireframe (Replace with actual SVG later) */}
              <div className="relative w-full h-full border border-slate-700/40 rounded-xl bg-[#0F172A]/50 overflow-hidden flex flex-col p-4">
                 <div className="w-1/3 h-3 bg-slate-800 rounded mb-4"></div>
                 <div className="flex-1 border border-slate-800/50 rounded-lg flex items-center justify-center bg-slate-800/20">
                   <span className="text-slate-500 text-xs tracking-wider">DASHBOARD SVG</span>
                 </div>
              </div>
            </div>

            {/* Three-Card Stat Row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { val: '<6h', lbl: 'Response' },
                { val: '3.2x', lbl: 'Avg Quotes' },
                { val: '120+', lbl: 'Parts Stock' }
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-3 text-center transition-colors duration-200 hover:bg-blue-500/10 hover:border-blue-500/25 cursor-pointer">
                  <div className="font-extrabold text-2xl text-white leading-none">{stat.val}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-[0.05em] mt-1.5 font-medium">{stat.lbl}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes flt {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
      `}</style>

      {/* Bottom Service Ticker */}
      <ServiceTicker />
    </section>
  );
};

export default Hero;