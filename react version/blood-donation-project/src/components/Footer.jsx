import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">&copy; 2024 BDMS Project. All rights reserved.</p>
        <Link href="/privacy-policy" className="text-sm md:text-base hover:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

