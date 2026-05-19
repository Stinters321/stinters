const InfoCard = ({number,icon,title,description}) => {
    return (
        <div className="flex flex-col relative border border-[#e2e8f0] rounded-xl overflow-hidden p-5 gap-3 hover:shadow-lg transition-all after:transition-all after:content-[''] after:h-0.75 after:bg-[linear-gradient(90deg,#2B80ED,rgba(43,128,237,.1))] after:absolute after:top-0 after:left-0 after:right-0 after:origin-left after:scale-x-0 hover:after:scale-x-100">
            <p className="font-extrabold text-[2rem] text-blue-200 leading-none">{number}</p>
            <div className="flex justify-center items-center h-9 w-9 border p-3.5 rounded-md bg-[#ebf3fe] border-white/8 cursor-pointer">
                <p className="font-['Sora'] font-bold text-[10px]">{icon}</p>
            </div>
            <p className="text-[#131c2e] text-sm font-bold">{title}</p>
            <p className="text-xs text-[#64748b]">{description}</p>
        </div>
    )
}

export default InfoCard;