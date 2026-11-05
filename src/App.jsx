import React, { Suspense, lazy, useState } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import {
  OrnamentDivider, BotanicalSprig, RoyalCrest, ChapterDivider, AmbientFireflies,
} from './components/decor/Ornaments'

const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Portfolio = lazy(() => import('./components/Portfolio'))
const Contact = lazy(() => import('./components/Contact'))

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-24 bg-midnight">
      <div className="w-10 h-10 rounded-full border-2 border-gold/30 border-t-champagne animate-spin" />
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative z-[2] bg-[#070912]/90 text-night/80 paper-grain overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-champagne/70 to-transparent" aria-hidden="true" />
      <BotanicalSprig className="absolute left-6 bottom-0 w-10 h-28 opacity-25 hidden sm:block" />
      <BotanicalSprig flip className="absolute right-6 bottom-0 w-10 h-28 opacity-25 hidden sm:block" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center relative">
        <RoyalCrest className="mx-auto w-9 h-11 mb-4 opacity-80" />
        <p className="font-script text-4xl text-champagne mb-3">hết chuyện?</p>
        <p className="font-display text-lg tracking-wide mb-8 text-night/70">
          © {new Date().getFullYear()} Mai Yến Vy · Được viết bằng tình yêu cho từng câu chuyện
        </p>
        <OrnamentDivider />
        <p className="mt-7 text-night/40 text-xs tracking-widest-story uppercase">
          Midnight Royal · Vintage Storybook
        </p>
      </div>
    </footer>
  )
}

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <div className="relative min-h-screen bg-midnight text-night">
      {/* One shared firefly layer for the whole site (major lag fix) */}
      <AmbientFireflies count={28} />

      <Intro onComplete={() => setIntroComplete(true)} />
      <Navbar />
      <main className="relative z-[2]">
        <Suspense fallback={<LoadingFallback />}>
          <Hero introComplete={introComplete} />
        </Suspense>
        <ChapterDivider />
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <ChapterDivider />
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        <ChapterDivider />
        <Suspense fallback={<LoadingFallback />}>
          <Portfolio />
        </Suspense>
        <ChapterDivider />
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
