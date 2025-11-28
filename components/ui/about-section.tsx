"use client"

import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-[#1B1B1C] overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000')"
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6">
            <span className="text-emerald-400 text-sm font-semibold tracking-[0.3em] uppercase">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-wider">
              2020 Best Rated Lounge
            </h2>
            <div className="w-32 h-1 bg-white" />
            <p className="text-lg text-gray-400 leading-relaxed">
              Medical cannabis can be administered through various methods, including capsules, 
              lozenges, tinctures, dermal patches, oral or dermal sprays, cannabis edibles, and 
              vaporizing or smoking dried buds. Synthetic cannabinoids are available for prescription 
              use in some countries, such as dronabinol and nabilone. Countries that allow the medical 
              use of cannabis.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all px-8 py-6 text-sm tracking-[0.2em] uppercase font-bold"
            >
              Book Now
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1585382325916-4a299a34e1c6?q=80&w=800"
                alt="Cannabis lounge interior"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Secondary Content Section */}
        <div className="mt-32 bg-black/50 backdrop-blur-sm p-12 md:p-16 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2913/2913133.png"
              alt="Cannabis Icon"
              className="w-20 h-20 mx-auto opacity-80"
            />
          </div>
          <h3 className="text-white text-xl font-bold tracking-[0.25em] uppercase mb-4">
            Cannamed Lounge Found in 2012
          </h3>
          <div className="w-32 h-1 bg-white mx-auto mb-8" />
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Molecular analytical techniques developed in the late 20th century are being applied 
            to questions of taxonomic classification. This has resulted in many reclassifications 
            based on evolutionary systematics. Several studies of Random Amplified Polymorphic DNA 
            (RAPD) and other types of genetic analysis.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-emerald-500 hover:border-emerald-500 hover:text-white transition-all px-8 py-6 text-sm tracking-[0.2em] uppercase font-bold"
          >
            Learn More
          </Button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Opening Hours */}
          <div className="text-center text-white space-y-4">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-bold tracking-[0.2em] uppercase">Opening Hours</h4>
            <div className="text-gray-400 space-y-1">
              <p>Sun – Thu : 16:00 – 23:00</p>
              <p>Fri – Sat : 13:00 – 01:00</p>
            </div>
          </div>

          {/* Capacity */}
          <div className="text-center text-white space-y-4">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold tracking-[0.2em] uppercase">Capacity</h4>
            <div className="text-gray-400 space-y-1">
              <p>20 Tables</p>
              <p>12 Bar Seats</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="text-center text-white space-y-4">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-lg font-bold tracking-[0.2em] uppercase">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-24" preserveAspectRatio="none" viewBox="0 0 1000 100">
          <path d="M0 6V0h1000v100z" fill="#1d1d1d" />
        </svg>
      </div>
    </section>
  )
}
