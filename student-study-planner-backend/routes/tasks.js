const express = require('express');
const {
  getTasks,
  getUpcomingTasks,
  createTask,
  updateTask,
  deleteTask,
  completeTask
} = require('../controllers/taskController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();
router.use(protect);

router.get('/', getTasks);
router.get('/upcoming', getUpcomingTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/complete', completeTask);

module.exports = router;
