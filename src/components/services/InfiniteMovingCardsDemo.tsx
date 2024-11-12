"use client";

import { motion } from 'framer-motion'
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-gray-900 items-center justify-center relative overflow-hidden bg-grid-white">
        <div className='mx-36'>
        <div className="flex items-center mb-6 ">
                <span className="border-l-2 border-[#ffc23e] h-4 mr-2"></span>
                <h1 className="text-base font-semibold text-[#ffd138]">Request Process</h1>
              </div>
              <h3 className="text-3xl font-semibold mb-8 text-gray-200">How the Process Going On</h3>
              <p className="text-gray-400 mb-12 text-sm text-justify ">
                Our extensive reach ensures your scholarships get maximum visibility amongst deserving students across India.
                Our extensive reach ensures your scholarships get maximum visibility amongst deserving students across India.
                Our extensive reach ensures your scholarships get maximum visibility amongst deserving students across India.
              </p>
        </div>
        
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
