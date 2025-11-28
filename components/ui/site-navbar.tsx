"use client"

import { useState } from "react"
import Link from "next/link"

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

        {/* burger button */}
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col gap-1.5 hover:opacity-70 transition-opacity"
          aria-label="Open menu"
        >
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
          <span className="h-[2px] w-7 bg-white" />
        </button>
      </header>

      {/* fullscreen overlay menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* background image + dark layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-10 right-10 z-50 text-5xl text-white hover:text-emerald-400 transition-colors"
          aria-label="Close menu"
        >
          ×
        </button>

        {/* menu items */}
        <nav className="relative z-40 flex h-full flex-col items-center justify-center gap-2 text-white">
          {[
            { href: "#main", label: "HOME" },
            { href: "#story", label: "OUR STORY" },
            { href: "#farm", label: "THE FARM" },
            { href: "#strains", label: "STRAINS" },
            { href: "#process", label: "OUR PROCESS" },
            { href: "#gallery", label: "GALLERY" },
            { href: "#contact", label: "CONTACT" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="w-full max-w-md border-t border-white/20 py-6 text-center text-lg tracking-[0.35em] hover:text-emerald-400 hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="w-full max-w-md border-t border-white/20" />
        </nav>
      </div>
    </>
  )
}
