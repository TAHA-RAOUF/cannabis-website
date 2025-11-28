"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    guests: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section 
      id="reservation" 
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 mx-auto px-6 max-w-3xl">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase mb-4">
            Reserve your seat
          </h2>
          <div className="w-32 h-1 bg-white mx-auto mb-6" />
          <p className="text-lg text-gray-300">
            Shot us a message or call us +1-9988-3465
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              name="firstName"
              placeholder="Name*"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-gray-400 rounded-none focus:border-emerald-400 focus:ring-0 px-0 py-3"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-gray-400 rounded-none focus:border-emerald-400 focus:ring-0 px-0 py-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="tel"
              name="phone"
              placeholder="Phone*"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-gray-400 rounded-none focus:border-emerald-400 focus:ring-0 px-0 py-3"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-gray-400 rounded-none focus:border-emerald-400 focus:ring-0 px-0 py-3"
            />
          </div>

          <Input
            type="text"
            name="guests"
            placeholder="Number of guests*"
            value={formData.guests}
            onChange={handleChange}
            required
            className="bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-gray-400 rounded-none focus:border-emerald-400 focus:ring-0 px-0 py-3"
          />

          <Textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-transparent border-0 border-b-2 border-white/30 text-white placeholder:text-gray-400 rounded-none focus:border-emerald-400 focus:ring-0 px-0 py-3 resize-none"
          />

          <div className="text-center pt-6">
            <Button
              type="submit"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all px-12 py-6 text-sm tracking-[0.2em] uppercase font-bold"
            >
              Book Now
            </Button>
          </div>
        </form>
      </div>

      {/* Shape Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg className="relative block w-full h-24" preserveAspectRatio="none" viewBox="0 0 1000 100">
          <path d="M0 6V0h1000v100z" fill="#101010" />
        </svg>
      </div>
    </section>
  )
}
