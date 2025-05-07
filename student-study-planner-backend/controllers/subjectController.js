const Subject = require('../models/Subject');

exports.getSubjects = async (req, res) => {
  const subjects = await Subject.find({ userId: req.user.id });
  res.json(subjects);
};

exports.addSubject = async (req, res) => {
  const { name, topics } = req.body;
  const subject = await Subject.create({ userId: req.user.id, name, topics });
  res.json(subject);
};

exports.updateSubject = async (req, res) => {
  const { id } = req.params;
  const updated = await Subject.findOneAndUpdate(
    { _id: id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteSubject = async (req, res) => {
  await Subject.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  res.json({ msg: 'Deleted' });
};
