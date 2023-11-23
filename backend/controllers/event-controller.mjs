import { fetchData, addData } from '../utils/http.mjs';

const listActivities = async (req, res) => {
  const response = await fetchData('activities');
  res.status(200).json(response);
};

const getActivity = async (req, res) => {
  const id = req.params.id;
  const response = await fetchData("activities/",id);
  res.status(200).json(response);
};

const addTicket = async (req, res) => {
  const body = req.body;
  const response = await addData(body);

  if (response.statusCode === 201) {
    return res.status(201).json(response);
  } else {
    return res.status(500).json(response);
  }
};


const getTickets = async (req, res) => {
  const response = await fetchData('ticketType');
  res.status(200).json(response);
};

export { listActivities, getActivity, addTicket, getTickets };