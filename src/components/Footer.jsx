import { MailIcon } from "lucide-react"
import Button from "./Button"

const FSocial=({text})=>{
    return(
        <div className="flex justify-center items-center h-6 w-6 border p-3.5 rounded-md bg-white/5 border-white/8 transition-colors hover:bg-blue-500 hover:text-white focus:bg-blue-500 cursor-pointer">
            <p className="font-['Sora'] font-bold text-[10px]">{text}</p>
        </div>
    )
}

const Footer = () => {

    const servicesData=[
        {name:'MRO Services',route:'#'},
        {name:'Electrical Work',route:'#'},
        {name:'Facility Management',route:'#'},
        {name:'Civil and Structural',route:'#'},
        {name:'On-Demand Spares',route:'#'}]

    const companySectionData=[
        {name:'About Us',route:'#'},
        {name:'How it works',route:'#'},
        {name:'Industries',route:'#'},
        {name:'Become a Vendor',route:'#'},
        {name:'FAQ',route:'#'}
    ]
    return (
        <div className="flex flex-col h-max w-screen bg-[#0d1420]">
            <div className="flex flex-col py-20 px-5 h-max lg:items-center">
                {/* Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full lg:w-3/4 h-full gap-y-10 py-5 border-b border-white/6">
                    {/* Grid items */}
                    {/* Initial */}
                    <div className="flex flex-col text-white/40 gap-2">
                        <p className="font-['Sora'] font-bold text-white">STINT<span className="text-blue-500">ERS</span></p>
                        <p className="text-[9px] text-white/22">MRO · Facility Management · On-Demand Spares</p>
                        <p className="text-xs w-[62%] text-white/27">Connecting Indian manufacturing businesses with verified vendors — faster, smarter, with full visibility. Serving Industrial Gujarat.</p>
                        <div className="flex items-center gap-2">
                            <FSocial text={'Li'}/>
                            <FSocial text={'Tw'}/>
                            <FSocial text={'WA'}/>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col text-white/40">
                        <p className="text-[10.4px] font-bold text-white/24" style={{letterSpacing:'1.04px'}}>SERVICES</p>
                        <div className="flex flex-col text-sm gap-2">
                            {servicesData.map((service,index)=>(<a className="transition-colors hover:text-white" key={index+service.name} href={service.route}>{service.name}</a>))}
                        </div>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col text-white/40">
                        <p className="text-[10.4px] font-bold text-white/24" style={{letterSpacing:'1.04px'}}>COMPANY</p>
                        <div className="flex flex-col text-sm gap-2">
                            {companySectionData.map((section,index)=>(<a className="transition-colors hover:text-white" key={index+section.name} href={section.route}>{section.name}</a>))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col text-white/40">
                        <p className="text-[10.4px] font-bold text-white/24" style={{letterSpacing:'1.04px'}}>CONTACT</p>
                        <div className="flex flex-col text-sm gap-2">
                            <div className="flex items-center gap-2"><svg viewBox="0 0 20 20" style={{height:'10px',width:'10px',fill:'#2B80ED'}}><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> <p>hello@stinters.com</p></div>
                            <div className="flex items-center gap-2"><svg viewBox="0 0 20 20" style={{height:'10px',width:'10px',fill:'#2B80ED'}}><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> <p>+91 00000 00000</p></div>
                            <div className="flex items-center gap-2"><svg viewBox="0 0 20 20" style={{height:'10px',width:'10px',fill:'#2B80ED'}}><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"></path></svg> <p>Gujarat, India</p></div>
                            <Button variant="primary" className="flex justify-start items-center gap-2 bg-green-400 hover:bg-green-400 rounded-md px-2.5 py-1.5 text-white/50 hover:text-white text-sm font-['Sora'] font-bold"><svg viewBox="0 0 24 24" style={{height:'10px',width:'10px',fill:'white'}}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg> Whatsapp Us</Button>
                        </div>
                    </div>
                </div>

                {/* Copyright Info */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:w-3/4 items-center text-white/20 text-[12px] gap-2">
                    <p>© 2025 Stinters. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;