import React from 'react'
import Hero from '../components/Hero'
import HexagonGrid from '../components/HexagonGrid'
import AboutACM from '../components/AboutACM'
import EventHighlights from '../components/EventHighlights'
import UpcomingEvents from '../components/UpcomingEvents'

const HomePage = () => {
    return (
        <>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <AboutACM />
            </section>
            <HexagonGrid key="hex-grid-final" />
            <section id="events">
                <EventHighlights />
                <UpcomingEvents />
            </section>
        </>
    )
}

export default HomePage
