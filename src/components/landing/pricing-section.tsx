"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 campaigns",
      "Basic AI content generation",
      "Email support",
      "Analytics dashboard",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$99",
    description: "Best for growing businesses",
    features: [
      "Unlimited campaigns",
      "Advanced AI features",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "Custom integrations",
      "A/B testing",
      "White-label options"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI training",
      "SLA guarantees",
      "On-premise deployment",
      "Advanced security",
      "Custom reporting",
      "24/7 phone support"
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container px-5 md:px-3 lg:px-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-md md:text-xl lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`glass-light border-gray-200 hover:border-gray-300 transition-all duration-300 h-full relative flex flex-col justify-between ${
                plan.popular ? 'border-purple-500/50 ring-2 ring-purple-500/20' : ''
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500">
                    Most Popular
                  </Badge>
                )}
                <div>

                
                <CardHeader className="text-center">
                  <CardTitle className="text-gray-900 text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-500">/month</span>}
                  </div>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                </div>
                  <CardFooter className="">

                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-purple-500 to-blue-500 font-extrabold hover:from-purple-600 hover:to-blue-600' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 