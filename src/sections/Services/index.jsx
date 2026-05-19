import { useState } from "react";

const SERVICE_PANELS = {
  mro: [
    { ico: "⚙️", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Mechanical Maintenance", tags: ["Motor Repair & Rewind","Gearbox Maintenance","Pump Repairs","Conveyor Repair","Fan & Blowers","Vertical Turbine Pump"] },
    { ico: "🤖", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Automation & Controls", tags: ["PLC Troubleshooting","SCADA Support","Calibration","VFD Programming","Electro Mechanical"] },
    { ico: "📋", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Preventive Maintenance", tags: ["AMC Contract","Scheduled PM","Machine Inspection","Predictive Maintenance"] },
    { ico: "🚨", color: "bg-gradient-to-br from-red-50 to-red-100", title: "Emergency Breakdown", tags: ["Emergency Repair","On-Site Technician","Line Down Support","Machinery Repair"] },
    { ico: "🖨️", color: "bg-gradient-to-br from-purple-50 to-purple-100", title: "Specialist Equipment", tags: ["Printer Repairs","AC Repairs","Power Generation","Field Service"] },
    { custom: true, label: "Custom Requirement", sub: "Describe anything - we find the right vendor", modal: "Custom MRO Requirement" },
  ],
  elec: [
    { ico: "⚡", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Electrical Work & Repairs", tags: ["Single Phase Work","Three Phase Work","Electric Machine Service","Electro Mechanical"] },
    { ico: "🔌", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Motors & Drives", tags: ["Motor Repair & Rewind","Fan & Blower","VFD Drives","Power Generation"] },
    { ico: "🔋", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Control & Panels", tags: ["Control Panel Repair","Industrial Wiring","Sensor Troubleshooting","Transformer Service"] },
    { ico: "🏗️", color: "bg-gradient-to-br from-purple-50 to-purple-100", title: "Electrical Infrastructure", tags: ["DG Set Service","Power Audit","Earthing & Lightning","Predictive Field Service"] },
  ],
  facility: [
    { ico: "🚿", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Plumbing & Water Systems", tags: ["Industrial RO Service","Plumbing Repairs","Water Supply Line","Drainage & Sewage","Leak Detection"] },
    { ico: "❄️", color: "bg-gradient-to-br from-green-50 to-green-100", title: "HVAC & Utilities", tags: ["AC Servicing","Chiller Maintenance","Cooling Tower","Ventilation"] },
    { ico: "🔐", color: "bg-gradient-to-br from-red-50 to-red-100", title: "Safety & Compliance", tags: ["Fire Safety System","Pest Control","Safety Audit","PPE Supply"] },
    { ico: "🏢", color: "bg-gradient-to-br from-teal-50 to-teal-100", title: "General Facility Upkeep", tags: ["Housekeeping","Sanitation","Waste Management"] },
    { custom: true, label: "Custom Facility Need", sub: "Describe your facility requirement", modal: "Custom Facility Requirement" },
  ],
  civil: [
    { ico: "🔥", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Welding Work", tags: ["Arc Welding","MIG Welding","Gas Welding","All Welding Repairs"] },
    { ico: "🏗️", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Small Civil Work", tags: ["Machinery Foundation","Water Tank Work","Office Repairs","Aluminium Section"] },
    { ico: "🛡️", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Metal Sheet Work", tags: ["Damage Sheet Change","New Sheet Install","Sheet Modification"] },
    { ico: "💧", color: "bg-gradient-to-br from-teal-50 to-teal-100", title: "Water Proofing", tags: ["Terrace Waterproofing","Inner Side Proofing"] },
    { custom: true, label: "Custom Civil Work", sub: "Describe your civil or structural need", modal: "Custom Civil Requirement" },
  ],
  spares: [
    { ico: "🔩", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Machine Components", tags: ["Bearings","Couplings","Shafts","Rollers","Seals & Gaskets"] },
    { ico: "🏭", color: "bg-gradient-to-br from-amber-50 to-amber-100", title: "Custom Fabrication", tags: ["CNC Machining","Laser Cutting","Metal Fabrication","Welding"] },
    { ico: "🌾", color: "bg-gradient-to-br from-green-50 to-green-100", title: "Biomass & Cattle Feed", tags: ["Biomass Spares","Cattle Feed Spares","Custom Parts"] },
    { ico: "🚗", color: "bg-gradient-to-br from-purple-50 to-purple-100", title: "Automotive Spares", tags: ["Precision Parts","Tooling & Fixtures","Custom Fabrication"] },
    { ico: "🔥", color: "bg-gradient-to-br from-red-50 to-red-100", title: "Industrial Boiler Spares", tags: ["Boiler Tubes","Boiler Fittings","Custom Boiler Parts"] },
    { ico: "🍳", color: "bg-gradient-to-br from-teal-50 to-teal-100", title: "Kitchenware Die & Industry", tags: ["Kitchenware Die","Die & Mould","Custom Parts"] },
    { ico: "🔌", color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Electrical & Automation Parts", tags: ["PLC Components","VFD Drives","Sensors","Cables"] },
    { custom: true, label: "Custom Spare / Prototype", sub: "Have a drawing? No MOQ. Submit here.", modal: "Custom Spare Requirement" },
  ],
};

const ServicesSection = ({ openModal }) => {
    const [activeTab, setActiveTab] = useState("mro");
    const tabs = [["mro", "🔧", "MRO"], ["elec", "⚡", "Electrical"], ["facility", "🏢", "Facility"], ["civil", "🏗️", "Civil & Structural"], ["spares", "🔩", "On-Demand Spares"]];

    return (
        <section id="Services" className="bg-slate-50" style={{ padding: "88px 0" }}>
            <div className="max-w-[1160px] mx-auto px-7">
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

                {/* Tabs */}
                <div className="flex gap-1.5 flex-wrap mb-5">
                    {tabs.map(([key, ico, label]) => (
                        <button key={key} onClick={() => setActiveTab(key)} className="flex items-center gap-1.5 sora font-semibold px-3.5 py-2 rounded-xl cursor-pointer transition-all border-[1.5px]" style={{
                            fontSize: ".8rem",
                            background: activeTab === key ? "#2B80ED" : "#fff",
                            borderColor: activeTab === key ? "#2B80ED" : "#E2E8F0",
                            color: activeTab === key ? "#fff" : "#64748B",
                            boxShadow: activeTab === key ? "0 4px 14px rgba(43,128,237,.35)" : "none"
                        }}>
                            <span>{ico}</span>{label}
                        </button>
                    ))}
                </div>

                {/* Service Cards */}
                {tabs.map(([key]) => (
                    <div key={key} style={{ display: activeTab === key ? "block" : "none" }}>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                            {SERVICE_PANELS[key].map((card, i) => (
                                card.custom
                                    ? <div key={i} onClick={() => openModal(card.modal)} className="bg-white border-[1.5px] border-dashed border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-1.5 cursor-pointer transition-all min-h-[120px] hover:border-blue-400 hover:bg-blue-50/40">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-base">✏️</div>
                                        <h4 className="sora font-bold text-slate-500 text-sm">{card.label}</h4>
                                        <p className="dm text-slate-400 max-w-[130px]" style={{ fontSize: ".72rem" }}>{card.sub}</p>
                                    </div>
                                    : <div key={i} className="bg-white border-[1.5px] border-slate-200 rounded-xl p-4 transition-all hover:border-blue-400 hover:shadow-lg hover:-translate-y-0.5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0 ${card.color}`}>{card.ico}</div>
                                            <h4 className="sora font-bold text-slate-900 text-sm">{card.title}</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {card.tags.map(tag => (
                                                <button key={tag} onClick={() => openModal(tag)} className="dm font-semibold text-slate-500 bg-slate-50 border-[1.5px] border-slate-200 px-2.5 py-1 rounded-md cursor-pointer transition-all hover:bg-blue-500 hover:border-blue-500 hover:text-white" style={{ fontSize: ".67rem" }}>{tag}</button>
                                            ))}
                                        </div>
                                    </div>
                            ))}
                        </div>
                        <div className="rounded-xl p-5 flex items-center justify-between gap-4 mt-3" style={{ background: "linear-gradient(135deg,#131C2E 0%,#1a2540 100%)" }}>
                            <div>
                                <h3 className="sora font-bold text-white text-sm mb-1">Don't See Your Requirement?</h3>
                                <p className="dm text-white/42" style={{ fontSize: ".79rem" }}>Submit anything - our team sources the right vendor for any industrial need.</p>
                            </div>
                            <button onClick={() => openModal("Custom Requirement")} className="flex-shrink-0 sora font-bold text-white px-5 py-2.5 rounded-xl transition-all hover:bg-white/15 whitespace-nowrap" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.18)", fontSize: ".86rem" }}>
                                Submit Custom Requirement →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;