import './App.css'
import Header from './pages/header'
import Hero from './pages/Hero'
import LandingSections from './pages/LandingSections'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Hero />
      <LandingSections />
    </div>
  )
}

export default App