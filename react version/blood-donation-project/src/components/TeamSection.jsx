import Image from 'next/image';

const teamMembers = [
  {
    name: "TANJIM HAIDER",
    role: "CSE, CUET",
    email: "creator1@gmail.com",
    image: "/images/Tanjim/Tanjim (3).jpg"
  },
  {
    name: "TOWHIDUL ISLAM",
    role: "CSE, CUET",
    email: "creator2@gmail.com",
    image: "/images/Tanjim/rizvi (1).png"
  },
  {
    name: "ADIL MUBASSAR",
    role: "CSE, CUET",
    email: "creator3@gmail.com",
    image: "/images/Tanjim/Adil (2).jpeg"
  }
];

export default function TeamSection() {
  return (
    <section className="py-8">
      <h1 className="text-3xl text-red-500 text-center mb-8 font-bold">Our Team</h1>
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-6 md:space-y-0">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image 
              src={member.image} 
              alt={member.name} 
              width={192} 
              height={192} 
              className="rounded-full w-32 md:w-40 lg:w-48 mx-auto border-2 border-red-600"
            />
            <p className="mt-4 text-sm md:text-base text-red-500 font-bold">{member.name}</p>
            <p className="mt-4 text-sm md:text-base text-red-500 font-bold">{member.role}</p>
            <p className="mt-4 text-sm md:text-base text-red-500 font-bold">{member.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
