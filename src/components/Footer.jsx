import Button from "./Button";
const Footer = () => {
    return (
        <div className="flex flex-col h-screen w-screen border-2 bg-[#0d1420]">
            <div className="px-4">
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-full border-2">
                        <p className="text-[#7cb8f8] text-[10px] font-bold" style={{letterSpacing:"1.5px"}}>- GET STARTED TODAY</p>
                    </div>
                    <p className="text-[24px] text-white font-bold">Your Operations Deserve a Reliable Partner</p>
                    <p className="text-white/40 line w-full px-0" style={{ lineHeight: "1.78", fontSize: "0.9rem" }}>Submit your first requirement in 2 minutes. Verified vendors. Full transparency. No chaos.</p>
                    <div className="flex flex-col items-center w-full">
                        <Button variant="primary" className="max-w-72 w-full py-3.75 px-7.5">
                            <p className="font-bold">Submit Requirement -&gt;</p>
                        </Button>
                        <Button variant="dark" className="max-w-72 w-full py-3.75 px-7.5">
                            <p className="font-bold">Sign In to Dashboard</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;