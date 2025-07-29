"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  Shield 
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Campaigns",
    description: "Intelligent automation that learns from your audience and optimizes campaigns in real-time."
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience with advanced segmentation and behavioral analysis."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance with comprehensive dashboards and actionable insights."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Generate content and launch campaigns in minutes, not hours."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team using shared workspaces and permissions."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and data encryption."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container  px-5 md:px-5 lg:px-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 "
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to scale your marketing efforts with AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-light border-gray-200 hover:border-gray-300 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 