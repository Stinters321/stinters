import FadeUp from "../../components/FadeUp"
import InfoCard from "./components/InfoCard";
import { infoCardData } from "./data"

const StepByStep = () => {
    return (
        <div className="flex flex-col items-center h-max w-screen bg-[#131C2E]" id="StepByStep">
            <div className="px-4 py-20 max-w-290 border-b border-white/6">
                <FadeUp delay={0.1} className="mb-14">
                    <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                        <span className="w-4 h-0.5 bg-[#2B80ED] rounded-full"></span>
                        STEP BY STEP
                    </div>
                    <h2 className="text-[24px] lg:text-[38px] font-bold font-['Sora'] text-white max-w-2xl leading-[1.15] tracking-tight mb-5">
                        From Submission to Completion
                    </h2>
                    <p className="text-white/36 text-[15px]">Here's exactly what happens after you submit a requirement.</p>
                </FadeUp>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-max gap-4">
                    {infoCardData.map((item, index) => (
                        <FadeUp
                            key={item.number + '_' + item.title}
                            delay={0.2 + (index * 0.1)}
                            className="h-full"
                        >
                            <InfoCard
                                number={item.number}
                                title={item.title}
                                description={item.description}
                            />
                        </FadeUp>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StepByStep;