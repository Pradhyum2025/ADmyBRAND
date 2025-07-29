"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calculator, Users, Zap, TrendingUp } from "lucide-react"

export function InteractivePricingCalculator() {
  const [teamSize, setTeamSize] = useState(5)
  const [campaigns, setCampaigns] = useState(10)
  const [features, setFeatures] = useState<string[]>(['basic'])

  const calculatePrice = () => {
    let basePrice = 29
    if (teamSize > 10) basePrice = 99
    if (teamSize > 50) basePrice = 299
    
    const campaignMultiplier = Math.ceil(campaigns / 10) * 0.1
    const featureMultiplier = features.length * 0.2
    
    return Math.round(basePrice * (1 + campaignMultiplier + featureMultiplier))
  }

  const addFeature = (feature: string) => {
    if (!features.includes(feature)) {
      setFeatures([...features, feature])
    }
  }

  const removeFeature = (feature: string) => {
    setFeatures(features.filter(f => f !== feature))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-5 md:px-5 lg:px-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Calculator className="w-12 h-12 text-indigo-600" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Pricing Calculator
          </h2>
          <p className="text-md md:text-xl lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Customize your plan and see real-time pricing based on your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {/* Calculator Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-light">
              <CardHeader>
                <CardTitle className="text-gray-900">Configure Your Plan</CardTitle>
                <CardDescription className="text-gray-600">
                  Adjust the settings below to see how pricing changes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Team Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Team Size: {teamSize} people
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Campaigns */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Campaigns: {campaigns}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={campaigns}
                    onChange={(e) => setCampaigns(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                    <span>100</span>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Additional Features
                  </label>
                  <div className="space-y-2">
                    {[
                      { id: 'advanced-ai', label: 'Advanced AI', icon: Zap },
                      { id: 'analytics', label: 'Advanced Analytics', icon: TrendingUp },
                      { id: 'team-collab', label: 'Team Collaboration', icon: Users }
                    ].map((feature) => (
                      <div key={feature.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center">
                          <feature.icon className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-700">{feature.label}</span>
                        </div>
                        <Button
                          size="sm"
                          
                          variant={features.includes(feature.id) ? "default" : "outline"}
                          onClick={() => features.includes(feature.id) 
                            ? removeFeature(feature.id) 
                            : addFeature(feature.id)
                          }
                          className="text-xs text-gray-900 bg-gradient-to-r from-indigo-100 to-purple-100 border-0"
                        >
                          {features.includes(feature.id) ? 'Remove' : <span className="text-indigo-600">Add</span>}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Price Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-light border-2 border-indigo-200">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto bg-gradient-to-r from-indigo-500 to-purple-500">
                  Your Custom Plan
                </Badge>
                <CardTitle className="text-gray-900 text-3xl mt-4">
                  ${calculatePrice()}
                  <span className="text-lg text-gray-500 font-normal">/month</span>
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Estimated based on your configuration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Team Size</span>
                    <span className="font-medium text-gray-900">{teamSize} people</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Campaigns</span>
                    <span className="font-medium text-gray-900">{campaigns} per month</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-600">Features</span>
                    <span className="font-medium text-gray-900">{features.length} selected</span>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500">
                      Get Started with This Plan
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 