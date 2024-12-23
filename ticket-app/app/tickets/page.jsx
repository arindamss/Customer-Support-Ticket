'use client';
import React, { useEffect, useState } from 'react';
import {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  fetchUserDetails, // Add the API call to fetch user details
} from '../../services/ticketService';
import TicketTable from '../../components/TicketTable';
import TicketForm from '../../components/TicketForm';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',  // Default empty string for subject
    account: '',
    application: '',
    date: '',
    mobileNumber: '',
    severity: '',
    type: '',
    ticketDescription: '',
  });
  const [userDetails, setUserDetails] = useState(null); // State to hold the user details
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const data = await getAllTickets();
    setTickets(data);
  };

  // Fetch user details from the backend when the 'New Ticket' button is clicked
  const handleNewTicketClick = async () => {
    const userData = await fetchUserDetails();
    setUserDetails(userData); // Set the user data in state

    setFormData({
      ...formData,
      subject: '',
      account: '',
      application: '',
      date: '',
      mobileNumber: '',
      severity: '',
      type: '',
      ticketDescription: '',
    });
    setIsFormOpen(true);
    setEditingId(null);
  };

  const handleEdit = async (id) => {
    const data = await getTicketById(id);
    setFormData(data);
    setEditingId(id);
    setIsFormOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await updateTicket({ id: editingId, ...formData });
    } else {
      await createTicket(formData);
    }
    setIsFormOpen(false);
    fetchTickets();
  };

  return (
    <div className="p-6">
      {/* New Ticket Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Raise Ticket</h1>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded shadow-md transition-all"
            onClick={handleNewTicketClick}  
          >
            New Ticket
          </button>
        </div>
      </div>

      {/* Ticket Table Section */}
      <TicketTable tickets={tickets} onEdit={handleEdit} />

      {/* Form Section */}
      {isFormOpen && (
        <TicketForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          onClose={() => setIsFormOpen(false)}
          userDetails={userDetails}  
        />
      )}
    </div>
  );
};

export default TicketsPage;
