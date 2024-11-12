"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

export function SparklesPreview() {
  return (
    <div
      className="h-[50rem] w-full flex flex-col pl-36 justify-center overflow-hidden rounded-md pt-40 relative"
      style={{
        backgroundImage: "url('https://utfs.io/f/nsz3ps3WUZRLnceoaUWUZRLxg8CPmpyfFNEQwS6cHos14u0G')", // Replace with your Uploadthing image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold  text-white relative z-30 ">
        Eventify
      </h1>
      <div className="w-[30rem] h-52 relative z-20">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full "
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
