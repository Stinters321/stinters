import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection,addDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
const SQ = {
    "Motor Repair & Rewind": [{ l: "Motor Brand", p: "e.g. Siemens, ABB",name:'motorBrand' }, { l: "Power Rating (kW)", p: "e.g. 22kW",name:'powerRating' }, { l: "Issue", p: "e.g. overheating, not starting",name:'issue' }],
    "Gearbox Maintenance": [{ l: "Gearbox Brand", p: "e.g. Brevini, SEW",name:'gearboxBrand' }, { l: "Issue", p: "e.g. oil leak, noise",name:'issue' }, { l: "Last Serviced", p: "e.g. 6 months ago",name:'lastServicedAt' }],
    "PLC Troubleshooting": [{ l: "PLC Brand", p: "e.g. Siemens, Allen Bradley",name:'plcBrand' }, { l: "Model", p: "e.g. S7-300",name:'model' }, { l: "Error Code", p: "e.g. F0001 (if any)",name:'errorCode' }],
    "Three Phase Electrical Work": [{ l: "Type of Work", p: "e.g. new installation, repair",name:'typeOfWork' }, { l: "Load (kW)", p: "e.g. 15kW",name:'load' }, { l: "Location in Facility", p: "e.g. Panel room",name:'locationInFacility' }],
    "AMC Contract": [{ l: "No. of Machines", p: "e.g. 12",name:'machineCount' }, { l: "Machine Types", p: "e.g. compressors, motors",name:'machineType' }, { l: "Contract Duration", p: "e.g. 1 year",name:'contractDuration' }],
    "CNC Machining": [{ l: "Material", p: "e.g. MS, SS, Aluminium",name:'cncMachining' }, { l: "Quantity", p: "e.g. 10 pieces",name:'quantity' }, { l: "Drawing Available?", p: "Yes / No",name:'isDrawingAvailable' }],
    "Emergency Repair": [{ l: "What broke down?", p: "Brief description",name:'whatBrokeDown' }, { l: "Production stopped?", p: "Yes / Partially / No",name:'isProductionStopped' }, { l: "Your exact location", p: "e.g. GIDC Vatva, Ahmedabad",name:'exactLocation' }],
    "AC Maintenance": [{ l: "No. of AC Units", p: "e.g. 5",name:'acMaintainance' }, { l: "Capacity (Ton)", p: "e.g. 2 ton each",name:'capacity' }, { l: "Brand", p: "e.g. Daikin, Voltas",name:'brand' }, { l: "Last Serviced", p: "e.g. 1 year ago",name:'lastServicedAt' }],
    "Bearings Supply": [{ l: "Bearing Type", p: "e.g. deep groove, taper",name:'bearingType' }, { l: "Part No. / Size", p: "e.g. 6205, 25x52x15",name:'partNumOrSize' }, { l: "Quantity", p: "e.g. 10 pcs",name:'quantity' }],
    "Boiler Tubes": [{ l: "Tube Size/Grade", p: "e.g. 51mm OD, SA210",name:'tubeSizeOrGrade' }, { l: "Length", p: "e.g. 6 metres",name:'length' }, { l: "Quantity", p: "e.g. 20 tubes",name:'quantity' }],
};
const RFQModal = ({ service, onClose }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [desc, setDesc] = useState("");
    const [dynamicFieldData,setDynamicFieldData]=useState({});
    const dynFields = SQ[service] || [];

    const handleSubmit = async() => {
        if (!name || !phone || !desc) { alert("Please fill in your name, phone number, and describe your requirement."); return; }
        try{
            const formCollectionRef=collection(db,'formData');
            const data={...dynamicFieldData,enquiryId:nanoid(16),name,phone,email,description:desc,service,createdAt:new Date().toISOString()}

            await addDoc(formCollectionRef,data);
        }catch(error){
            console.log('error:',error);
        }finally{
            alert("✅ Requirement submitted!\n\nOur team will assign a verified vendor and contact you within 6 hours.\n\nYour account has been created - sign in anytime to track your requirements.");
            onClose();
        }
    };

    const handleDynamicFieldChange=(e)=>{
        const {name,value}=e.target;
        setDynamicFieldData((prev)=>({...prev,[name]:value}));
    }

    // useEffect(()=>{
    //     console.log('fieldData:',dynamicFieldData);
    // },[dynamicFieldData]);

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[2000] flex items-center justify-center p-3.5" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal-in bg-white rounded-2xl w-full max-w-[480px] max-h-[94vh] overflow-y-auto shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 z-10 rounded-t-2xl px-5 py-4" style={{ background: "linear-gradient(135deg,#131C2E,#1a2540)" }}>
                    <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 mb-2" style={{ background: "rgba(43,128,237,.2)", border: "1px solid rgba(43,128,237,.3)" }}>
                        <span className="sora text-[.62rem] font-bold text-blue-300 uppercase tracking-wider">Service Request</span>
                    </div>
                    <h3 className="sora text-white font-bold text-base mb-0.5">{service || "General Requirement"}</h3>
                    <p className="dm text-white/40 text-xs">Fill in the details below - takes under 2 minutes</p>
                    <button onClick={onClose} className="absolute top-3.5 right-3.5 bg-white/10 border border-white/16 text-white w-7 h-7 rounded-lg text-sm flex items-center justify-center hover:bg-white/20 transition-colors">✕</button>
                </div>

                {/* Body */}
                <div className="p-5">
                    {dynFields.length > 0 && (
                        <div className="border-t border-gray-100 pt-3 mb-4">
                            <div className="sora text-[.65rem] font-bold text-blue-500 uppercase tracking-wider mb-2">Service Details</div>
                            {dynFields.map((f, i) => (
                                <div key={i} className="flex flex-col gap-1 mb-3">
                                    <label className="sora text-[.69rem] font-bold text-slate-900">{f.l}</label>
                                    <input type="text" placeholder={f.p} name={f.name} value={dynamicFieldData[f.name] || ''} onChange={e => handleDynamicFieldChange(e)} className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(43,128,237,.1)] transition-all" />
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex flex-col gap-1 mb-3">
                        <label className="sora text-[.69rem] font-bold text-slate-900">Your Name *</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Rahul Sharma" className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue-400 focus:bg-white transition-all" />
                    </div>
                    <div className="flex flex-col gap-1 mb-3">
                        <label className="sora text-[.69rem] font-bold text-slate-900">Phone Number *</label>
                        <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="+91 98765 43210" className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue-400 focus:bg-white transition-all" />
                    </div>
                    <div className="flex flex-col gap-1 mb-3">
                        <label className="sora text-[.69rem] font-bold text-slate-900">Email Address *</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@company.com" className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue-400 focus:bg-white transition-all" />
                    </div>
                    <div className="flex flex-col gap-1 mb-3">
                        <label className="sora text-[.69rem] font-bold text-slate-900">Describe Your Requirement *</label>
                        <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Describe the problem, specification, or what you need..." rows={3} className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue-400 focus:bg-white transition-all resize-y min-h-[74px]" />
                    </div>
                    <button onClick={handleSubmit} className="sora w-full py-3 font-bold text-sm text-white rounded-xl cursor-pointer mt-1 transition-all hover:-translate-y-0.5" style={{ background: "#2B80ED", boxShadow: "0 4px 14px rgba(43,128,237,.35)" }}>
                        Submit Requirement →
                    </button>
                    <p className="text-center dm text-slate-400 text-[.7rem] mt-2.5">🔒 Your information is secure and never shared without consent.</p>
                </div>
            </div>
        </div>
    );
};

export default RFQModal;