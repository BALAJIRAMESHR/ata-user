import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Eye, CreditCard, User, Phone, MapPin, Calendar } from 'lucide-react';

const BillingForm = () => {
  const location = useLocation();
  const [selectedMembership, setSelectedMembership] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCountry: '+91',
    phoneNumber: '',
    addressLine1: '',
    suburb: '',
    stateProvince: '',
    postalCode: '',
    username: '',
    password: '',
    profession: '',
    dateOfBirth: '',
    gender: '',
    referredBy: '',
    maritalStatus: ''
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    // Check if membership was passed via navigation state
    if (location.state && location.state.selectedMembership) {
      setSelectedMembership(location.state.selectedMembership);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  
    
  };
  const handleSubmit = () => {
    console.log(formData)
  }


  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">Billing details</h1>
        
        <div className="">
          {/* Form Section */}
          <div className="lg:col-span-2 p-6">
            <div className="bg-white rounded-lg shadow-lg p-12 space-y-6 ">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email-ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <select
                      name="phoneCountry"
                      className="w-24 p-2 border border-gray-300 rounded-l-md"
                      value={formData.phoneCountry}
                      onChange={handleInputChange}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      className="flex-1 p-2 border border-gray-300 rounded-r-md"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Suburb <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="suburb"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.suburb}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="stateProvince"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.stateProvince}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Account Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Create account password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Profession <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="profession"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.profession}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Referred by (optional)
                  </label>
                  <input
                    type="text"
                    name="referredBy"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.referredBy}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marital Status <span className="text-red-500">*</span>
                </label>
                <select
                  name="maritalStatus"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your Marital status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className='flex justify-center '>
        <div className="max-w-2xl lg:col-span-1 ">
          <div className="bg-white rounded-lg shadow-lg ">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-t-lg">
              <h2 className="text-xl font-bold text-white">Your Order</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {selectedMembership && (
                <div className="flex justify-between items-center">
                  <span className="font-medium">{selectedMembership.name} x 1</span>
                  <span>{selectedMembership.price}</span>
                </div>
              )}

              <div className="border-t pt-4">
                <div className="flex justify-between items-center font-bold">
                  <span>TOTAL</span>
                  <span>{selectedMembership ? selectedMembership.price : '$ 0.00'}</span>
                </div>
              </div>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-4">
                    By purchasing the Membership / Event Tickets, you are agreed to ATA privacy policy.
                  </p>
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      className="mt-1"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I have read and agree to the website terms and conditions
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <button 
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-md font-bold hover:bg-orange-600 transition duration-200" onClick={handleSubmit}
                >
                  PAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default BillingForm;