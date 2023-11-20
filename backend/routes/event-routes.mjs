import express from 'express';
import { listActivities, getActivity, addTicket, getTickets } from '../controllers/event-controller.mjs';

const router = express.Router();

// GET request till '/api/activities'
router.route('/activities').get(listActivities) 

// GET request till '/api/activities/:id'
router.route('/activities/:id').get(getActivity) 

// GET och POST request till '/api/tickets' och ticketType get(getTicket)
router.route('/tickets').post(addTicket);
router.route('/ticketType').get(getTickets); 



export default router;