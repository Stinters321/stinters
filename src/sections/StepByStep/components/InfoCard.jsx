const InfoCard = ({ number, title, description }) => {
    return (
        <div className="flex flex-col relative border bg-white/4 hover:bg-[#2b80ed12] border-white/7 hover:border-[#2b80ed38] rounded-xl overflow-hidden p-5 gap-3">
            <div className="w-10 h-10 rounded-full bg-[#223353] border border-blue-900/50 flex items-center justify-center text-[#2B80ED] font-['Sora'] font-extrabold text-[15px] shadow-[0_0_15px_rgba(43,128,237,0.1)]">
                {number}
            </div>
            <p className="text-white text-sm font-bold">{title}</p>
            <p className="text-xs text-[#64748b]">{description}</p>
        </div>
    )
}

export default InfoCard;