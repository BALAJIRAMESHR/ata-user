import React from 'react';
import { Phone, Mail, MessageSquare, User } from 'lucide-react';
import Sayhii from './sayhii.png';

const ContactForm = () => {
  // Country codes data
  const countryCodes = [
    { code: '+91', country: 'IN' },
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+49', country: 'DE' },
    { code: '+33', country: 'FR' },
    { code: '+61', country: 'AU' },
    { code: '+7', country: 'RU' },
    { code: '+39', country: 'IT' },
  ];

  // Animation style
  const style = `
    @keyframes wiggle {
      0%, 100% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(45deg);
      }
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-start gap-12">
          {/* Form Section */}
          <div className="w-full md:w-2/3">
            <div className="mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mt-32">Get in touch with us</h1>
              <p className="text-gray-600 mt-2">Fill in this form and we will get back to you shortly</p>
            </div>
            
            <form className="space-y-8">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <User className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Name<span className="text-red-500">*</span></span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  required
                  className="w-full p-4 rounded-md bg-orange-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone and Code Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">Code<span className="text-red-500">*</span></span>
                  </label>
                  <select 
                    required
                    className="w-full p-4 rounded-md bg-orange-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.country} {item.code}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">Phone<span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    required
                    className="w-full p-4 rounded-md bg-orange-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Email<span className="text-red-500">*</span></span>
                </label>
                <input
                  type="email"
                  placeholder="e.g., email@example.com"
                  required
                  className="w-full p-4 rounded-md bg-orange-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">Your Message<span className="text-red-500">*</span></span>
                </label>
                <textarea
                  placeholder="Enter text here"
                  required
                  rows={4}
                  className="w-full p-4 rounded-md bg-orange-50/50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* reCAPTCHA Placeholder */}
              <div className="flex justify-center">
                <div className="bg-orange-50/50 p-4 rounded-md border border-gray-200 w-80">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" required />
                      <span className="text-gray-600 text-sm">I'm not a robot</span>
                    </div>
                    <img src="/assets/captha.svg" alt="reCAPTCHA" className="w-10 h-10" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                  type="submit"
                  className="px-12 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                >
                  Send
                </button>
            </form>
          </div>

          {/* Animated Image Section */}
          <div className="w-full md:w-1/3 flex justify-center items-center h-screen mt-24">
            <div className="relative w-full">
              <div className="flex justify-center items-center">
                <div className="relative w-full h-full">
                  <div className="transform animate-[wiggle_1s_ease-in-out_infinite] flex justify-center">
                    <img 
                    src={Sayhii}                        
                      alt="Say Hi"
                      className="w-78 h-72"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;