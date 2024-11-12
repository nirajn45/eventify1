"use client"

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "The attention to detail and seamless execution of our corporate conference was outstanding. Every aspect was handled with utmost professionalism. The attention to detail and seamless execution of our corporate conference was outstanding. Every aspect was handled with utmost professionalism.",
    author: "Sarah Mitchell",
    title: "CEO, TechCorp Solutions",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "From concept to execution, they transformed our vision into reality. The interactive elements and engagement levels exceeded our expectations. The attention to detail and seamless execution of our corporate conference was outstanding. Every aspect was handled with utmost professionalism.",
    author: "James Wilson",
    title: "Marketing Director, Innovation Hub",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "The virtual component integration was flawless. They truly understand how to create hybrid events that connect people globally. The attention to detail and seamless execution of our corporate conference was outstanding. Every aspect was handled with utmost professionalism.",
    author: "Emily Rodriguez",
    title: "Events Manager, Global Connect",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "Their creative approach to our product launch event created an unforgettable experience for all attendees. Highly recommended! The attention to detail and seamless execution of our corporate conference was outstanding. Every aspect was handled with utmost professionalism.",
    author: "Michael Chang",
    title: "Product Lead, NextGen Devices",
    image: "/placeholder.svg?height=40&width=40"
  },
  {
    quote: "The way they handled our international conference with multiple time zones and cultural considerations was impressive. The attention to detail and seamless execution of our corporate conference was outstanding. Every aspect was handled with utmost professionalism.",
    author: "Lisa Anderson",
    title: "Operations Director, WorldEvents",
    image: "/placeholder.svg?height=40&width=40"
  }
]

export default function TestimonialsSection() {
  return (
    <div className='w-full'>
    <div className="relative min-h-[40rem] w-full overflow-hidden bg-black">
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/10"
          style={{
            width: Math.random() * 100 - 70,
            height: Math.random() * 100 - 70,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 80],
            y: [0, Math.random() * 100 - 80],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="relative z-10 py-24">
        <motion.h2 
          className=" text-3xl font-bold text-white mb-12 lg:ml-36 border-spacing-3 border-l-2 border-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black z-10" />
          
          <motion.div 
            className="flex gap-6 px-20"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <Card key={idx} className="flex-shrink-0 w-[500px] min-h-[250px] bg-gray-900/50 backdrop-blur border-gray-800 ">
                <motion.div 
                  className="p-6 "
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed text-justify">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center  gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-medium">{testimonial.author}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  )
}