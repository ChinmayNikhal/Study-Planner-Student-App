const Subject = require('../models/Subject');

exports.getSubjects = async (req, res) => {
  const subjects = await Subject.find({ user: req.user._id });
  res.json(subjects);
};

exports.createSubject = async (req, res) => {
  const { name, color } = req.body;
  const subject = await Subject.create({ name, color, user: req.user._id });
  res.status(201).json(subject);
};
