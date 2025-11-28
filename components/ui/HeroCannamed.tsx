"use client"

import { Button } from "@/components/ui/button"

export default function HeroCannamed() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image - Cannabis Field */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <p className="text-emerald-400 text-lg md:text-xl font-semibold tracking-[0.3em] uppercase">
              Authentic Moroccan Cannabis
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              Ketama<br/>
              <span className="text-emerald-400">Beldia</span>
            </h1>
            <div className="w-32 h-1 bg-emerald-400 mx-auto" />
          </div>

          {/* Intro Text */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Premium heritage cannabis from the Ketama mountains. 
            Cultivated with tradition, powered by renewable energy, 
            delivered with integrity.
          </p>

          {/* Featured Product Badge */}
          <div className="inline-block bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 px-8 py-4 rounded-full">
            <p className="text-emerald-400 font-semibold tracking-wider">
              🌿 Featured Strain: Moroccan Beldia Landrace
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-7 text-lg font-bold tracking-wide transition-all shadow-lg hover:shadow-emerald-500/50"
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Story
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-7 text-lg font-bold tracking-wide transition-all"
              onClick={() => document.getElementById('farm')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Visit The Farm
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black px-10 py-7 text-lg font-bold tracking-wide transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
          </div>
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
