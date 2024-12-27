import Image from 'next/image'

export default function MotivatingStatement() {
  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md mx-auto flex flex-col items-center justify-center">
      <h3 className="text-center text-2xl font-bold text-gray-900 mt-0">
        Welcome to Blood Donation
      </h3>
      <Image 
        src="/images/BDMS-logo.png" 
        alt="Blood Donation Logo" 
        width={208} 
        height={168} 
        className="mb-4"
      />
      <p className="text-xl text-center text-gray-700">
        Donate blood, save lives. Your single act of kindness can bring hope and health to those in need. Join the life-saving movement today and be a hero for someone!
      </p>
    </div>
  )
}

