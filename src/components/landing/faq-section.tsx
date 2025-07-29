"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI analyzes your brand voice, target audience, and campaign goals to generate personalized content that resonates with your customers. It learns from your feedback and continuously improves over time."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! ADmyBRAND AI Suite integrates with popular platforms like HubSpot, Mailchimp, Google Ads, Facebook Ads, and many more. We also offer custom API integrations for enterprise customers."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including email support for all plans, priority support for Pro users, and dedicated account management for Enterprise customers. We also provide extensive documentation and video tutorials."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, SOC 2 compliance, and follow GDPR guidelines. Your data is never shared with third parties and you maintain full ownership of all generated content."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no penalties. You'll continue to have access to your account until the end of your billing period."
  }
]

export function FAQSection() {
  return (
    <section className="py-24 bg-white h-full relative ">
      <div className="container  max-w-4xl mx-auto px-5 md:px-3 lg:px-[2rem] relative z-20 pb-[9rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-md md:text-xl lg:text-lg text-gray-600">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-light border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
      <div className="absolute bottom-0 w-full z-10">

      <svg  width="100%" height="100%" id="svg" viewBox="0 0 1440 310" xmlns="http://www.w3.org/2000/svg" className="transition duration-300  ease-in-out delay-150 "><defs><linearGradient id="gradient" x1="97%" y1="67%" x2="3%" y2="33%"><stop offset="5%" stop-color="#2f5cb0ff"></stop><stop offset="95%" stop-color="#bc8dd1ff"></stop></linearGradient></defs><path d="M 0,400 L 0,150 C 80.45933014354068,111.25358851674642 160.91866028708137,72.50717703349282 249,81 C 337.08133971291863,89.49282296650718 432.7846889952152,145.2248803827751 535,186 C 637.2153110047848,226.7751196172249 745.9425837320576,252.59330143540672 849,220 C 952.0574162679424,187.40669856459328 1049.444976076555,96.40191387559808 1147,75 C 1244.555023923445,53.59808612440192 1342.2775119617227,101.79904306220095 1440,150 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      </div>
    </section>
  )
} 