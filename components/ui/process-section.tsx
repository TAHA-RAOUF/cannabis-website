"use client"

import ScrollAnimation from "./scroll-animation"

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/85" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimation direction="fade" delay={0.1}>
            <div className="text-center text-white mb-16">
              <span className="text-emerald-400 text-sm font-semibold tracking-[0.3em] uppercase">
                From Harvest to Package
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
                Our <span className="text-emerald-400">Process</span>
              </h2>
              <div className="w-32 h-1 bg-emerald-400 mx-auto mb-6" />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every step is carefully controlled to preserve terpenes, 
                cannabinoids, and the authentic character of Moroccan Beldia.
              </p>
            </div>
          </ScrollAnimation>

          {/* Process Steps */}
          <div className="space-y-12 mb-20">
            {/* Step 1: Drying Loop System */}
            <ScrollAnimation direction="left" delay={0.2}>
              <div className="bg-gradient-to-r from-emerald-500/10 to-transparent rounded-lg p-10 border-l-4 border-emerald-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      1
                    </div>
                    <h3 className="text-3xl font-bold text-white">Drying-Loop System</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Our proprietary drying-loop system maintains optimal temperature (15-20°C) 
                    and humidity (55-60%) throughout the drying process. Plants are hung whole 
                    in a climate-controlled room with constant air circulation.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>14-21 day slow-dry process</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Darkness to preserve terpenes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Monitored hourly by experienced staff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Solar-powered climate control</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1598968359878-31d91faa3c1a?q=80&w=800"
                    alt="Drying room"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold">Climate-Controlled Drying Room</p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>

            {/* Step 2: Quality Standards */}
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent rounded-lg p-10 border-l-4 border-blue-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607546281744-5ee1d88f63e1?q=80&w=800"
                    alt="Quality inspection"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold">Hand Inspection & Sorting</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      2
                    </div>
                    <h3 className="text-3xl font-bold text-white">Quality Standards</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Every batch undergoes rigorous quality control. We inspect for mold, 
                    pests, proper density, trichome development, and overall flower structure. 
                    Only the finest flowers make it to curing.
                  </p>
                  <div className="bg-white/5 rounded-lg p-6 space-y-3">
                    <h4 className="text-emerald-400 font-bold text-lg">Quality Checklist:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Visual inspection under magnification
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Moisture content testing (target 11-13%)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Stem snap test for proper dryness
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Terpene aroma assessment
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-emerald-400">✓</span> Density and structure evaluation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>

            {/* Step 3: Curing Method */}
            <ScrollAnimation direction="left" delay={0.4}>
              <div className="bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg p-10 border-l-4 border-purple-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      3
                    </div>
                    <h3 className="text-3xl font-bold text-white">Curing Method</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    After drying, flowers are hand-trimmed and placed in glass jars for a minimum 
                    4-week cure. This crucial step develops the full terpene profile and smooths 
                    the smoke while preserving potency.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-gray-300">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-emerald-400 font-bold mb-1">Duration</p>
                      <p className="text-2xl font-bold text-white">4-8 weeks</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-emerald-400 font-bold mb-1">Temperature</p>
                      <p className="text-2xl font-bold text-white">18-21°C</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-emerald-400 font-bold mb-1">Humidity</p>
                      <p className="text-2xl font-bold text-white">60-65%</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-emerald-400 font-bold mb-1">Burping</p>
                      <p className="text-2xl font-bold text-white">Daily</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm italic">
                    * Jars are "burped" daily for the first 2 weeks, then weekly thereafter to 
                    release excess moisture and refresh oxygen.
                  </p>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587975630812-0bdbdc2f5e0e?q=80&w=800"
                    alt="Curing jars"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold">Glass Jar Curing</p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimation>

            {/* Step 4: Packaging */}
            <ScrollAnimation direction="right" delay={0.5}>
              <div className="bg-gradient-to-r from-amber-500/10 to-transparent rounded-lg p-10 border-l-4 border-amber-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative h-80 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1612165734502-0e813f422e28?q=80&w=800"
                    alt="Packaging"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold">Premium Packaging</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                      4
                    </div>
                    <h3 className="text-3xl font-bold text-white">Packaging</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Final packaging is done in a clean room environment. We use premium, 
                    UV-resistant, smell-proof bags with humidity control packs to maintain 
                    freshness during transport and storage.
                  </p>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Medical-grade, food-safe packaging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Boveda 62% humidity packs included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Lab results & strain info on every package</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Batch numbers for traceability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Eco-friendly, recyclable materials</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </ScrollAnimation>
          </div>

          {/* Quality Commitment */}
          <ScrollAnimation direction="fade" delay={0.6}>
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 backdrop-blur-sm rounded-lg p-12 border border-emerald-400/30 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Quality Commitment</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                From seed to package, every step is meticulously controlled and documented. 
                We never compromise on quality, ensuring that every gram of Ketama Beldia 
                represents the finest expression of Moroccan cannabis tradition.
              </p>
            </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
