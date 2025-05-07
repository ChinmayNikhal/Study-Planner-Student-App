const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = await Task.create({ userId: req.user.id, title, description, dueDate });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const updated = await Task.findOneAndUpdate(
    { _id: id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ msg: 'Deleted' });
};
