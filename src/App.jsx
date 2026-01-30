import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HexagonGrid from './components/HexagonGrid'
import AboutACM from './components/AboutACM'
import EventHighlights from './components/EventHighlights'
import UpcomingEvents from './components/UpcomingEvents'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutACM />
      <HexagonGrid key="hex-grid-final" />
      <EventHighlights />
      <UpcomingEvents />
      <Footer />
    </div>
  )
}

export default App
