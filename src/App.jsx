import Navbar from './components/Navbar'
import Challenge from './sections/Challenge'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Industries from './sections/Industries'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhyStinters from './sections/WhyStinters'
import StepByStep from './sections/StepByStep'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <main className="flex-grow"> 
        <Hero />
        <Challenge />
        <HowItWorks />
        <Industries />
        <WhyStinters />
        <StepByStep />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App