import Link from 'next/link'

const Hospital = ({ name, imageUrl }) => (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
      <img src={imageUrl} alt={name} width={144} height={96} className="mx-auto mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
    </div>
  );
  

export default function PartnerHospitals() {
  const hospitals = [
    { name: "City Hospital", imageUrl: "/images/HomePage/Hospital.jpg" },
    { name: "HealthCare Clinic", imageUrl: "/images/HomePage/Hospital.jpg" },
    { name: "General Hospital", imageUrl: "/images/HomePage/Hospital.jpg" },
    { name: "MedLife Hospital", imageUrl: "/images/HomePage/Hospital.jpg" },
  ]

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-red-600 font-bold text-center mb-6">Our Partner Hospitals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hospitals.map((hospital, index) => (
            <Hospital key={index} {...hospital} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/hospital-partner-list" className="inline-block bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300">
            Show More
          </Link>
        </div>
      </div>
    </section>
  )
}

