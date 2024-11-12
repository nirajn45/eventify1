"use client";

import { HoverEffect } from "./ui/card-hover-effect";
import { FaUniversity, FaBriefcase, FaMusic, FaMicrophone, FaPeopleArrows, FaHandshake } from "react-icons/fa";

export function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-28 bg-black min-h-[40rem]">
        <div className='pt-24 pl-8'>
        <div className="flex items-center mb-6 ">
                <span className="border-l-2 border-[#ffc23e] h-4 mr-2"></span>
                <h1 className="text-base font-semibold text-[#ffd138]">Request Process</h1>
              </div>
              <h3 className="text-3xl font-semibold mb-8 text-gray-200">How the Process Going On</h3>
              </div>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "College Fest Management",
    description:
      "End-to-end management of college fests, including scheduling, vendor coordination, and crowd control.",
    link: "https://youreventsite.com/college-fest-management",
    icon: <FaUniversity />
  },
  {
    title: "Corporate Conferences",
    description:
      "Professional handling of corporate conferences with advanced AV setups, seating arrangements, and attendee coordination.",
    link: "https://youreventsite.com/corporate-conferences",
    icon: <FaBriefcase />
  },
  {
    title: "Music Concerts",
    description:
      "Complete concert management from artist coordination to stage setup, sound systems, and security.",
    link: "https://youreventsite.com/music-concerts",
    icon: <FaMusic />
  },
  {
    title: "Stand-Up Comedy Shows",
    description:
      "Organizing stand-up comedy shows with seamless venue setup, ticketing, and audience engagement.",
    link: "https://youreventsite.com/standup-comedy",
    icon: <FaMicrophone />
  },
  {
    title: "Networking Events",
    description:
      "Facilitating networking events with ambiance management, interactive spaces, and guest facilitation.",
    link: "https://youreventsite.com/networking-events",
    icon: <FaPeopleArrows />
  },
  {
    title: "Corporate Team Building",
    description:
      "Planning and executing team-building activities that foster cooperation and teamwork among employees.",
    link: "https://youreventsite.com/team-building",
    icon: <FaHandshake />
  },
];
