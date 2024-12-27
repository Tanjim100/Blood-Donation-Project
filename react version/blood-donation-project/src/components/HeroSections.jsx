import Link from 'next/link'

export default function HeroSections() {
  return (
    <>
      <section className="relative h-[400px] md:h-[500px] bg-cover bg-center shadow-lg" style={{backgroundImage: "url('/images/HomePage/patient-getting-chemotherapy-treatment.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative flex flex-col justify-center h-full px-10 py-5">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
            <span>Save Lives</span> <br/><span>Donate Blood</span>
          </h2>
          <div>
            <p className="text-sm md:text-lg text-gray-100 mb-4">Join us in saving lives by Donating Blood.</p>
            <Link href="/signup">
              <button className="bg-red-600 text-sm md:text-base text-white py-2 px-4 rounded-lg hover:bg-white hover:text-red-500 transition duration-300 mr-4">
                DONATE
              </button>
            </Link>
            <Link href="/request">
              <button className="bg-red-600 text-sm md:text-base text-white py-2 px-4 rounded-lg hover:bg-white hover:text-red-500 transition duration-300">
                REQUEST
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="relative h-[400px] md:h-[500px] bg-cover bg-center shadow-lg" style={{backgroundImage: "url('/images/HomePage/woman-mask-uniform-holding-tube-her-hands.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="flex flex-row justify-end h-full">
          <div className="relative flex flex-col justify-center h-full px-10 py-5">
            <h2 className="flex flex-col items-end text-2xl md:text-4xl lg:text-6xl font-bold text-white">
              <span>Save Lives</span>
              <span>Donate Blood</span>
            </h2>
            <div className="flex flex-col items-end">
              <p className="text-sm md:text-lg text-gray-100 mb-4">Join us in saving lives by Donating Blood.</p>
              <Link href="/request">
                <button className="bg-red-600 text-sm md:text-base text-white py-2 px-4 rounded-lg hover:bg-white hover:text-red-600 transition duration-300">
                  REQUEST
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

