"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ScrollAnimation from "./scroll-animation"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    quantity: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const whatsappNumber = "+212612345678" // Replace with actual number
  const whatsappMessage = "Hello! I'm interested in learning more about Ketama Beldia."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536964310528-e47dd655ecf3?w=1920')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <ScrollAnimation direction="fade" delay={0.1}>
            <div className="text-center text-white mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6 uppercase tracking-wider">
                CONTACT US
              </h2>
              <div className="w-32 h-0.5 bg-white mx-auto mb-8" />
              <p className="text-lg text-gray-300">
                Shot us a message or call us +1-9988-3465
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Form - Centered */}
          <ScrollAnimation direction="up" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder:text-gray-400 focus:border-white rounded-none px-0 pb-3 text-base"
                    placeholder="Name*"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder:text-gray-400 focus:border-white rounded-none px-0 pb-3 text-base"
                    placeholder="Last name*"
                  />
                </div>
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder:text-gray-400 focus:border-white rounded-none px-0 pb-3 text-base"
                    placeholder="Phone*"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder:text-gray-400 focus:border-white rounded-none px-0 pb-3 text-base"
                    placeholder="Email*"
                  />
                </div>
              </div>

              {/* Number of Guests / Quantity */}
              <div>
                <Input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder:text-gray-400 focus:border-white rounded-none px-0 pb-3 text-base"
                  placeholder="Quantity/Order Size*"
                />
              </div>

              {/* Message */}
              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-0 border-b-2 border-white/40 text-white placeholder:text-gray-400 focus:border-white rounded-none px-0 pb-3 text-base resize-none"
                  placeholder="Message*"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  className="bg-transparent hover:bg-white/10 text-white font-normal py-3 px-12 rounded-none border-2 border-white transition-all uppercase tracking-widest text-sm"
                >
                  BOOK NOW
                </Button>
              </div>
            </form>
          </ScrollAnimation>

          {/* WhatsApp CTA */}
          <ScrollAnimation direction="fade" delay={0.3}>
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-6 text-sm">
                For wholesale inquiries or immediate assistance
              </p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-normal py-3 px-8 rounded transition-colors inline-flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Contact via WhatsApp
                </Button>
              </a>
              <p className="text-gray-400 mt-8 text-sm">
                info@ketamabeldia.com | Ketama, Rif Mountains, Morocco
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
