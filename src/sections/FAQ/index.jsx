import { useState } from "react";

const FAQSection = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    ["What exactly does Stintus do?","Stintus connects manufacturing plants with verified vendors for MRO, facility management, and on-demand industrial spares. You submit a requirement — we coordinate the right vendor for you."],
    ["How quickly will vendors respond?","Vendor assignment typically within 6 hours. Emergency breakdown support is prioritised immediately. You'll get a confirmation as soon as your requirement is assigned."],
    ["Can I get custom or hard-to-find spares?","Yes — this is a core strength. We source standard spares, custom-fabricated components, boiler spares, automotive parts, kitchenware dies, and biomass industry parts. No minimum order quantity."],
    ["Does Stintus cover electrical and civil work?","Absolutely. We cover single and three phase electrical work, motor repairs, welding (arc, MIG, gas), civil work like machinery foundations, metal sheet work, waterproofing, and plumbing."],
    ["Are all vendors verified?","Every vendor goes through a structured onboarding process. We verify capabilities, experience, and service areas before they receive any client requirement from us."],
    ["How do I create an account?","When you fill any requirement form and enter your email, we send an OTP to verify. Once verified, your account is created automatically — no separate sign-up needed."],
  ];
  return (
    <section id="faq" className="bg-white" style={{padding:"88px 0"}}>
      <div className="max-w-[1160px] mx-auto px-7">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-blue-500 mb-3 justify-center" style={{fontFamily:"Sora,sans-serif",fontSize:".68rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase"}}>
            <span className="w-3.5 h-0.5 bg-blue-500 rounded-full"/>Common Questions
          </div>
          <h2 className="sora font-bold text-slate-900" style={{fontSize:"clamp(1.6rem,2.8vw,2.4rem)",letterSpacing:"-.022em"}}>Got Questions? We Have Answers.</h2>
        </div>
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
      </div>
    </section>
  );
};

export default FAQSection;