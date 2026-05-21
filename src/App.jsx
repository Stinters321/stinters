import Navbar from './components/layout/Navbar'
import Challenge from './sections/Challenge'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Industries from './sections/Industries'
import CTA from './components/CTA'
import Footer from './components/layout/Footer'
import WhyStintus from './sections/WhyStintus'
import StepByStep from './sections/StepByStep'
import FAQSection from './sections/FAQ'
import ServicesSection from './sections/Services'
import AuthModal from './components/modals/AuthModal'
import RFQModal from './components/modals/RFQModal'
import { useState } from 'react'
import VendorSection from './sections/VendorSection'

function App() {
  const [rfqModal, setRfqModal] = useState(null);
  const [authModal, setAuthModal] = useState(false);
  const [authRole, setAuthRole] = useState("client");

  const openModal = (service) => { setRfqModal(service || "General Requirement"); };
  const openAuth = (role) => { if (role) setAuthRole(role); setAuthModal(true); };
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar openAuth={openAuth} openModal={openModal} />
      <main className="flex-grow">
        <Hero openAuth={openAuth} openModal={openModal} />
        <Challenge />
        <HowItWorks />
        <ServicesSection openModal={openModal} />
        <Industries />
        <WhyStintus />
        <StepByStep />
        <VendorSection openAuth={openAuth} />
        <FAQSection />
        <CTA openAuth={openAuth} openModal={openModal} />
        <Footer />
      </main>
      {rfqModal && <RFQModal service={rfqModal} onClose={() => setRfqModal(null)} />}
      {authModal && <AuthModal defaultRole={authRole} onClose={() => setAuthModal(false)} />}
    </div>
  )
}

export default App