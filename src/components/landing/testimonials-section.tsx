"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "ADmyBRAND AI Suite transformed our marketing. We saw a 300% increase in ROI within the first quarter.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "/avatars/sarah.jpg"
  },
  {
    quote: "The AI-powered content generation saves us hours every week. The quality is consistently excellent.",
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "/avatars/michael.jpg"
  },
  {
    quote: "Finally, a marketing platform that actually understands our business and delivers results.",
    name: "Emily Rodriguez",
    role: "VP of Growth",
    company: "ScaleUp Solutions",
    avatar: "/avatars/emily.jpg"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-r from-indigo-100 via-sky-100 to-purple-50">
      <div className="container px-5 md:px-4 lg:px-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-md md:text-xl lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses already using ADmyBRAND AI Suite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className=" bg-gray-600 border-white/10 hover:border-white/20 transition-all duration-300 h-full ">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <blockquote className="text-gray-300 mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-200">{testimonial.role}</div>
                        <div className="text-sm text-gray-400">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 