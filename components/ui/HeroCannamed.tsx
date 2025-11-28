"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroCannamed() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image - Cannabis Field */}
      <motion.div 
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <motion.p 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-emerald-400 text-lg md:text-xl font-semibold tracking-[0.3em] uppercase"
            >
              Authentic Moroccan Cannabis
            </motion.p>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
            >
              Ketama<br/>
              <span className="text-emerald-400">Beldia</span>
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="w-32 h-1 bg-emerald-400 mx-auto"
            />
          </div>

          {/* Intro Text */}
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Premium heritage cannabis from the Ketama mountains. 
            Cultivated with tradition, powered by renewable energy, 
            delivered with integrity.
          </motion.p>

          {/* Featured Product Badge */}
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1, type: "spring", bounce: 0.5 }}
            className="inline-block bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 px-8 py-4 rounded-full"
          >
            <p className="text-emerald-400 font-semibold tracking-wider">
              🌿 Featured Strain: Moroccan Beldia Landrace
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Button 
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 text-lg font-bold tracking-wide transition-all shadow-lg hover:shadow-emerald-500/50 hover:scale-105"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-black hover:bg-white hover:text-black px-10 py-7 text-lg font-bold tracking-wide transition-all hover:scale-105"
              onClick={() => document.getElementById('farm')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Visit The Farm
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-10 py-7 text-lg font-bold tracking-wide transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
          <a href="#story" className="flex flex-col items-center gap-2 group">
            <span className="text-white text-sm tracking-wider animate-pulse">Scroll Down</span>
            <svg className="w-6 h-10 text-white animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Shape Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-24" preserveAspectRatio="none" viewBox="0 0 1000 100">
          <path d="M0 6V0h1000v100z" fill="#0a0a0a" />
        </svg>
      </div>
    </section>
  )
}
