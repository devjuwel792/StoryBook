import React, { useState } from 'react';

const Chatbots = () => {
  const [formData, setFormData] = useState({
    assistantName: '',
    aiBehaviour: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-8xl mx-auto p-6">
      {/* Header Section */}
      <header className="mb-8 mx-12">
        <h1 className="text-[20px] font-semibold text-[#1F1F1F] mb-2 headerFont">
          AI Assistant Configuration
        </h1>
        <p className="text-[16px] text-[#1F1F1F] opacity-90 normalFont">
          Configure the AI chatbot for Story Creator assistance
        </p>
      </header>

      {/* Form Section */}
      <form className='mx-12' onSubmit={handleSubmit}>
        <div className="border border-slate-300 rounded-lg p-6 mb-6 bg-white shadow-sm">
          <h2 className="text-[14px] font-semibold text-[#1F3A2B] mb-6 headerFont">
            AI Assistant Settings
          </h2>

          {/* Assistant Name Field */}
          <div className="mb-6">
            <label 
              htmlFor="assistantName" 
              className="block text-[10px] font-medium text-[#1F1F1F] mb-2 headerFont"
            >
              Assistant Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="assistantName"
              name="assistantName"
              value={formData.assistantName}
              onChange={handleChange}
              className="w-full p-3 bg-[#F3F3F5] border border-[#E2E2E2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#95D4C4] focus:border-transparent transition-all normalFont"
              placeholder="Enter assistant name"
              required
              aria-required="true"
            />
            <p className="text-[12px] text-gray-500 mt-1 normalFont">
              Choose a name that reflects the assistant's purpose
            </p>
          </div>

          {/* AI Behaviour Field */}
          <div>
            <label 
              htmlFor="aiBehaviour" 
              className="block text-[10px] font-medium text-[#1F1F1F] mb-2 headerFont"
            >
              AI Behaviour Settings
              <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="aiBehaviour"
              name="aiBehaviour"
              rows={11}
              value={formData.aiBehaviour}
              onChange={handleChange}
              className="w-full p-3 bg-[#F3F3F5] border border-[#E2E2E2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#95D4C4] focus:border-transparent transition-all resize-y min-h-[120px] normalFont"
              placeholder="Describe the AI's behavior, tone, and response style..."
              required
              aria-required="true"
            />
            <p className="text-[12px] text-gray-500 mt-1 normalFont">
              Define how the AI should behave, respond, and interact with users
            </p>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-3 px-8 rounded-lg text-white font-medium hover:opacity-90 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#95D4C4] focus:ring-offset-2 headerFont"
            style={{
              background: 'linear-gradient(90deg, #294637 0%, #95D4C4 100%)'
            }}
            aria-label="Save AI assistant configuration changes"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbots;