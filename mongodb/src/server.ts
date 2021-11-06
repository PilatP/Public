import express from 'express';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const mongodbPassword = process.env.MONGO_DB_PASSWORD;

const app = express();

const runServer = async () => {
  try {
    const mongoUrl = `mongodb+srv://pilat:${mongodbPassword}@cluster0.ws3ya.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const mongoConnection = await mongoose.connect(mongoUrl, {
      appName: 'mongodb',
    });

    app.listen(port, () => {
      console.info(`Server is started at 0.0.0.0:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

runServer();