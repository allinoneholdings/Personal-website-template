import './App.css'
import Header from './pages/header'
import Hero from './pages/Hero'
import LandingSections from './pages/LandingSections'
import ControlPanel from './pages/ControlPanel'

function App() {
  const isControl = window.location.pathname.startsWith('/control')

  if (isControl) {
    return (
      <div className="app-shell">
        <ControlPanel />
      </div>
    )
  }

  return (
    <div className="app-shell">
      <Header />
      <Hero />
      <LandingSections />
    </div>
  )
}

export default App