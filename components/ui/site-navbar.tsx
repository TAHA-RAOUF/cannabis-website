"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-10 py-6 text-white backdrop-blur-sm bg-black/20">
        <div className="text-2xl font-extrabold tracking-[0.25em]">
          KETAMA BELDIA
        </div>

        {/* burger button with animation */}
        <motion.button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1.5 hover:opacity-70 transition-opacity"
          aria-label="Open menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            className="h-[2px] w-7 bg-white"
            animate={{ width: open ? 0 : 28 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span 
            className="h-[2px] w-7 bg-white"
            animate={{ width: open ? 0 : 28 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.span 
            className="h-[2px] w-7 bg-white"
            animate={{ width: open ? 0 : 28 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
        </motion.button>
      </header>

      {/* fullscreen overlay menu with animations */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
          >
            {/* background image + dark layer */}
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000')" }}
            />
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* close button with animation */}
            <motion.button
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(false)}
              className="absolute top-10 right-10 z-50 text-5xl text-white hover:text-emerald-400 transition-colors"
              aria-label="Close menu"
            >
              ×
            </motion.button>

            {/* menu items with staggered animation */}
            <nav className="relative z-40 flex h-full flex-col items-center justify-center gap-2 text-white">
              {[
                { href: "#main", label: "HOME" },
                { href: "#story", label: "OUR STORY" },
                { href: "#farm", label: "THE FARM" },
                { href: "#strains", label: "STRAINS" },
                { href: "#process", label: "OUR PROCESS" },
                { href: "#gallery", label: "GALLERY" },
                { href: "#contact", label: "CONTACT" },
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="w-full max-w-md border-t border-white/20 py-6 text-center text-lg tracking-[0.35em] hover:text-emerald-400 hover:bg-white/5 transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="w-full max-w-md border-t border-white/20" 
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
