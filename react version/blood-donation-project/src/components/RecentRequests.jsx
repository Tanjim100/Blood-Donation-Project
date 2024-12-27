import { Phone } from 'lucide-react'

const RequestCard = ({ name, problem, bloodType, amountRequired, location, donationTime }) => (
  <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center space-x-4">
      <img src="/placeholder.svg?height=50&width=50" alt="Profile" className="w-12 h-12 rounded-full border-2 border-red-600" />
      <div>
        <h2 className="text-lg font-bold">{name}</h2>
      </div>
    </div>
    <div className="mt-4 text-gray-700 space-y-2 text-left">
      <p><span className="font-bold">Patients Problem:</span> {problem}</p>
      <p><span className="font-bold">Blood Type:</span> {bloodType}</p>
      <p><span className="font-bold">Amount Required:</span> {amountRequired}</p>
      <p><span className="font-bold">Location:</span> {location}</p>
      <p><span className="font-bold">Time for Donation:</span> {donationTime}</p>
    </div>
    <button aria-label="Call Now" className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex items-center justify-center transition-colors duration-300">
      <Phone className="w-5 h-5 mr-2" />
      Call Now
    </button>
  </div>
);

export default function RecentRequests() {
  const requests = [
    { name: "Tipu Sultan Eiko", problem: "Undergoing surgery", bloodType: "A+", amountRequired: 2, location: "264/1/J Manikdi Namapara, Dhaka Cantonment", donationTime: "10/11/2024 5:00pm" },
    { name: "Muhammad Taqi Tahmid Khan", problem: "Undergoing surgery", bloodType: "A+", amountRequired: 2, location: "264/1/J Manikdi Namapara, Dhaka Cantonment", donationTime: "10/11/2024 5:00pm" },
    { name: "Aisha Rahman", problem: "Undergoing surgery", bloodType: "A+", amountRequired: 2, location: "264/1/J Manikdi Namapara, Dhaka Cantonment", donationTime: "10/11/2024 5:00pm" },
    { name: "Ahmed Karim", problem: "Undergoing surgery", bloodType: "A+", amountRequired: 2, location: "264/1/J Manikdi Namapara, Dhaka Cantonment", donationTime: "10/11/2024 5:00pm" },
    { name: "Fatima Begum", problem: "Undergoing surgery", bloodType: "A+", amountRequired: 2, location: "264/1/J Manikdi Namapara, Dhaka Cantonment", donationTime: "10/11/2024 5:00pm" },
    { name: "Rashid Hasan", problem: "Undergoing surgery", bloodType: "A+", amountRequired: 2, location: "264/1/J Manikdi Namapara, Dhaka Cantonment", donationTime: "10/11/2024 5:00pm" },
  ];

  return (
    <section className="text-center mb-10">
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold">Recently Requested for Blood</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 px-4">
        {requests.map((request, index) => (
          <RequestCard key={index} {...request} />
        ))}
      </div>
    </section>
  );
}
