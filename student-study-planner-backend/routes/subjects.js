const express = require('express');
const { getSubjects, createSubject } = require('../controllers/subjectController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(protect);

router.get('/', getSubjects);
router.post('/', createSubject);

module.exports = router;
