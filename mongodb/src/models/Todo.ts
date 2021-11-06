import mongoose from 'mongoose';

export interface ITodo {
  name: string;
  date: Date;
  description?: string;
  points: number;
}
const TodoSchema = new mongoose.Schema<ITodo>({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  description: String,
  points: { type: Number, required: true },
});

export const TodoModel = mongoose.model<ITodo>('Todo', TodoSchema);
