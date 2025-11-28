"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Charlotte Figi, CBD pioneer and 'Charlotte's Web' namesake",
      date: "April 9, 2019",
      tags: ["Article", "Health"],
      image: "https://images.unsplash.com/photo-1607546281744-5ee1d88f63e1?q=80&w=800",
    },
    {
      id: 2,
      title: "How to grow marijuana outdoors: a beginner's guide",
      date: "April 7, 2019",
      tags: ["Cannabis", "Updates"],
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    },
    {
      id: 3,
      title: "Troubleshooting common mistakes in marijuana growing",
      date: "April 7, 2019",
      tags: ["News", "Science"],
      image: "https://images.unsplash.com/photo-1585382325916-4a299a34e1c6?q=80&w=800",
    },
  ]

  return (
    <section 
      id="blog" 
      className="relative py-32 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase mb-4">
            Latest News
          </h2>
          <div className="w-32 h-1 bg-white mx-auto" />
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="bg-black/50 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer hover:bg-black/70 transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex flex-wrap gap-2 text-xs text-emerald-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {post.date}
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    {post.tags.join(", ")}
                  </span>
                </div>
                <h3 className="text-white text-xl font-bold line-clamp-2 group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Read More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-emerald-500 hover:border-emerald-500 transition-all px-12 py-6 text-sm tracking-[0.2em] uppercase font-bold"
          >
            Read All Articles
          </Button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container relative z-10 mx-auto px-6 mt-20">
        <div 
          className="relative max-w-2xl mx-auto p-12 md:p-16 text-center overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1585382325916-4a299a34e1c6?q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-12 border-2 border-gray-600/50" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-white text-2xl font-bold tracking-[0.25em] uppercase">
              Subscribe to newsletter
            </h3>
            <div className="w-32 h-1 bg-white mx-auto" />
            <p className="text-gray-300 text-lg">
              Get updates about our company and related news about cannabis. Get exclusive access when we launch new products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-6">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder:text-gray-400 px-6 py-3 focus:outline-none focus:border-emerald-400"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 font-bold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
