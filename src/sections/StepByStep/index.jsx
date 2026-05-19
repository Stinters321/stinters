

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

const StepByStep = () => {

    const infoCardData = [
        {
            number: '1',
            title: 'You Submit the Requirement',
            description: 'Job type, spec, urgency, location. 2 minutes max. We do the rest.'
        },
        {
            number: '2',
            title: 'Team Reviews & Categorises',
            description: 'We assess the job and identify the right vendor profiles from our network.'
        },
        {
            number: '3',
            title: 'Vendors Matched & Briefed',
            description: 'Verified vendors are notified with full job details and asked to respond.'
        },
        {
            number: '4',
            title: 'Quotes Arrive to Compare',
            description: 'Multiple quotes with pricing and timelines — all in one place.'
        },
        {
            number: '5',
            title: 'You Select, We Confirm',
            description: 'Choose your vendor. We brief both parties on next steps.'
        },
        {
            number: '6',
            title: 'Job Done. Tracked. Closed.',
            description: 'Work tracked live on dashboard, completed with full documentation.'
        },
    ]


    return (
        <div className="flex flex-col items-center h-max w-screen bg-[#131C2E]" id="StepByStep">
            {/* Main Container */}
            <div className="px-4 py-20 max-w-290 border-b border-white/6">
                {/* Text Section */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 text-[#2B80ED] font-bold text-[11px] tracking-[0.15em] uppercase mb-3">
                        <span className="w-4 h-0.5 bg-[#2B80ED] rounded-full"></span>
                        STEP BY STEP
                    </div>

                    <h2 className="text-[24px] lg:text-[38px] font-bold font-['Sora'] text-white max-w-2xl leading-[1.15] tracking-tight mb-5">
                        From Submission to Completion
                    </h2>

                    <p className="text-white/36 text-[15px]">Here's exactly what happens after you submit a requirement.</p>
                </div>
                {/* Card Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-max gap-4">
                    {infoCardData.map((item)=>(<InfoCard key={item.number+'_'+item.title} number={item.number} title={item.title} description={item.description}/>))}
                </div>
            </div>

        </div>
    )
}

export default StepByStep;