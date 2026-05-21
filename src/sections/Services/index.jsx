import { useState } from "react";
import FadeUp from "../../components/FadeUp";
import { SERVICE_PANELS, tabs } from "./data";
import ServiceTabs from "./components/ServiceTabs";
import ServiceCard from "./components/ServiceCard";
import CustomRequirementBanner from "./components/CustomRequirementBanner";

const ServicesSection = ({ openModal }) => {
    const [activeTab, setActiveTab] = useState("mro");

    return (
        <section id="Services" className="bg-slate-50" style={{ padding: "88px 0" }}>
            <div className="max-w-[1160px] mx-auto px-7">
                <FadeUp delay={0.1}>
                    <div className="flex items-end justify-between gap-5 mb-7 flex-wrap">
                        <div>
                            <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                                <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
                                WHAT WE COVER
                            </div>
                            <h2 className="sora font-bold text-slate-900" style={{ fontSize: "clamp(1.6rem,2.8vw,2.4rem)", letterSpacing: "-.022em" }}>Every Industrial Need. One Platform.</h2>
                            <p className="dm text-slate-500 mt-1.5 max-w-[400px]" style={{ fontSize: ".94rem" }}>Tap any service to open a focused requirement form - pre-filled and ready.</p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 sora font-semibold text-blue-500 px-3 py-1.5 rounded-lg whitespace-nowrap" style={{ fontSize: ".74rem", background: "#EBF3FE", border: "1px solid rgba(43,128,237,.2)" }}>
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
                            Tap any service tag to submit a focused RFQ
                        </div>
                    </div>
                </FadeUp>
                <ServiceTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
                {tabs.map(([key]) => (
                    <div key={key} style={{ display: activeTab === key ? "block" : "none" }}>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                            {SERVICE_PANELS[key].map((card, i) => (
                                <ServiceCard key={i} card={card} index={i} openModal={openModal} />
                            ))}
                        </div>
                    </div>
                ))}
                <CustomRequirementBanner openModal={openModal} />
            </div>
        </section>
    );
};

export default ServicesSection;