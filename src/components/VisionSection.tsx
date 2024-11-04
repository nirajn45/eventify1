'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faDiamond, faFlag, faStar } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export default function VisionSection() {
    const sections = [
        {
          title: "Our Vision",
          icon: faLightbulb,
          description: "At Eventify, our vision is to redefine event management by creating seamless, memorable experiences. We aim to be the go-to platform for all your event needs, turning ideas into unforgettable realities through creativity, innovation, and expertise.",
          delay: 0.2
        },
        {
          title: "Our Values",
          icon: faDiamond,
          description: "Our values—compassion, trust, quality, innovation, and integrity—are the foundation of our work. We believe in listening to our clients, delivering excellence, and constantly evolving to bring you modern, reliable, and unique event solutions.",
          delay: 0.4
        },
        {
          title: "Our Mission",
          icon: faFlag,
          description: "Our mission is to provide complete, stress-free event solutions that transform visions into reality. With a dedicated team and cutting-edge tools, we bring creativity and precision to every detail, ensuring every event is impactful and memorable.",
          delay: 0.6
        }
      ];
      
      

  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* Animated stars background */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        >
          <FontAwesomeIcon 
            icon={faStar} 
            className="text-white text-opacity-60 w-1 h-1"
          />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-start mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mb-4 ">
            Shaping the Future of Events
          </h2>
          <div className="w-24 h-1 bg-white mt-8 mb-12"></div>
        </motion.div>

        <div className="grid gap-16 md:gap-24">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: section.delay }}
              className="relative group"
            >
              <div className={`flex items-center gap-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className="w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-400 opacity-5 rounded-full blur-xl group-hover:opacity-70 transition-opacity duration-500"></div>
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon={section.icon} 
                        className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>
                </div>
                <div className="w-2/3">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text mb-4 group-hover:scale-105 transition-transform duration-300 origin-left">
                    {section.title}
                  </h3>
                  <p className="text-lg text-white text-opacity-80 leading-relaxed group-hover:text-opacity-100 transition-all duration-300">
                    {section.description}
                  </p>
                </div>
              </div>
              
              {/* Connecting line */}
              {index !== sections.length - 1 && (
                <div className="absolute left-1/3 top-full w-px h-16 bg-gradient-to-b from-white to-transparent opacity-20"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}