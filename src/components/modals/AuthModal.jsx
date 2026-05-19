import { useState } from "react";

const AuthModal = ({ defaultRole, onClose }) => {
  const [role, setRole] = useState(defaultRole || "client");
  const [tab, setTab] = useState("si");
  const [vStep, setVStep] = useState(1);
  const [siEmail, setSiEmail] = useState(""); const [siPass, setSiPass] = useState("");
  const [suName, setSuName] = useState(""); const [suCo, setSuCo] = useState("");
  const [suPhone, setSuPhone] = useState(""); const [suEmail, setSuEmail] = useState("");
  const [suOtpVisible, setSuOtpVisible] = useState(false); const [suOtpSent, setSuOtpSent] = useState(false);

  const sendOTP = () => {
    if (!suEmail.includes("@")) { alert("Please enter a valid email address."); return; }
    setSuOtpVisible(true); setSuOtpSent(true);
    alert("OTP sent to " + suEmail + ".\n(Demo: enter any 6 digits to verify)");
  };
  const doSignIn = () => {
    if (!siEmail || !siPass) { alert("Please enter your email and password."); return; }
    alert("✅ Signed in successfully! Welcome back to your Stintus dashboard."); onClose();
  };
  const doSignUp = () => {
    if (!suName || !suPhone) { alert("Please fill in your name and phone number."); return; }
    alert("✅ Account created! Welcome to Stintus."); onClose();
  };
  const submitVendor = () => { alert("✅ Vendor registration submitted!\n\nOur team will review your profile within 24–48 hours."); onClose(); };

  const InputField = ({ label, ...props }) => (
    <div className="flex flex-col gap-1 mb-3">
      <label className="sora text-[.69rem] font-bold text-slate-900">{label}</label>
      <input {...props} className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue-400 focus:bg-white focus:shadow-[0_0_0_3px_rgba(43,128,237,.1)] transition-all" />
    </div>
  );

  const SocialBtn = ({ icon, children, onClick }) => (
    <button onClick={onClick} className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl border-[1.5px] border-slate-200 bg-white sora text-sm font-semibold text-slate-800 cursor-pointer transition-all hover:border-blue-400 hover:-translate-y-0.5 hover:bg-blue-50">
      {icon}{children}
    </button>
  );

  const GoogleSVG = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[2000] flex items-center justify-center p-3.5" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal-in bg-white rounded-2xl w-full max-w-[500px] max-h-[94vh] overflow-y-auto shadow-2xl">
        <button onClick={onClose} className="absolute top-3.5 right-3.5 bg-white/10 border border-white/16 text-white w-7 h-7 rounded-lg text-sm flex items-center justify-center hover:bg-white/20 z-10 transition-colors">✕</button>

        {/* Auth Hero */}
        <div className="relative rounded-t-2xl px-7 pt-7 pb-6 overflow-hidden text-center" style={{ background: "linear-gradient(135deg,#131C2E,#1a2d4a)" }}>
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none" style={{ background: "rgba(43,128,237,.12)" }} />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full pointer-events-none" style={{ background: "rgba(43,128,237,.08)" }} />
          <div className="sora font-extrabold text-[1.15rem] text-white tracking-tight mb-4 relative z-10">
            STINT<span className="text-blue-400">ERS</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mb-1 relative z-10">
            {[["client","🏭","I'm a Client","I need vendors for MRO, facility management, or industrial spares"],
              ["vendor","🔧","I'm a Vendor","I provide industrial services and want to receive enquiries"]
            ].map(([r,ico,title,sub])=>(
              <div key={r} onClick={()=>setRole(r)} className="rounded-xl p-3.5 cursor-pointer transition-all text-center border-2" style={{ background: role===r?"rgba(43,128,237,.18)":"rgba(255,255,255,.06)", borderColor: role===r?"#2B80ED":"rgba(255,255,255,.1)" }}>
                <div className="text-3xl mb-2">{ico}</div>
                <div className="sora font-bold text-sm text-white mb-1">{title}</div>
                <div className="dm text-[.68rem] leading-snug" style={{ color: role===r?"rgba(255,255,255,.65)":"rgba(255,255,255,.44)" }}>{sub}</div>
              </div>
            ))}
          </div>
          <div className="dm text-[.7rem] mt-2.5 relative z-10" style={{ color: "rgba(255,255,255,.3)" }}>Select your role to get the right experience</div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200" style={{ background: "#F8FAFC" }}>
          {[["si","Sign In"],["su","Create Account"]].map(([t,label])=>(
            <button key={t} onClick={()=>setTab(t)} className="flex-1 sora font-bold text-sm py-3.5 border-none bg-transparent cursor-pointer transition-all border-b-2" style={{ color: tab===t?"#2B80ED":"#64748B", borderBottomColor: tab===t?"#2B80ED":"transparent", background: tab===t?"#fff":"transparent" }}>
              {label}
            </button>
          ))}
        </div>

        {/* Sign In */}
        {tab === "si" && (
          <div className="px-6 py-5">
            <div className="flex flex-col gap-2.5 mb-4">
              <SocialBtn icon={<GoogleSVG/>} onClick={()=>alert("Redirecting to Google Sign In...")}>Continue with Google</SocialBtn>
              <SocialBtn icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>} onClick={()=>alert("Continue with Phone Number")}>Continue with Phone Number</SocialBtn>
            </div>
            <div className="flex items-center gap-2.5 my-3.5">
              <div className="flex-1 h-px bg-slate-200"/><span className="dm text-xs text-slate-400 whitespace-nowrap">or sign in with email</span><div className="flex-1 h-px bg-slate-200"/>
            </div>
            <InputField label="Email Address" type="email" value={siEmail} onChange={e=>setSiEmail(e.target.value)} placeholder="you@company.com" />
            <div className="flex flex-col gap-1 mb-3">
              <label className="sora text-[.69rem] font-bold text-slate-900">Password</label>
              <input type="password" value={siPass} onChange={e=>setSiPass(e.target.value)} placeholder="Enter your password" className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 w-full outline-none focus:border-blue-400 focus:bg-white transition-all" />
              <button onClick={()=>alert("Password reset link sent to your email.")} className="sora text-[.72rem] text-blue-500 font-semibold text-right self-end cursor-pointer">Forgot password?</button>
            </div>
            <button onClick={doSignIn} className="sora w-full py-3 font-bold text-sm text-white rounded-xl cursor-pointer mt-1.5 transition-all hover:-translate-y-0.5" style={{ background: "#2B80ED", boxShadow: "0 4px 14px rgba(43,128,237,.35)" }}>Sign In →</button>
            <p className="text-center dm text-sm text-slate-500 mt-3">Don't have an account? <span onClick={()=>setTab("su")} className="text-blue-500 font-semibold cursor-pointer">Create one free</span></p>
            <p className="text-center dm text-[.69rem] text-slate-400 mt-2 leading-relaxed">🔒 Secure login. Your data is never shared without consent.</p>
          </div>
        )}

        {/* Sign Up — Client */}
        {tab === "su" && role === "client" && (
          <div className="px-6 py-5">
            <div className="mb-4">
              <SocialBtn icon={<GoogleSVG/>} onClick={()=>alert("Redirecting to Google Sign Up...")}>Sign Up with Google</SocialBtn>
            </div>
            <div className="flex items-center gap-2.5 my-3.5">
              <div className="flex-1 h-px bg-slate-200"/><span className="dm text-xs text-slate-400 whitespace-nowrap">or sign up with email</span><div className="flex-1 h-px bg-slate-200"/>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <InputField label="Full Name *" type="text" value={suName} onChange={e=>setSuName(e.target.value)} placeholder="Rahul Sharma" />
              <InputField label="Company Name *" type="text" value={suCo} onChange={e=>setSuCo(e.target.value)} placeholder="ABC Industries" />
            </div>
            <InputField label="Phone Number *" type="tel" value={suPhone} onChange={e=>setSuPhone(e.target.value)} placeholder="+91 98765 43210" />
            <div className="flex flex-col gap-1 mb-3">
              <label className="sora text-[.69rem] font-bold text-slate-900">Email Address *</label>
              <div className="flex gap-2 items-end">
                <input type="email" value={suEmail} onChange={e=>setSuEmail(e.target.value)} placeholder="you@company.com" className="dm text-sm bg-slate-50 border-[1.5px] border-slate-200 rounded-lg px-3 py-2.5 flex-1 outline-none focus:border-blue-400 focus:bg-white transition-all" />
                <button onClick={sendOTP} disabled={suOtpSent} className="sora text-[.74rem] font-bold px-3 py-2.5 rounded-lg cursor-pointer whitespace-nowrap transition-all disabled:opacity-50" style={{ background: "#EBF3FE", border: "1.5px solid rgba(43,128,237,.3)", color: "#2B80ED" }}>
                  {suOtpSent ? "Sent ✓" : "Send OTP"}
                </button>
              </div>
            </div>
            {suOtpVisible && (
              <div className="mb-3">
                <label className="sora text-[.69rem] font-bold text-slate-900 block mb-1.5">Enter 6-digit OTP</label>
                <div className="flex gap-1.5">
                  {Array(6).fill(0).map((_,i)=>(
                    <input key={i} maxLength={1} className="sora w-10 h-11 border-[1.5px] border-slate-200 rounded-lg text-center font-bold text-slate-900 bg-slate-50 outline-none focus:border-blue-400 focus:bg-white text-lg transition-all" onInput={e=>{if(e.target.value&&e.target.nextSibling)e.target.nextSibling.focus()}} />
                  ))}
                </div>
              </div>
            )}
            <button onClick={doSignUp} className="sora w-full py-3 font-bold text-sm text-white rounded-xl cursor-pointer mt-1.5 transition-all hover:-translate-y-0.5" style={{ background: "#2B80ED", boxShadow: "0 4px 14px rgba(43,128,237,.35)" }}>Create Account →</button>
          </div>
        )}

        {/* Sign Up — Vendor Multi-step */}
        {tab === "su" && role === "vendor" && (
          <div className="px-6 py-5">
            <div className="flex gap-1.5 mb-4">
              {["1. Your Info","2. Services","3. Coverage"].map((s,i)=>(
                <div key={i} className="flex-1 text-center sora text-[.67rem] font-bold py-1.5 rounded-lg border-[1.5px] transition-all" style={{
                  background: vStep>i+1?"#10B981":vStep===i+1?"#2B80ED":"transparent",
                  borderColor: vStep>i+1?"#10B981":vStep===i+1?"#2B80ED":"#E2E8F0",
                  color: vStep>=i+1?"#fff":"#64748B"
                }}>{s}</div>
              ))}
            </div>
            {vStep===1&&<>
              <InputField label="Your Name *" type="text" placeholder="Raj Patel" />
              <InputField label="Business Name *" type="text" placeholder="Patel Engineering Works" />
              <InputField label="Phone *" type="tel" placeholder="+91 98765 43210" />
              <InputField label="Email *" type="email" placeholder="raj@patelworks.com" />
              <button onClick={()=>setVStep(2)} className="sora w-full py-3 font-bold text-sm text-white rounded-xl cursor-pointer mt-1.5 transition-all" style={{background:"#2B80ED"}}>Next: Services →</button>
            </>}
            {vStep===2&&<>
              <label className="sora text-[.69rem] font-bold text-slate-900 block mb-2">Select Your Service Categories *</label>
              <div className="grid grid-cols-2 gap-1.5 mb-4">
                {["Mechanical Maintenance","Electrical Work","Automation & Controls","Facility Management","Civil & Welding","On-Demand Spares","Emergency Breakdown","Preventive Maintenance"].map(s=>(
                  <label key={s} className="flex items-center gap-1.5 text-sm text-slate-800 cursor-pointer dm">
                    <input type="checkbox" className="w-3.5 h-3.5 accent-blue-500" />{s}
                  </label>
                ))}
              </div>
              <div className="flex gap-2 mt-3.5">
                <button onClick={()=>setVStep(1)} className="sora flex-1 py-2.5 font-bold text-sm text-slate-800 rounded-xl border-[1.5px] border-slate-200 cursor-pointer hover:border-blue-400 hover:text-blue-500 transition-all">← Back</button>
                <button onClick={()=>setVStep(3)} className="sora flex-[2] py-2.5 font-bold text-sm text-white rounded-xl cursor-pointer transition-all" style={{background:"#2B80ED"}}>Next: Coverage →</button>
              </div>
            </>}
            {vStep===3&&<>
              <InputField label="Primary City/Region *" type="text" placeholder="e.g. Ahmedabad, Surat, Vadodara" />
              <InputField label="Years in Business" type="text" placeholder="e.g. 8 years" />
              <InputField label="GST Number (optional)" type="text" placeholder="22AAAAA0000A1Z5" />
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mt-3 mb-1">
                <p className="sora text-[.78rem] font-bold text-blue-600 mb-1">What happens next?</p>
                <span className="dm text-[.74rem] text-slate-500">Our team reviews your profile within 24–48 hours, then you start receiving qualified RFQs.</span>
              </div>
              <div className="flex gap-2 mt-3.5">
                <button onClick={()=>setVStep(2)} className="sora flex-1 py-2.5 font-bold text-sm text-slate-800 rounded-xl border-[1.5px] border-slate-200 cursor-pointer hover:border-blue-400 transition-all">← Back</button>
                <button onClick={submitVendor} className="sora flex-[2] py-2.5 font-bold text-sm text-white rounded-xl cursor-pointer transition-all" style={{background:"#2B80ED"}}>Submit Registration →</button>
              </div>
            </>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;