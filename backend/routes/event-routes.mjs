import express from 'express';
import { listActivities, getActivity, addTicket, getTickets } from '../controllers/event-controller.mjs';

const router = express.Router();

router.route('/activities').get(listActivities) 
router.route('/activities/:id').get(getActivity) 
router.route('/tickets').post(addTicket);
router.route('/ticketType').get(getTickets); 

export default router;