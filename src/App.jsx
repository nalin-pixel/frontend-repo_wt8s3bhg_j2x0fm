import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Shop from './components/Shop'
import Pricing from './components/Pricing'
import Chat from './components/Chat'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Shop />
      <Pricing />
      <Chat />
      <footer className="py-10 text-center text-slate-400 bg-slate-950">© {new Date().getFullYear()} NutriTailor AI</footer>
    </div>
  )
}

export default App
