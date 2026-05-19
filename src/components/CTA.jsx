import Button from "./Button";
import { ArrowRight } from "lucide-react";
const CTA = ({openModal,openAuth}) => {
    return (
        <div id="Cta" className="flex flex-col h-max w-screen bg-[#0d1420] relative">
            <div className="px-4 py-20 border-b border-white/6 before:absolute before:content-[''] before:inset-0 before:bg-[radial-gradient(ellipse_52%_68%_at_50%_50%,rgba(43,128,237,0.15)_0%,transparent_70%)]">
                <div className="flex flex-col items-center text-center relative z-1">
                    <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                        <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
                        GET STARTED TODAY
                    </div>
                    <p className="text-[24px] lg:text-[38px] max-w-140 text-white font-bold font-['Sora']">Your Operations Deserve a Reliable Partner</p>
                    <p className="text-white/40 line w-full px-0 font-['DM Sans']" style={{ lineHeight: "1.78", fontSize: "0.9rem" }}>Submit your first requirement in 2 minutes. Verified vendors. Full transparency. No chaos.</p>
                    <div className="flex flex-col md:flex-row items-center md:justify-center w-full font-['Sora'] gap-5">
                        <Button variant="primary" className="flex items-center max-w-72 w-full py-3.75 px-7.5" onClick={()=>openModal("General Requirement")}>
                            <p className="font-bold">Submit Requirement</p> <ArrowRight size={18}/>
                        </Button>
                        <Button variant="dark" className="max-w-72 w-full py-3.75 px-7.5" onClick={openAuth}>
                            <p className="font-bold">Sign In to Dashboard</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA;