"use client"

import { section } from "framer-motion/client"
import ScrollAnimation from "./scroll-animation"

export default function StrainsSection() {
  return (
    <section id="strains" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?w=1920&q=80" 
          alt="Cannabis background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-emerald-950/50" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollAnimation direction="fade" delay={0.1}>
            <div className="text-center text-white mb-16">
              <span className="text-emerald-400 text-sm font-semibold tracking-[0.3em] uppercase">
                Premium Landrace
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Moroccan <span className="text-emerald-400">Beldia</span>
              </h2>
              <div className="w-32 h-1 bg-emerald-400 mx-auto mb-6" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A pure landrace strain with centuries of genetic lineage, 
                cultivated in the legendary Ketama mountains of Morocco.
              </p>
            </div>
          </ScrollAnimation>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Photos */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?q=80&w=1200"
                  alt="Beldia flower close-up"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-emerald-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-bold text-sm">THC: 12-18%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=600"
                    alt="Beldia trichomes"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=600"
                    alt="Beldia harvest"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            </ScrollAnimation>

            {/* Right - Info */}
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="space-y-8">
                {/* Strain Info */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Strain Information</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="font-semibold">Type:</span>
                    <span className="text-emerald-400">Sativa-Dominant Landrace</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="font-semibold">Origin:</span>
                    <span>Ketama, Morocco</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="font-semibold">Genetics:</span>
                    <span>Pure Landrace (500+ years)</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="font-semibold">THC:</span>
                    <span>12-18%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-700 pb-3">
                    <span className="font-semibold">CBD:</span>
                    <span>0.5-1.5%</span>
                  </div>
                  <div className="flex justify-between pb-3">
                    <span className="font-semibold">Flowering Time:</span>
                    <span>10-12 weeks</span>
                  </div>
                </div>
              </div>

              {/* Effects */}
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 backdrop-blur-sm rounded-lg p-8 border border-emerald-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Effects & Profile</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Beldia provides a clear-headed, energetic high characteristic of pure sativas. 
                  Users report enhanced creativity, focus, and mild euphoria without overwhelming 
                  intensity. Perfect for daytime use and social activities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-full text-sm">Energetic</span>
                  <span className="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-full text-sm">Creative</span>
                  <span className="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-full text-sm">Uplifting</span>
                  <span className="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-full text-sm">Focused</span>
                  <span className="px-4 py-2 bg-emerald-500/30 text-emerald-300 rounded-full text-sm">Social</span>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>

          {/* Terpene Profile */}
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-10 border border-white/10 mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Terpene Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Myrcene */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-emerald-400">Myrcene</h4>
                  <span className="text-white font-bold">35%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Earthy, musky aroma. Known for relaxing and sedative effects.
                </p>
              </div>

              {/* Limonene */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-emerald-400">Limonene</h4>
                  <span className="text-white font-bold">25%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Citrus aroma. Uplifting, mood-enhancing, and stress-relieving.
                </p>
              </div>

              {/* Caryophyllene */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-emerald-400">Caryophyllene</h4>
                  <span className="text-white font-bold">20%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Spicy, peppery notes. Anti-inflammatory properties.
                </p>
              </div>

              {/* Pinene */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-emerald-400">Pinene</h4>
                  <span className="text-white font-bold">12%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '12%' }}></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Pine aroma. Promotes alertness and memory retention.
                </p>
              </div>

              {/* Humulene */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-emerald-400">Humulene</h4>
                  <span className="text-white font-bold">5%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Woody, earthy. Appetite suppressant and anti-inflammatory.
                </p>
              </div>

              {/* Linalool */}
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-emerald-400">Linalool</h4>
                  <span className="text-white font-bold">3%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-emerald-500 h-3 rounded-full" style={{ width: '3%' }}></div>
                </div>
                <p className="text-gray-400 text-sm">
                  Floral, lavender notes. Calming and anti-anxiety effects.
                </p>
              </div>
            </div>
            </div>
          </ScrollAnimation>

          {/* Lab Results */}
          <ScrollAnimation direction="up" delay={0.5}>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-10 border border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Lab Results</h3>
                <p className="text-gray-400">Third-party tested for quality assurance</p>
              </div>
              <div className="bg-emerald-500/20 px-6 py-3 rounded-lg border border-emerald-400/30">
                <p className="text-emerald-400 font-bold">✓ Certified</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">Total THC</p>
                <p className="text-3xl font-bold text-white">15.2%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">Total CBD</p>
                <p className="text-3xl font-bold text-white">1.1%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">Total Terpenes</p>
                <p className="text-3xl font-bold text-white">3.8%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 text-center">
                <p className="text-gray-400 text-sm mb-2">Moisture</p>
                <p className="text-3xl font-bold text-white">11.5%</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
              <h4 className="text-white font-bold mb-4">Safety Testing</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2 text-emerald-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Pesticide-Free</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Heavy Metals Tested</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Microbial Screening</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Residual Solvents</span>
                </div>
              </div>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
