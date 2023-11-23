import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/event-routes.mjs';
dotenv.config({ path: './config/.env' });

const app = express();

app.use(express.json())
app.use(cors());
app.use('/api', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`));
