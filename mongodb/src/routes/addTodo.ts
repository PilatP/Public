import { Request, Router } from 'express';
import { ITodo, TodoModel } from '../models/Todo';

export const addTodoRouter = Router();

addTodoRouter.post('/', async (req: Request<unknown, unknown, ITodo>, res) => {
  try {
    console.log(req.body);
    const todo = req.body;
    const { _id } = await new TodoModel({ ...todo }).save();
    res.status(200).json({ id: _id });
  } catch (error) {
    res.sendStatus(500).json(error);
  }
});
