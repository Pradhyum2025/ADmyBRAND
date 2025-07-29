"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, Maximize, Settings, Zap, TrendingUp, Users } from "lucide-react"

export function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Watch how our AI automatically optimizes campaigns in real-time"
    },
    {
      icon: TrendingUp,
      title: "Real-time Analytics",
      description: "See live performance metrics and insights as they happen"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experience seamless team workflows and communication"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container px-5 md:px-5 lg:px-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500">
            Product Demo
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            See ADmyBRAND AI in Action
          </h2>
          <p className="text-md md:text-xl lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our comprehensive demo to see how AI transforms your marketing workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="glass-light overflow-hidden">
              <CardContent className="p-0">
                {/* Video Placeholder */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 h-80 lg:h-96">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                      <p className="text-white/80 text-sm">Demo Video Coming Soon</p>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Volume2 className="w-4 h-4 text-white/70" />
                          <div className="w-16 h-1 bg-white/30 rounded-full">
                            <div className="w-8 h-1 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="text-white/70 hover:bg-white/20">
                          <Settings className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white/70 hover:bg-white/20">
                          <Maximize className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="w-full h-1 bg-white/30 rounded-full">
                        <div 
                          className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
                          style={{ width: `${currentTime}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-light hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-light border-2 border-purple-200">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Book a personalized demo with our team
                  </p>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    Schedule Demo
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Video Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="glass-light">
            <CardHeader className="px-4 md:px-6 lg:px-8">
              <CardTitle className="text-gray-900 text-lg">Demo Timeline</CardTitle>
              <CardDescription className="text-gray-600">
                Key moments in our product demonstration
              </CardDescription>
            </CardHeader>
            <CardContent className="px-3 md:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { time: "0:00", title: "Introduction", desc: "Platform overview" },
                  { time: "2:30", title: "AI Campaign Setup", desc: "Automated workflow" },
                  { time: "5:15", title: "Real-time Analytics", desc: "Performance tracking" },
                  { time: "8:45", title: "Results & ROI", desc: "Success metrics" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
                    <div className="text-lg font-semibold text-purple-600 mb-1">{item.time}</div>
                    <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 