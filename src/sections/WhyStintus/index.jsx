import FadeUp from "../../components/FadeUp"
import InfoCard from "./components/InfoCard";
import { cardData } from "./data"

const WhyStintus = () => {
    return (
        <div className="flex flex-col items-center h-max w-screen bg-[#f8fafc]">
            <div className="px-4 py-20 max-w-[1160px] border-b border-white/6">
                <FadeUp delay={0.1} className="mb-14">
                    <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                        <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
                        WHY STINTUS
                    </div>
                    <h2 className="text-[24px] lg:text-[38px] font-bold font-['Sora'] text-[#0F172A] max-w-2xl leading-[1.15] tracking-tight mb-5">
                        The Smarter Way to Run Industrial Operations
                    </h2>
                </FadeUp>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-max gap-4">
                    {cardData.map((item, index) => (
                        <FadeUp
                            key={item.number}
                            delay={0.2 + (index * 0.1)}
                            className="h-full"
                        >
                            <InfoCard
                                number={item.number}
                                icon={item.icon}
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

export default WhyStintus;