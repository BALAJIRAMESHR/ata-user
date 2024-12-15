import React, { useState } from 'react';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    issueType: '',
    issueDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    console.log(formData)

    try {
      const response = await fetch('http://localhost:8800/supportdesk/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      setSubmitSuccess(true);
      setFormData({ 
        name: '', 
        email: '', 
        countryCode: '+91', 
        phone: '', 
        issueType: '', 
        issueDescription: '' 
      });
    } catch (error) {
      setSubmitError(error.message || 'Failed to submit ticket. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-4 sm:px-6 md:px-10 lg:px-32 py-8 sm:py-12 mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-4 p-3 sm:p-4 bg-green-100 text-green-700 rounded-md text-sm sm:text-base">
            Ticket submitted successfully!
          </div>
        )}
        
        {/* Error Message */}
        {submitError && (
          <div className="mb-4 p-3 sm:p-4 bg-red-100 text-red-700 rounded-md text-sm sm:text-base">
            {submitError}
          </div>
        )}
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name Input */}
          <div className="space-y-1 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="space-y-1 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Email-ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone Input */}
          <div className="space-y-1 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-1 sm:gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-16 sm:w-24 px-1 py-1 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          {/* Issue Type Select */}
          <div className="space-y-1 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Issue Type <span className="text-red-500">*</span>
            </label>
            <select
              name="issueType"
              required
              value={formData.issueType}
              onChange={handleChange}
              className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select issue type</option>
              <option value="technical">Technical Issue</option>
              <option value="billing">Billing Issue</option>
              <option value="general">General Inquiry</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          {/* Issue Description Textarea */}
          <div className="space-y-1 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-medium text-gray-700">
              Issue Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="issueDescription"
              required
              value={formData.issueDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe your issue"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 text-white py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-base rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Raise a Ticket'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;