import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LenisProvider from './components/LenisProvider'
import HomePage from './pages/HomePage'

gsap.registerPlugin(ScrollTrigger)

// Replaced Hero inline with HomeHero component

export default function App() {
  return (
    <LenisProvider>
      <HomePage />
    </LenisProvider>
  )
}
