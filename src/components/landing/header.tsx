"use client"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Router from "next/router"
export function Header() {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full  shadow-lg border-border/40 bg-gray-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" flex items-center justify-between  md:justify-around h-16 px-2 md:px-0">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600" />
          <a href="#hero" className="text-md text-gray-900 font-semibold">ADmyBRAND</a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-gray-900">
          <a href="#features" className="text-sm font-medium transition-colors hover:text-indigo-500">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium transition-colors hover:text-indigo-500">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-indigo-500">
            Testimonials
          </a>
        </nav>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="outline" size="sm" className=" hover:text-gray-100 font-bold hover:scale-[1.02] transition-transform duration-500 delay-100 hover:bg-gray-900">
            Sign In
          </Button>
          <Button size={'sm'} variant="outline" className="px-1 py-0  hover:text-gray-100 font-bold hover:scale-[1.02] transition-transform duration-500 delay-100 hover:bg-gray-900  block md:hidden">
            <Menu className="w-7 h-6" />
          </Button>
            <Button variant="outline" size="sm" className=" hover:text-gray-100 font-bold hover:scale-[1.02] transition-transform duration-500 delay-100 hover:bg-gray-900 md:block hidden">
            Get Started
          </Button>
          
        </div>
      </div>
    </motion.header>
  )
} 