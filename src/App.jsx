import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import EventsPage from './pages/EventsPage'
import PeoplePage from './pages/PeoplePage'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a minimum loading time for the splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Also listen for window load event for better accuracy if needed
    window.addEventListener('load', () => {
      // Small additional delay after window load for smooth transition
      setTimeout(() => setLoading(false), 1000);
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/people" element={<PeoplePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
