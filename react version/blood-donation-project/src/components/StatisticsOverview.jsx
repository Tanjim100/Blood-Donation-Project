import { UserPlus, Heart, Users, Hospital } from 'lucide-react';

const Stat = ({ icon, value, label, bgColor }) => (
    <div 
      className={`${bgColor} text-white p-6 rounded-lg shadow-md text-center`} 
      aria-label={`${value} ${label}`}
    >
      {icon}
      <h4 className="text-3xl font-bold mt-2">{value}</h4>
      <p className="mt-2">{label}</p>
    </div>
  );
  

export default function StatisticsOverview() {
  const stats = [
    { icon: <UserPlus size={32} />, value: '1,250', label: 'Donors Registered', bgColor: 'bg-red-600' },
    { icon: <Heart size={32} />, value: '3,500', label: 'Patients Helped', bgColor: 'bg-green-500' },
    { icon: <Users size={32} />, value: '150', label: 'Organizations Connected', bgColor: 'bg-blue-500' },
    { icon: <Hospital size={32} />, value: '75', label: 'Hospitals Partnered', bgColor: 'bg-yellow-500' },
  ];

  return (
    <section className="bg-gray-100 mb-10">
      <h3 className="text-center text-3xl font-bold mb-6">Our Impact</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
        ))}

      </div>
    </section>
  );
}
