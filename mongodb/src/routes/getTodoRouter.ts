import { Response, Router } from 'express';
import { ITodo, TodoModel } from '../models/Todo';

export { Router } from 'express';

export const getTodoRouter = Router();

getTodoRouter.get('/', async (_, res: Response<ITodo[]>) => {
  try {
    const todos = await TodoModel.find();
    console.info(`There were found ${todos.length} todos`);

    res.status(200).json(todos);
  } catch (error) {
    res.sendStatus(500);
  }
});
