import dotenv from 'dotenv';
import express from 'express';
import connectDB from "./db/index.js";

dotenv.config({ path: './env' });

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

app.on('error', (error) => {
  console.error('Express server error:', error);
});
