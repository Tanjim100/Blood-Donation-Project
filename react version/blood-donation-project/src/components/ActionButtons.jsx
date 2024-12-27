import Link from 'next/link'

export default function ActionButtons() {
  const buttons = [
    { text: "Need Blood?", href: "/request" },
    { text: "Donor List", href: "/donor-list" },
    { text: "Donate Blood from the List", href: "/donate" },
    { text: "Organization List", href: "/organization-list" }
  ]

  return (
    <section className="mb-10">
      <h3 className="text-center text-3xl font-bold p-6">What Would You Like to Do?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto sm:h-64 mt-6">
        {buttons.map((button, index) => (
          <Link key={index} href={button.href} className="bg-white rounded-lg p-4 text-center shadow-md text-red-600 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors duration-300">
            <h4 className="text-lg font-semibold">{button.text}</h4>
          </Link>
        ))}
      </div>
    </section>
  )
}

