'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', { name, message })
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-2">Write Us</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-2 rounded-md border border-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-2 rounded-md border border-gray-300" 
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button 
          type="submit" 
          className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
