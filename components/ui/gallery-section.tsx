"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ScrollAnimation from "./scroll-animation"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800",
      category: "The Farm",
      title: "Ketama Mountain Terroir"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
      category: "The Farm",
      title: "Sunrise Over the Fields"
    },
    {
      src: "https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=800",
      category: "The Farm",
      title: "Traditional Cultivation"
    },
    {
      src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800",
      category: "Flower",
      title: "Beldia Landrace Buds"
    },
    {
      src: "https://images.unsplash.com/photo-1607546281744-5ee1d88f63e1?q=80&w=800",
      category: "Flower",
      title: "Trichome Close-Up"
    },
    {
      src: "https://images.unsplash.com/photo-1587975630812-0bdbdc2f5e0e?q=80&w=800",
      category: "Flower",
      title: "Hand-Trimmed Premium"
    },
  {
      src: "https://images.unsplash.com/photo-1598968359878-31d91faa3c1a?q=80&w=800",
      category: "Drying Room",
      title: "Climate-Controlled Drying"
    },
    {
      src: "https://images.unsplash.com/photo-1612165734502-0e813f422e28?q=80&w=800",
      category: "Drying Room",
      title: "Quality Inspection"
    },
  ]

  return (
    <section id="gallery" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/85" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <ScrollAnimation direction="fade" className="text-center text-white mb-16">
            <span className="text-emerald-400 text-sm font-semibold tracking-[0.3em] uppercase">
              Behind the Scenes
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              <span className="text-emerald-400">Gallery</span>
            </h2>
            <div className="w-32 h-1 bg-emerald-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness the journey from mountain slopes to premium flower
            </p>
          </ScrollAnimation>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedImage(image.src)}
                className="group relative aspect-[4/5] rounded-lg overflow-hidden cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider block mb-1">
                      {image.category}
                    </span>
                    <h3 className="text-sm font-bold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full image */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl hover:text-emerald-400 transition-colors"
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  )
}
