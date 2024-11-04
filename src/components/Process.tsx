'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { MessageCircle, UserPlus, CreditCard, Calendar } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function Component() {
  const controls = useAnimationControls()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const activities = [
    { icon: MessageCircle, title: "New Event Request", time: "5m ago", color: "bg-blue-600" },
    { icon: UserPlus, title: "Client Consultation", time: "10m ago", color: "bg-yellow-600" },
    { icon: CreditCard, title: "Payment Confirmed", time: "15m ago", color: "bg-green-600" },
    { icon: Calendar, title: "Event Scheduled", time: "2m ago", color: "bg-purple-600" },
    { icon: MessageCircle, title: "Vendor Coordination", time: "5m ago", color: "bg-pink-600" },
  ]

  return (
    <section className="lg:h-[550px] flex justify-center items-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-black via-black to-gray-800">
      <div className="w-10/12 mx-auto px-4 md:px-6 text-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, staggerChildren: 0.2 },
              }
            }}
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="flex items-center mb-6">
                <span className="border-l-2 border-[#ffc23e] h-4 mr-2"></span>
                <h1 className="text-base font-semibold text-[#ffd138]">Request Process</h1>
              </div>
              <h3 className="text-3xl font-semibold mb-8 text-gray-200">How the Process Going On</h3>
              <p className="text-gray-400 mb-4 text-sm text-justify">
                Our extensive reach ensures your scholarships get maximum visibility amongst deserving students across India.
                Our extensive reach ensures your scholarships get maximum visibility amongst deserving students across India.
                Our extensive reach ensures your scholarships get maximum visibility amongst deserving students across India.
              </p>
              <p className="text-gray-400 mb-4 text-sm text-justify">
                Join us in empowering the next generation by making education more accessible to all.
                Join us in empowering the next generation by making education more accessible to all.
                Join us in empowering the next generation by making education more accessible to all.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Link
                href="/create-event"
                className="px-6 py-3 mt-5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group"
              >
                <FontAwesomeIcon icon={faPlusCircle} className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Request Event
              </Link>
            </motion.div>
          </motion.div>

          {/* Right section (unchanged) */}
          <div className="relative min-h-[550px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full max-w-md space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 rounded-xl bg-gray-800 p-4 shadow-lg"
                  >
                    <div className={`p-2 rounded-full ${activity.color}`}>
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-300 truncate">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        Eventify
                      </p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {activity.time}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Gradient overlays for infinite scroll effect */}
            {/* <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none" /> */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
