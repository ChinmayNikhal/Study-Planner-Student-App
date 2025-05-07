const express = require('express');
const {
  getSubjects, addSubject, updateSubject, deleteSubject
} = require('../controllers/subjectController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.use(auth);

router.get('/', getSubjects);
router.post('/', addSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

module.exports = router;
