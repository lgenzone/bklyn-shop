import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to database!');
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
