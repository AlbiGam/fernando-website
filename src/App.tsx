import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Partners from './components/Partners'
import Calendar from './components/Calendar'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <About />
      <Partners />
      <Calendar />
      <Contact />
    </div>
  )
}

export default App
