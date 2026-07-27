import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'

const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-soft-beige text-sea-blue-dark">
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      <footer className="py-8 text-center text-sea-blue-dark border-t border-sea-blue-primary/20">
        <p>© 2024 Mai Yến Vy. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
