'use client';
import React from 'react';
import ActionButton from './ActionButton';

const TicketTable = ({ tickets, onEdit }) => {
  // Helper function to get the severity badge color
  const getSeverityBadgeColor = (severity) => {
    switch (severity) {
      case 'High':
        return 'bg-red-500 text-white'; // Red for high severity
      case 'Medium':
        return 'bg-yellow-500 text-white'; // Yellow for medium severity
      case 'Low':
        return 'bg-green-500 text-white'; // Green for low severity
      default:
        return 'bg-gray-500 text-white'; // Default grey color
    }
  };

  // Helper function to get the type badge color
  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'Bug':
        return 'bg-red-500 text-white'; // Red for bug
      case 'Feature':
        return 'bg-green-500 text-white'; // Green for feature
      case 'Task':
        return 'bg-yellow-500 text-white'; // Yellow for task
      default:
        return 'bg-gray-500 text-white'; // Default grey color
    }
  };

  return (
    <div className="overflow-auto bg-white rounded-lg shadow-md max-h-96">
      <table className="w-full table-auto border-collapse text-sm text-left text-gray-600">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">#</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Subject</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Account</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Application</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Date</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Modified</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Mobile Number</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Severity</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Type</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Description</th>
            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={ticket.id || index} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b">{index + 1}</td>
              <td className="px-6 py-4 border-b">{ticket.subject}</td>
              <td className="px-6 py-4 border-b">{ticket.account}</td>
              <td className="px-6 py-4 border-b">{ticket.application}</td>
              <td className="px-6 py-4 border-b">{new Date(ticket.dateTime).toLocaleDateString('en-GB')}</td>
              <td className="px-6 py-4 border-b">{ticket.updateTimeStamp ? new Date(ticket.updateTimeStamp).toLocaleDateString('en-GB') : '-'}</td>
              <td className="px-6 py-4 border-b">{ticket.mobileNumber}</td>
              <td className="px-6 py-4 border-b">
                <span className={`px-3 py-1 rounded-full text-xs ${getSeverityBadgeColor(ticket.severity)}`}>
                  {ticket.severity}
                </span>
              </td>
              <td className="px-6 py-4 border-b">
                <span className={`px-3 py-1 rounded-full text-xs ${getTypeBadgeColor(ticket.type)}`}>
                  {ticket.type}
                </span>
              </td>
              <td className="px-6 py-4 border-b">{ticket.ticketDescription}</td>
              <td className="px-6 py-4 border-b">
                <ActionButton onClick={() => onEdit(ticket.ticketId)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
