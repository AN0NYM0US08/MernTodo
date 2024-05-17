import { Todo } from "../model/todoModel.js";

export const addtodo = async (req, res) => {
  try {
    const newTodo = await Todo.create({
      data: req.body.data,
      createdAt: Date.now(),
    });
    // await newTodo.save();
    return res.status(200).json(newTodo);
  } catch (err) {
    return res.status(404).json(err);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todo = await Todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json(todo);
  } catch (err) {
    return res.status(404).json(err);
  }
};

export const toggledone = async (req, res) => {
  try {
    const todoRef = await Todo.findById(req.params.id);

    const todonew = await Todo.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { done: !todoRef.done }
    );
    await todonew.save();
    return res.status(200).json(todonew);
  } catch (err) {
    return res.status(404).json(err);
  }
};

export const updateTodo = async (req, res) => {
  console.log("in update todo");
  console.log(req.params.id, req.body.data);
  try {
    await Todo.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { data: req.body.data }
    );
    const todoneww = await Todo.findById(req.params.id);
    return res.status(200).json(todoneww);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletedTodo);
  } catch (err) {
    return res.status(404).json(err);
  }
};
