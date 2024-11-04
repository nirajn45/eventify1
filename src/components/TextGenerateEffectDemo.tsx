"use client"

import { TextGenerateEffect } from "./ui/text-generate-effect"

const words = `Welcome to Eventify, a state-of-the-art event management platform designed to transform your ideas into unforgettable experiences. Our innovative platform seamlessly connects event organizers, attendees, and vendors from across the globe, creating a dynamic ecosystem of endless possibilities. With cutting-edge tools and intuitive features, we're revolutionizing the way events are planned, managed, and experienced.
Our innovative platform seamlessly connects event organizers, attendees, and vendors from across the globe, creating a dynamic ecosystem of endless possibilities.`

export function TextGenerateEffectDemo() {
  return (
    <div className="w-1/2 mx-auto px-4 py-16">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            About
          </span>
        </h1>
        <h2 className="text-4xl font-bold mb-8 text-gray-500 dark:text-white">
          The Eventify Platform
        </h2>
        <div className="prose prose-lg dark:prose-invert ">
          <TextGenerateEffect 
            words={words} 
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
          />
        </div>
        
      </div>
    </div>
  )
}