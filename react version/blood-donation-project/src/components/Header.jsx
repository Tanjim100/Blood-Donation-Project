'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <i className="fa-solid fa-hand-holding-droplet text-red-500 text-2xl"></i>
          <h1 className="text-2xl font-bold text-red-500">BDMS Project</h1>
        </Link>
        
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} className="text-red-500 focus:outline-none">
            <Menu className="w-8 h-8" />
          </button>
        </div>

        <nav className="hidden space-x-4 md:flex">
          <Link href="/why-donate" className="text-red-500 hover:text-gray-700">Why Donate?</Link>
          <Link href="/hospital-partner-list" className="text-red-500 hover:text-gray-700">Partner Hospitals</Link>
          <Link href="/contact" className="text-red-500 hover:text-gray-700">Contact Us</Link>
          <Link href="/login" className="text-red-500 hover:text-gray-700">Login</Link>
          <Link href="/signup" className="text-red-500 hover:text-gray-700">Sign Up</Link>
          <Link href="/profile" className="text-red-500 hover:text-gray-700">My Profile</Link>
        </nav>

        {isMobileMenuOpen && (
          <nav className="fixed top-0 right-0 w-3/4 h-full bg-red-500 text-white shadow-lg p-6 space-y-6 z-50">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-4 right-4">
              <X className="w-8 h-8" />
            </button>
            <Link href="/why-donate" className="block text-white hover:bg-white hover:text-red-500 rounded-lg px-4 py-2">Why Donate?</Link>
            <Link href="/hospital-partner-list" className="block text-white hover:bg-white hover:text-red-500 rounded-lg px-4 py-2">Partner Hospitals</Link>
            <Link href="/contact" className="block text-white hover:bg-white hover:text-red-500 rounded-lg px-4 py-2">Contact Us</Link>
            <Link href="/login" className="block text-white hover:bg-white hover:text-red-500 rounded-lg px-4 py-2">Login</Link>
            <Link href="/signup" className="block text-white hover:bg-white hover:text-red-500 rounded-lg px-4 py-2">Sign Up</Link>
            <Link href="/profile" className="block text-white hover:bg-white hover:text-red-500 rounded-lg px-4 py-2">My Profile</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

