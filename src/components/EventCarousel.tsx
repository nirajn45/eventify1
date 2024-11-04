"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
// import { faLightbulb, faDiamond, faFlag, faStar } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import events from '@/data/event';
import Link from 'next/link';

interface EventCardProps {
  index: number;
  imageSrc: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ index, imageSrc, description }) => (
  <div className={`event-card w-full rounded-lg md:py-8 flex flex-wrap ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
    <img src={imageSrc} alt="Event" className="w-full md:w-1/2 rounded-lg" />
    <div className="w-full py-3 md:w-1/2 flex items-center md:p-4">
      <p className="text-white text-sm md:text-lg border-l-4 pl-4 border-[#fea700]">{description}</p>
    </div>
  </div>
);

interface EventData {
  headerImage: string;
  name: string;
  overview: string;
  date: string;
  id: number;
}

const EventCarousel: React.FC = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <div className="w-full h-auto md:h-[100vh] flex justify-center items-center bg-black text-white py-10 overflow-hidden">
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
      icon={faFire} // Replace with your chosen icon
      className="text-yellow-500 text-opacity-60 w-2 h-2" // Adjust size and color
    />
  </motion.div>
))}
        <div className="w-10/12 py-6 flex flex-col flex-wrap-reverse md:flex-row">
          <div className="w-full lg:w-2/3">
            <Slider {...settings} className="w-full py-8 md:py-12">
              {events.map((event: EventData, index: number) => (
                <div key={index} className="w-[95%] mx-auto px-2 h-full">
                  <div className="event-card rounded-md shadow-md bg-white text-[#00112d] h-[60vh] flex flex-col justify-between">
                    <div
                      className="image-section h-1/2"
                      style={{
                        backgroundImage: `url(${event.headerImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                    <div className="text-section my-auto p-6 h-1/2 flex flex-col justify-between">
                      <div>
                        <p className="text-lg md:text-xl font-semibold mb-3">{event.name}</p>
                        <p className="text-sm md:text-md pb-6 line-clamp-4 text-justify">{event.overview}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm font-semibold text-[#fea700]">{event.date}</p>
                        <Link href={`/events/${event.id}`}>
                          <button className="rounded-md bg-[#fea700] text-white p-2 h-7 w-7 flex justify-center items-center">
                            <i className="fa fa-arrow-right" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="text-start w-full lg:w-1/3 flex flex-col lg:pl-16 justify-center md:p-6">
            <h1 className="lg:text-5xl text-3xl font-normal mb-4">Events & Happenings</h1>
            <p className="text-xl pb-4 font-semibold">
              Immerse Yourself in a Vibrant Tapestry of Campus Life, Where Every Moment Counts!
            </p>
            <p className="mb-4 text-justify">
              Our events showcase the spirit of innovation, collaboration, and excellence, nurturing talents and fostering growth in a dynamic learning environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
