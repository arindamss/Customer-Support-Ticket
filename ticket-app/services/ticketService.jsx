import axios from 'axios';

// const BASE_URL = 'http://192.168.3.39:8085/userservice/api/tickets';
const BASE_URL = 'http://localhost:8000/api/tickets';

export const getAllTickets = async () => {
  const response = await axios.get(`${BASE_URL}/getAllTickets`);
  return response.data;
};

export const getTicketById = async (id) => {
  console.log("Get Ticket Called")
  const response = await axios.get(`${BASE_URL}/getTicket/${id}`);
  return response.data;
};

export const createTicket = async (ticketData) => {
  console.log("Data : ",ticketData);
  await axios.post(`${BASE_URL}/createTicket`, ticketData);
};

export const updateTicket = async (ticketData) => {
  await axios.post(`${BASE_URL}/updateTicket`, ticketData);
};



const BASE_URL_FOR_USERDETAILS = 'http://your-backend-url.com/api';

export const fetchUserDetails = async () => {
  try {
    // const response = await axios.get(`${BASE_URL_FOR_USERDETAILS}/user/details`);

    console.log("Fetching User Details")

    const response={}
    response.data={
        "ticketNo":"1734602698441",
        "requestedFrom":"ikoncloud-dev.keross.com",
        "serverName":"Dev Server",
        "name":"Arindam Karmakar",
        "username":"K2408140",
        "email":"arindam.karmakar@keross.com"
    }
    return response.data;  
  } catch (error) {
    console.error("Error fetching user details:", error);
    return {};
  }
};