import { useState } from "react";
import { ArrowRight } from "lucide-react";

const VendorSection = ({ openAuth }) => (
  <section id="VendorSection" className="relative overflow-hidden" style={{background:"#2B80ED",padding:"80px 0"}}>
    <div className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full pointer-events-none" style={{background:"rgba(255,255,255,.06)"}}/>
    <div className="absolute -bottom-20 -left-10 w-[260px] h-[260px] rounded-full pointer-events-none" style={{background:"rgba(0,0,0,.07)"}}/>
    <div className="max-w-[1160px] mx-auto px-7 relative z-10">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 text-white/55" style={{fontFamily:"Sora,sans-serif",fontSize:".68rem",fontWeight:700,letterSpacing:".14em",textTransform:"uppercase"}}>
            <span className="w-3.5 h-0.5 bg-white/55 rounded-full"/>For Service Providers
          </div>
          <h2 className="sora font-bold text-white mb-2" style={{fontSize:"clamp(1.6rem,2.8vw,2.4rem)",letterSpacing:"-.022em"}}>Join the Stintus Vendor Network</h2>
          <p className="dm text-white/58 mb-5.5" style={{fontSize:".95rem",marginBottom:22}}>Stop cold-calling for work. Get qualified industrial requirements from plants actively looking for what you do.</p>
          <ul className="list-none flex flex-col gap-2.5 mb-6">
            {["Receive verified MRO, facility, and spares enquiries from real industrial plants","Expand your reach to SMEs and MSMEs across Gujarat and India","Manage all quotations and job status fully online - no paperwork","Build a verifiable track record and grow through real client references"].map((item,i)=>(
              <li key={i} className="flex items-start gap-2.5 dm font-medium text-white/70" style={{fontSize:".85rem"}}>
                <div className="w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:"rgba(255,255,255,.16)",width:18,height:18}}>
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <button onClick={()=>openAuth("vendor")} className="inline-flex items-center gap-2 sora font-bold text-slate-900 bg-white px-7 py-4 rounded-xl cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-xl" style={{fontSize:".93rem"}}>
            Register as a Vendor <ArrowRight size={18}/>
          </button>
        </div>
        <div className="rounded-2xl p-5.5 backdrop-blur-sm" style={{background:"rgba(255,255,255,.1)",border:"1px solid rgba(255,255,255,.2)",padding:22}}>
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {[["500+","Vendors"],["10+","Verticals"],["<6h","Avg Response"],["3x","Avg Quotes/RFQ"]].map(([n,l])=>(
              <div key={l} className="rounded-xl p-3.5 text-center" style={{background:"rgba(255,255,255,.1)"}}>
                <div className="sora font-extrabold text-white" style={{fontSize:"1.7rem",lineHeight:1}}>{n}</div>
                <div className="dm text-white/46 mt-1 uppercase tracking-wider" style={{fontSize:".65rem"}}>{l}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3.5" style={{background:"rgba(0,0,0,.1)",borderLeft:"3px solid rgba(255,255,255,.2)"}}>
            <p className="dm text-white/56 leading-relaxed mb-2.5" style={{fontSize:".79rem",lineHeight:1.68}}>
              "Stintus gave us a consistent stream of qualified enquiries from plants we would never have reached through cold outreach alone."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center sora font-bold text-white text-sm flex-shrink-0" style={{background:"rgba(255,255,255,.2)"}}>R</div>
              <div>
                <div className="sora font-bold text-white text-xs">Rajesh Kumar</div>
                <div className="dm text-white/40" style={{fontSize:".64rem"}}>Mechanical Services Vendor, Ahmedabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VendorSection;