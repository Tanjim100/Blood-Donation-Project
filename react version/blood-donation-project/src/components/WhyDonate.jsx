import Link from 'next/link'

export default function WhyDonate() {
  return (
    <section className="bg-red-600 text-white py-16 mt-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Why Donate Blood?</h2>
        <p className="mb-6">Every donation can save up to three lives. Blood is always in demand, and your contribution can make a big impact.</p>
        <Link href="/why-donate" className="bg-white text-red-600 font-semibold py-2 px-6 rounded-lg hover:bg-red-700 hover:text-white transition-colors duration-300 inline-block">
          Learn More
        </Link>
      </div>
    </section>
  )
}

