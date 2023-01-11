import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/router';

//DB CREDENTIALS
dotenv.config();

// MONGODB CONNECTION
const mongo = process.env.MONGO;
const MONGO_PORT = process.env.MONGO_PORT;
console.log(`mongodb://${mongo}:${MONGO_PORT}`);
const MONGO_NAME_STR = `mongodb://${mongo}:${MONGO_PORT}`;

mongoose.set('strictQuery', true);
mongoose.connect(MONGO_NAME_STR)
  .then(() => {
    console.log('Connected to MongoDB');

    // Create express server
    const app = express();
    const port = process.env.PORT || 3000;

    // JSON
    app.use(express.json());

    // ROUTER
    app.use('/api/v1/', router);

    app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));

  })
  .catch((err) => console.log(err));
