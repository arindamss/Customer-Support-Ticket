'use client';
import React from 'react';
import { FaUser, FaRegAddressCard, FaPhoneAlt, FaCalendarAlt, FaExclamationCircle, FaTicketAlt } from 'react-icons/fa';

const TicketForm = ({ formData, setFormData, onSubmit, onClose, userDetails }) => {
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80">
      <div className="relative bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl border border-gray-300 overflow-y-auto max-h-screen">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header Section (User Details) */}
        {userDetails && (
          <div className="mb-6">
            <div className="grid grid-cols-2 text-base text-gray-600">
              <div>
                <p><strong>Ticket No.:</strong> 1734600979809</p>
                <p><strong>Requested From:</strong> {userDetails.requestedFrom}</p>
                <p><strong>Server Name:</strong> {userDetails.serverName}</p>
              </div>
              <div>
                <p><strong>Name:</strong> {userDetails.name}</p>
                <p><strong>Username:</strong> {userDetails.username}</p>
                <p><strong>Email ID:</strong> {userDetails.email}</p>
              </div>
            </div>
          </div>
        )}

        {/* Form Section */}
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-3 gap-6 mb-6">
            
            {/* Subject */}
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaTicketAlt className="text-gray-500" />
                <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Vertical line */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject || ''}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none py-2 px-3"
                  placeholder="Enter subject"
                />
              </div>
            </div>

            {/* Account Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaRegAddressCard className="text-gray-500" />
                <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Vertical line */}
                <select
                  name="account"
                  value={formData.account || ''}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none py-2 px-3"
                >
                  <option value="">Select Account</option>
                  <option value="KEROSS">KEROSS</option>
                  <option value="WS Atkins & Partners Overseas">WS Atkins & Partners Overseas</option>
                </select>
              </div>
            </div>

            {/* Application Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaUser className="text-gray-500" />
                <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Vertical line */}
                <select
                  name="application"
                  value={formData.application || ''}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none py-2 px-3"
                >
                  <option value="" disabled>Select Application</option>
                  <option value="Customer Support">Customer Support</option>
                </select>
              </div>
            </div>

            {/* Issue Date (Disabled with Default Date) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Issue Date <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaCalendarAlt className="text-gray-500" />
                <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Vertical line */}
                <input
                  type="date"
                  name="date"
                  value={today}  // Set today's date as the value
                  disabled  // Disable the input so the user cannot change the date
                  className="w-full bg-transparent focus:outline-none py-2 px-3"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaPhoneAlt className="text-gray-500" />
                <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Vertical line */}
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber || ''}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none py-2 px-3"
                  placeholder="+1234567890"
                />
              </div>
            </div>

            {/* Severity Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaExclamationCircle className="text-gray-500" />
                <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Vertical line */}
                <select
                  name="severity"
                  value={formData.severity || ''}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none py-2 px-3"
                >
                  <option value="">Select Severity</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
            </div>

            {/* Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaTicketAlt className="text-gray-500" />
                <div className="border-l border-gray-300 h-6 mx-2"></div> {/* Vertical line */}
                <select
                  name="type"
                  value={formData.type || ''}
                  onChange={handleChange}
                  className="w-full bg-transparent focus:outline-none py-2 px-3"
                >
                  <option value="">Select Type</option>
                  <option value="Bug">Bug</option>
                  <option value="Feature">Feature</option>
                  <option value="Task">Task</option>
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-3 bg-gray-50 rounded-lg border border-gray-300 px-4 py-2">
                <FaRegAddressCard className="text-gray-500" />
                <div className="border-l border-gray-300 h-20 mx-2"></div> {/* Vertical line */}
              <textarea
                name="ticketDescription"
                value={formData.ticketDescription || ''}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none py-2 px-3"
                rows="4"
                placeholder="Enter ticket description"
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-400 transition-all"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
