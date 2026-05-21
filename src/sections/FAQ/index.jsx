import { useState } from "react";
import FadeUp from "../../components/FadeUp";
import { faqs } from "./data";

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <section id="Faq" className="bg-white" style={{padding:"88px 0"}}>
      <div className="max-w-[1160px] mx-auto px-7">
        <FadeUp delay={0.1} className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-blue-500 mb-3 justify-center" style={{fontFamily:"Sora,sans-serif",fontSize:".68rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase"}}>
            <span className="w-3.5 h-0.5 bg-blue-500 rounded-full"/>Common Questions
          </div>
          <h2 className="sora font-bold text-slate-900" style={{fontSize:"clamp(1.6rem,2.8vw,2.4rem)",letterSpacing:"-.022em"}}>Got Questions? We Have Answers.</h2>
        </FadeUp>

        <FadeUp delay={0.2}>
        <div className="max-w-[700px] mx-auto border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          {faqs.map(([q,a],i)=>(
            <div key={i} className="border-b border-slate-200 last:border-b-0">
              <button onClick={()=>setOpen(open===i?null:i)} className="w-full text-left px-4.5 py-4 flex items-center justify-between gap-3 bg-transparent cursor-pointer transition-all hover:bg-slate-50" style={{padding:"16px 18px"}}>
                <span className="sora font-semibold text-slate-900" style={{fontSize:".87rem",color:open===i?"#2B80ED":"#0F172A"}}>{q}</span>
                <div className="w-5.5 h-5.5 rounded-full flex items-center justify-center flex-shrink-0 text-xs transition-all" style={{width:21,height:21,background:open===i?"#2B80ED":"#E2E8F0",color:open===i?"#fff":"#64748B",transform:open===i?"rotate(45deg)":"none"}}>+</div>
              </button>
              {open===i&&<div className="px-4.5 pb-4 dm text-slate-500 leading-relaxed" style={{padding:"0 18px 14px",fontSize:".85rem",lineHeight:1.78}}>{a}</div>}
            </div>
          ))}
        </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default FAQSection;