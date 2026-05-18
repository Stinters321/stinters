import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      <main className="flex-grow"> 
        <Hero />
      </main>
    </div>
  )
}

export default App