'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import img from '../components/about/image.png';

const MissionVission = () => {
  const MissionData = [
    {
      number: '1',
      title: 'Passionate Community Building',
      description: 'Our mission is to build a vibrant community of event organizers and participants, fostering relationships that transcend events and create lasting memories.'
    },
    {
      number: '2',
      title: 'Innovative Solutions',
      description: 'We are dedicated to developing innovative solutions that simplify event planning and execution, enabling organizers to focus on creating exceptional experiences.'
    },
    {
      number: '3',
      title: 'Unforgettable Experiences',
      description: 'Our goal is to craft unforgettable experiences that resonate with attendees, leaving them inspired and connected long after the event ends.'
    },
    {
      number: '4',
      title: 'Sustainable Practices',
      description: 'We strive to implement sustainable practices in all our events, promoting environmental responsibility and social impact within the industry.'
    }
  ];

  const VisionData = [
    {
      number: '1',
      title: 'Transforming Events',
      description: 'Our vision is to transform the event landscape by championing innovative approaches and setting new standards for excellence.'
    },
    {
      number: '2',
      title: 'Global Influence',
      description: 'We envision a world where our impact is felt globally, inspiring change and setting trends in event management and organization.'
    },
    {
      number: '3',
      title: 'Empowered Organizers',
      description: 'Our vision includes empowering event organizers with the tools, resources, and support they need to succeed in their endeavors.'
    },
    {
      number: '4',
      title: 'Inclusive Experiences',
      description: 'We are committed to creating inclusive events that celebrate diversity and provide opportunities for all participants to engage and thrive.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        when: "beforeChildren", 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const floatingShapes = Array(10).fill(null).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <div className="bg-white text-gray-800 min-h-screen relative overflow-hidden">
      {/* Animated background shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-10"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            background: `linear-gradient(45deg, #ff9602, #016db6)`,
          }}
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-20%', '20%', '-20%'],
            scale: [1, 0.6, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}

      <motion.div 
        className="container md:w-4/5 px-5 mx-auto py-12 flex flex-col md:flex-row relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="md:w-1/2 flex flex-col align-middle justify-center" variants={itemVariants}>
          <div className="flex mb-2 md:mb-5 items-center">
            <span className="border-l-2 border-[#ff9602] h-6 mr-3"></span>
            <h1 className="text-lg font-bold">OUR PHILOSOPHY</h1>
          </div>
          <h1 className="text-lg md:text-3xl font-semibold mb-8">Our principles and <span className='text-[#016db6] text-4xl md:text-7xl md:py-3 block'> convictions</span></h1>
          <p className='text-justify'>To become a leading global event management platform, we are committed to revolutionizing the event industry, nurturing creative minds and innovators, and advancing knowledge for society and businesses. Our goal is to create extraordinary experiences across various event types, shaping the future of gatherings worldwide.</p>
        </motion.div>
        <motion.div 
          className="md:w-1/2 h-96 hidden md:block" 
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image className='object-contain' src={img} alt="Mission and Vision" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="md:flex items-center md:pt-7" variants={itemVariants}>
          <div className="md:w-1/3 h-full flex justify-center pb-7 md:pb-0 ">
            <motion.h1 
              className='md:text-5xl text-2xl font-semibold'
              whileHover={{ scale: 0.4 }}
              transition={{ type: "spring", stiffness: 300 }}
            > 
              Our Passion
            </motion.h1>
          </div>
          <div className="md:w-2/3">
            <div className="container px-5 mx-auto flex flex-wrap">
              {MissionData.map((item, index) => (
                <motion.div 
                  key={item.number} 
                  className="flex relative py-3 sm:items-center md:w-2/3 mx-auto" 
                  variants={itemVariants}
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">{item.number}</div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-10 h-10 text-[#ff9602] bg-gray-200 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-2 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-md">{item.title}</h2>
                      <p className="leading-relaxed text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="container md:w-4/5 px-5 md:px-0 mx-auto pb-24 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:flex-row flex flex-col-reverse items-center justify-center ">
          <div className="md:w-2/3">
            <div className="container mx-auto flex flex-wrap">
              {VisionData.map((item, index) => (
                <motion.div 
                  key={item.number} 
                  className="flex relative py-3 sm:items-center md:w-2/3 mx-auto" 
                  variants={itemVariants}
                  whileHover={{ x: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#ff9602] text-white relative z-10 title-font font-medium text-sm">{item.number}</div>
                  <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-10 h-10 text-[#ff9602] bg-gray-200 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:pl-6 mt-2 sm:mt-0">
                      <h2 className="font-medium title-font text-gray-900 mb-1 text-md">{item.title}</h2>
                      <p className="leading-relaxed text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center pb-7 md:pb-0">
            <motion.h1 
              className='md:text-5xl text-2xl font-semibold'
              whileHover={{ scale: 0.4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              APPROACH
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionVission;
