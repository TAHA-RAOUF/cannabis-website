"use client"

export default function StorySection() {
  return (
    <section id="story" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ade80' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <span className="text-emerald-400 text-sm font-semibold tracking-[0.3em] uppercase">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              The Story of <span className="text-emerald-400">Beldia</span>
            </h2>
            <div className="w-32 h-1 bg-emerald-400 mx-auto" />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Story */}
            <div className="space-y-8">
              {/* Origins */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-emerald-400 text-3xl">🌱</span>
                  Origins of Beldia
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Beldia, meaning "local" in Arabic, is a pure landrace strain that has been 
                  cultivated in Morocco's Rif Mountains for centuries. This heritage cannabis 
                  represents generations of traditional cultivation practices, passed down through 
                  families who have dedicated their lives to preserving this remarkable plant.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Unlike modern hybrids, Beldia has remained genetically unchanged, offering 
                  a unique terpene profile and cannabinoid expression that can't be replicated 
                  anywhere else in the world.
                </p>
              </div>

              {/* Ketama Region */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-emerald-400 text-3xl">⛰️</span>
                  Ketama Region
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Nestled in the heart of the Rif Mountains, the Ketama region provides the 
                  perfect terroir for cannabis cultivation. The combination of high altitude 
                  (1,500-2,000m), Mediterranean climate, mineral-rich soil, and pure mountain 
                  water creates ideal growing conditions.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The unique microclimate of Ketama, with its hot summers and cold winters, 
                  stresses the plants in ways that enhance resin production and develop the 
                  complex aromatic profile Beldia is famous for.
                </p>
              </div>
            </div>

            {/* Right Column - Image & Values */}
            <div className="space-y-8">
              {/* Featured Image */}
              <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800"
                  alt="Ketama Mountains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xl font-bold">Ketama Mountains, Morocco</p>
                  <p className="text-sm text-gray-300">Where tradition meets purity</p>
                </div>
              </div>

              {/* Sustainability */}
              <div className="bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/30 rounded-lg p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-emerald-400 text-3xl">♻️</span>
                  Sustainable & Renewable
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our farm operates 100% on renewable energy sources. Solar panels power our 
                  drying facilities, rainwater harvesting systems irrigate our crops, and organic 
                  composting returns nutrients to the soil.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% solar-powered operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Organic cultivation methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Zero chemical pesticides or fertilizers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Carbon-neutral cultivation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-emerald-400/50 transition-all">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-xl font-bold text-white mb-3">Authenticity</h4>
              <p className="text-gray-400">
                We preserve pure Beldia genetics, honoring centuries of cultivation tradition.
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-emerald-400/50 transition-all">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-3">Community</h4>
              <p className="text-gray-400">
                Supporting local Moroccan farmers and their families for sustainable livelihoods.
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-emerald-400/50 transition-all">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-xl font-bold text-white mb-3">Excellence</h4>
              <p className="text-gray-400">
                Uncompromising quality standards from seed to final product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
