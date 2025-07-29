"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-pink-50" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23636f6b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container px-2 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl  xl:text-5xl 2xl:text-[3.2rem] font-bold text-gray-900 mb-6">
            Unlock Next-Level Marketing with {" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-md md:text-xl lg:text-lg  text-gray-600 mb-8 max-w-3xl mx-auto">
            ADmyBRAND AI Suite provides intelligent tools to automate campaigns, generate content, and deliver unparalleled ROI.
          </p>
          
           <div className="flex flex-row sm:flex-row gap-4 justify-center items-center mx-2">
            <Button variant="outline" size="lg" className="text-md px-5 md:px-8 py-6   text-gray-100 font-extrabold hover:scale-[1.02] hover:font-bold  duration-500 delay-200 ">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-md px-5 md:px-8 py-6 hover:bg-gray-900 hover:text-gray-50 font-semibold hover:scale-[1.02] transition-transform duration-500 delay-100">
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
} 