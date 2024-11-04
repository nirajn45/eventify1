'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faPeopleGroup, faAward, faClock } from '@fortawesome/free-solid-svg-icons'

type TimelineItem = {
  year: string
  title: string
  description: string
  icon: typeof faCalendarCheck
}

export default function WhyChooseUsTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineItems: TimelineItem[] = [
    {
      year: '2018',
      title: 'Streamlined Planning',
      description: 'Launch of our intuitive event planning platform, simplifying the entire process.',
      icon: faCalendarCheck,
    },
    {
      year: '2020',
      title: 'Expanded Network',
      description: 'Built a vast network of pre-vetted vendors, saving you time and ensuring quality.',
      icon: faPeopleGroup,
    },
    {
      year: '2022',
      title: 'Award-Winning Service',
      description: 'Recognized for excellence with over 1000+ successful events and counting.',
      icon: faAward,
    },
    {
      year: '2024',
      title: '24/7 Support',
      description: 'Introduced round-the-clock dedicated support for seamless event execution.',
      icon: faClock,
    },
  ]

  return (
    <section className="w-full py-4 md:py-8 lg:py-10 ">
      <div className="container px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col pl-4 items-start justify-center space-y-2 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Why Choose <span className="text-primary">Eventify</span>
          </h2>
          <p className="max-w-[500px] text-sm text-muted-foreground">
            Our journey of innovation and excellence in event management
          </p>
        </motion.div>

        <div className="mt-8 md:mt-10 lg:mt-12" ref={ref}>
          <div className="relative max-w-2xl">
            {/* Vertical line */}
            <motion.div
              className="absolute left-0 md:left-7 top-0 bottom-0 w-0.5 bg-primary"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative mb-8 md:mb-12 pl-4 md:pl-16"
              >
                <motion.div
                  className="absolute left-0 md:left-4 top-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary flex items-center justify-center shadow-md"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 8 }}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary-foreground" />
                </motion.div>
                <div className="bg-card rounded-lg shadow-md p-3 md:p-4 relative z-10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 h-1 bg-primary rounded-b-lg"
                  />
                  <span className="inline-block px-2 py-1 mb-1 text-xs font-semibold text-primary-foreground bg-primary rounded-full">
                    {item.year}
                  </span>
                  <h3 className="text-sm md:text-base font-bold mb-1">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
