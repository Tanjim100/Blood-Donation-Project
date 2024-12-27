import { useState } from 'react';

export default function RequestForm() {
  const [formData, setFormData] = useState({
    bloodType: '',
    location: '',
    urgency: '',
    donationType: '',
    donationDate: '',
    donationTime: '',
    operationTime: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl p-8 bg-white shadow-xl">
      <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">Request Blood Donation</h2>

      <div className="mb-5">
        <label htmlFor="bloodType" className="block text-sm font-medium text-red-700 mb-2">Blood Type</label>
        <select 
          id="bloodType" 
          name="bloodType" 
          value={formData.bloodType}
          onChange={handleChange}
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="location" className="block text-sm font-medium text-red-700 mb-2">Location</label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          value={formData.location}
          onChange={handleChange}
          placeholder="City, State, or Postal Code"
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="urgency" className="block text-sm font-medium text-red-700 mb-2">Urgency Level</label>
        <select 
          id="urgency" 
          name="urgency" 
          value={formData.urgency}
          onChange={handleChange}
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>Select Urgency Level</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="donationType" className="block text-sm font-medium text-red-700 mb-2">Preferred Donation Type</label>
        <select 
          id="donationType" 
          name="donationType" 
          value={formData.donationType}
          onChange={handleChange}
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="" disabled>Select Donation Type</option>
          <option value="wholeBlood">Whole Blood</option>
          <option value="platelets">Platelets</option>
          <option value="plasma">Plasma</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="donationDate" className="block text-sm font-medium text-red-700 mb-2">Donation Date</label>
        <input 
          type="date" 
          id="donationDate" 
          name="donationDate" 
          value={formData.donationDate}
          onChange={handleChange}
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="donationTime" className="block text-sm font-medium text-red-700 mb-2">Preferred Donation Time</label>
        <input 
          type="time" 
          id="donationTime" 
          name="donationTime" 
          value={formData.donationTime}
          onChange={handleChange}
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="operationTime" className="block text-sm font-medium text-red-700 mb-2">Operation Time (If Applicable)</label>
        <input 
          type="time" 
          id="operationTime" 
          name="operationTime" 
          value={formData.operationTime}
          onChange={handleChange}
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-sm font-medium text-red-700 mb-2">Additional Message (Optional)</label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter any additional information here..."
          className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
      </div>

      <div className="text-center">
        <button 
          type="submit" 
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Submit Request
        </button>
      </div>
    </form>
  );
}
