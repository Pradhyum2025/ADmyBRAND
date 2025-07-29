"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BookOpen, Calendar, User, ArrowRight, TrendingUp, Lightbulb, Target } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 AI Marketing Strategies That Actually Work in 2024",
    excerpt: "Discover the most effective AI-powered marketing strategies that are driving real results for businesses this year.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Strategy",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "How to Automate Your Email Marketing with AI",
    excerpt: "Learn how to set up intelligent email automation that converts subscribers into customers automatically.",
    author: "Mike Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Automation",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "The Future of Social Media Marketing: AI Trends to Watch",
    excerpt: "Explore the emerging AI trends that will shape social media marketing in the coming years.",
    author: "Emily Rodriguez",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Trends",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Building High-Converting Landing Pages with AI",
    excerpt: "Step-by-step guide to creating landing pages that convert using AI-powered optimization.",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "Conversion",
    image: "/api/placeholder/400/250"
  }
]

const categories = [
  { name: "Strategy", icon: Target, count: 12 },
  { name: "Automation", icon: TrendingUp, count: 8 },
  { name: "AI Tips", icon: Lightbulb, count: 15 },
  { name: "Case Studies", icon: BookOpen, count: 6 }
]

export function BlogSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container px-5 md:px-5 lg:px-[2rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500">
            Resources & Insights
          </Badge>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Resources
          </h2>
          <p className="text-md md:text-xl lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead with our expert insights on AI marketing, automation, and growth strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="glass-light overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/80" />
                </div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                  Featured
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <CardTitle className="text-xl text-gray-900 hover:text-green-600 transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {blogPosts[0].excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {blogPosts.slice(1, 4).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-light hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="w-3 h-3 text-gray-500" />
                            <span className="text-xs text-gray-600">{post.author}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 text-xs">
                            Read <ArrowRight className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <Card className="glass-light">
            <CardHeader>
              <CardTitle className="text-gray-900 text-lg">Browse by Category</CardTitle>
              <CardDescription className="text-gray-600">
                Find content that matches your interests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="glass-light hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-green-200 h-full">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-3">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                        <p className="text-sm text-gray-600">{category.count} articles</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="glass-light border-2 border-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest AI marketing insights, tips, and case studies delivered to your inbox weekly.
              </p>
              <div className="flex flex-col md:items-center sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 