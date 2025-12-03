import React, { useEffect } from 'react'
import Lenis from 'lenis'

// Keep your existing imports
import Hero from './src/Components/Hero/Hero'
import Projects from './src/Components/Hero/Projects'
import About from './src/Components/Hero/About'
import Service from './src/Components/Hero/Service'

const Home = () => {

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // The duration of the scroll animation (higher = smoother/slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
    })

    // Animation Frame Loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function to destroy Lenis instance when component unmounts
    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className='overflow-hidden'> {/* Added overflow-hidden to prevent double scrollbars */}
      
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Service />
      </section>
    </div>
  )
}

export default Home