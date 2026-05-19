
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

const WhyStinters = () => {
    const cardData=[{
        number:'01',
        icon:<svg width="16" height="16" viewBox="0 0 20 20" className="fill-blue-500"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
        title:'Verified Vendors Only',
        description:'No random contractors. Every vendor is screened. You only hear from those who can actually do the job.'
    },
    {
        number:'02',
        icon:<svg width="16" height="16" viewBox="0 0 20 20" className="fill-blue-500"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"></path></svg>,
        title:'Hours, Not Days',
        description:"Vendor assigned in under 6 hours. Stop losing production time chasing people who don't answer."
    },
    {
        number:'03',
        icon:<svg width="16" height="16" viewBox="0 0 20 20" className="fill-blue-500"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zm11 1a1 1 0 10-2 0v3a1 1 0 002 0v-3z"></path></svg>,
        title:'One Dashboard, No Chaos',
        description:"All jobs tracked in one place. No WhatsApp threads, no spreadsheets, no crossed fingers."
    },
    {
        number:'04',
        icon:<svg width="16" height="16" viewBox="0 0 20 20" className="fill-blue-500"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2z"></path></svg>,
        title:'Built for Your Industry',
        description:"Designed for plant managers who need speed and clarity — not complexity."
    },
    {
        number:'05',
        icon:<svg width="16" height="16" viewBox="0 0 20 20" className="fill-blue-500"><path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z"></path></svg>,
        title:'Compare Before You Commit',
        description:"Multiple quotes side by side. See pricing and timelines and make a smart decision."
    },
    {
        number:'06',
        icon:<svg width="16" height="16" viewBox="0 0 20 20" className="fill-blue-500"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>,
        title:'Your Team Gets Time Back',
        description:"Engineers fix machines, not vendor relationships. Submit once — we handle the rest."
    }
]
    return (
        <div className="flex flex-col items-center h-max w-screen bg-[#f8fafc]">
            {/* Main Container */}
            <div className="px-4 py-20 max-w-[1160px] border-b border-white/6">
            {/* Text Section */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                        <span className="w-4 h-[2px] bg-[#2B80ED] rounded-full"></span>
                        WHY STINTERS
                    </div>

                    <h2 className="text-[24px] lg:text-[38px] font-bold font-['Sora'] text-[#0F172A] max-w-2xl leading-[1.15] tracking-tight mb-5">
                        The Smarter Way to Run Industrial Operations
                    </h2>
                </div>
                {/* Card Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-max gap-4">
                    {cardData.map((item)=>(<InfoCard key={item.number} number={item.number} icon={item.icon} title={item.title} description={item.description}/>))}
                </div>
            </div>


        </div>
    )
}

export default WhyStinters;