'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faUsers, faChartLine, faPlusCircle, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  icon: IconDefinition
}

export default function NavbarDemo() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-black ${scrolled ? 'shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white relative">
                Eventify
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/event" icon={faCalendarAlt}>Events</NavLink>
              <NavLink href="/about" icon={faUsers}>About</NavLink>
              <NavLink href="/services" icon={faChartLine}>Services</NavLink>
              <Link href="/signup" className="ml-8 px-6 py-2 rounded-full text-sm font-medium text-black bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg group">
                <FontAwesomeIcon icon={faPlusCircle} className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Request Event
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <MobileNavLink href="/event" icon={faCalendarAlt}>Events</MobileNavLink>
            <MobileNavLink href="/about" icon={faUsers}>About</MobileNavLink>
            <MobileNavLink href="/services" icon={faChartLine}>Services</MobileNavLink>
            <Link href="/signup" className="inline-flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-black bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faPlusCircle} className="w-4 h-4 mr-2" />
              Request Event
            </Link>
          </div>
        </div>
      )}
      <ParticleBackground />
    </nav>
  )
}

function NavLink({ href, children, icon }: NavLinkProps) {
  return (
    <Link href={href} className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out inline-flex items-center group">
      <FontAwesomeIcon icon={icon} className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
      <span className="relative">
        {children}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  )
}

function MobileNavLink({ href, children, icon }: NavLinkProps) {
  return (
    <Link href={href} className="text-white hover:text-blue-400 inline-flex w-full items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out">
      <FontAwesomeIcon icon={icon} className="w-4 h-4 mr-2" />
      {children}
    </Link>
  )
}

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full "
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </div>
  )
}
