import express from 'express';
import { listActivities, getActivity, addTicket } from '../controllers/event-controller.mjs';

const router = express.Router();

// GET request till '/api/activities'
router.route('/activities').get(listActivities) 

// GET request till '/api/activities/:id'
router.route('/activities/:id').get(getActivity) 

// GET och POST request till '/api/tickets' get(getTicket)
router.route('/tickets').post(addTicket); 


//Behöve rjag ens ha en getTicket?
//för responsen på posten är väl det jag ska hantera
export default router;