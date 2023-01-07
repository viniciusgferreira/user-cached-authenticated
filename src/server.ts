import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/router';

//DB CREDENTIALS
dotenv.config();

// MONGODB CONNECTION
const mongo = process.env.MONGO;
console.log(mongo);
const MONGO_NAME_STR = `mongodb://${mongo}:27017`;

mongoose.connect(MONGO_NAME_STR)
  .then(() => {
    console.log('Conectado ao MongoDB');

    // Create express server
    const app = express();
    const port = process.env.PORT || 3001;

    // JSON
    app.use(express.json());

    // ROUTER
    app.use('/user-service', router);

    app.listen(port, () => console.log(`API User Service is running on port http://localhost:${port}`));

  })
  .catch((err) => console.log(err));
