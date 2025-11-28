"use client"

import ScrollAnimation from "./scroll-animation"
import { motion } from "framer-motion"

export default function FarmSection() {
  return (
    <section id="farm" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimation direction="fade" className="text-center text-white mb-16">
            <span className="text-emerald-400 text-sm font-semibold tracking-[0.3em] uppercase">
              Where Magic Happens
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              The <span className="text-emerald-400">Farm</span>
            </h2>
            <div className="w-32 h-1 bg-emerald-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nestled at 1,800 meters in the Ketama mountains, our farm combines 
              traditional Moroccan cultivation methods with modern sustainability practices.
            </p>
          </ScrollAnimation>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200"
                  alt="Mountain cultivation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Mountain Terroir</h3>
                  <p className="text-gray-300">High-altitude cultivation at 1,800m</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-96 rounded-lg overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?q=80&w=1200"
                  alt="Cannabis plants"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Pure Beldia Genetics</h3>
                  <p className="text-gray-300">Landrace strain cultivation</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Growing Method */}
            <ScrollAnimation direction="left" delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">🌱</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Growing Method</h3>
                  <p className="text-emerald-400 font-semibold">Traditional Outdoor Cultivation</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Our Beldia plants are grown entirely outdoors, following methods passed down 
                  through generations of Moroccan farmers. We rely on natural sunlight, mountain 
                  spring water, and organic soil amendments.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Seeds sourced from local heritage genetics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Natural pest management using companion plants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Drip irrigation from mountain springs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Organic compost and natural soil enrichment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Hand-tended throughout the growing season</span>
                  </li>
                </ul>
              </div>
              </div>
            </ScrollAnimation>

            {/* Harvesting Method */}
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl">✂️</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Harvesting Method</h3>
                  <p className="text-emerald-400 font-semibold">Hand-Selected & Carefully Timed</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  Harvest timing is crucial for optimal terpene and cannabinoid profiles. 
                  Our experienced farmers monitor trichome development daily during the final weeks, 
                  ensuring peak maturity before hand-harvesting each plant.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Harvest typically mid-October to early November</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trichome inspection under magnification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Plants cut in early morning for maximum terpenes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Whole-plant harvest preserves terpene profile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Immediate transport to drying facility</span>
                  </li>
                </ul>
              </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Traditions */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 backdrop-blur-sm rounded-lg p-10 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🕌</div>
              <h3 className="text-3xl font-bold text-white mb-4">Preserving Traditions</h3>
              <div className="w-24 h-1 bg-emerald-400 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-emerald-400">Generational Knowledge</h4>
                <p className="leading-relaxed">
                  Our cultivation techniques have been refined over 500+ years in the Rif Mountains. 
                  Each generation of farmers adds their wisdom while maintaining the core principles 
                  that make Ketama Beldia unique.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-emerald-400">Community Cultivation</h4>
                <p className="leading-relaxed">
                  Cannabis cultivation in Ketama is a community effort. Families work together during 
                  planting and harvest seasons, sharing knowledge, tools, and celebrating the bounty 
                  that sustains their mountain villages.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-emerald-400">Respect for the Land</h4>
                <p className="leading-relaxed">
                  Traditional Moroccan farmers view the land as sacred. Crop rotation, natural pest 
                  management, and organic practices ensure the soil remains healthy for future 
                  generations.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-emerald-400">Hand-Crafted Quality</h4>
                <p className="leading-relaxed">
                  From seed selection to final trim, every step involves skilled human hands. 
                  This artisanal approach ensures attention to detail that machines cannot replicate, 
                  preserving the flower's natural beauty and potency.
                </p>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
