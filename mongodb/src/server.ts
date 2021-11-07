import express from 'express';
import mongoose from 'mongoose';
import { addTodoRouter } from './routes/addTodo';
import { getTodoRouter } from './routes/getTodoRouter';

const port = process.env.PORT || 3000;
const mongodbPassword = process.env.MONGO_DB_PASSWORD;

const app = express();
app.use(express.json());
app.use('/todo/add', addTodoRouter);
app.use('/todo', getTodoRouter);

app.use((_, res, next) => {
  res.sendStatus(404);
  next();
});
const runServer = async () => {
  try {
    const mongoUrl = `mongodb+srv://pilat:${mongodbPassword}@cluster0.ws3ya.mongodb.net/todo?retryWrites=true&w=majority`;
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
