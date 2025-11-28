"use client"

import { Card } from "@/components/ui/card"

export default function PricingSection() {
  const pricingPlans = [
    {
      id: 1,
      title: "Day Pass",
      price: "$10",
      period: "/ Day",
      features: [
        { name: "Complimentary Drink", included: true },
        { name: "Free Wifi", included: true },
        { name: "Special Discount", included: false },
        { name: "Lucky Draw", included: false },
        { name: "VIP Zone", included: false },
      ],
    },
    {
      id: 2,
      title: "Monthly Pass",
      price: "$39",
      period: "/ Month",
      features: [
        { name: "Complimentary Drink", included: true },
        { name: "Free Wifi", included: true },
        { name: "Special Discount", included: true },
        { name: "Lucky Draw", included: true },
        { name: "VIP Zone", included: false },
      ],
    },
    {
      id: 3,
      title: "Annual Pass",
      price: "$239",
      period: "/ Year",
      features: [
        { name: "Complimentary Drink", included: true },
        { name: "Free Wifi", included: true },
        { name: "Special Discount", included: true },
        { name: "Lucky Draw", included: true },
        { name: "VIP Zone", included: true },
      ],
    },
  ]

  return (
    <section id="pricing" className="py-32 bg-[#202020]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase mb-4">
            Become our member
          </h2>
          <div className="w-32 h-1 bg-white mx-auto" />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              className="bg-[#2a2a2a] border-0 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all"
            >
              {/* Header */}
              <div className="text-center py-8 border-b border-gray-700">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                  {plan.title}
                </h3>
              </div>

              {/* Price */}
              <div className="text-center py-8 border-b border-gray-700">
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl text-white font-bold mt-2">$</span>
                  <span className="text-6xl text-white font-bold">{plan.price.replace('$', '')}</span>
                </div>
                <span className="text-gray-400 text-lg">{plan.period}</span>
              </div>

              {/* Features */}
              <div className="px-8 py-10">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index}
                      className={`flex items-center gap-3 ${
                        feature.included ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {feature.included ? (
                        <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="text-base">{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
