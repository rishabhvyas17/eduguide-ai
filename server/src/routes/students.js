const express = require('express');
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');
const { auth, authorize } = require('../middleware/auth');
const { studentValidationRules, handleValidationErrors } = require('../middleware/validation');

const router = express.Router();

// All routes require authentication
router.use(auth);

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/', authorize('admin', 'teacher'), studentValidationRules(), handleValidationErrors, createStudent);
router.put('/:id', authorize('admin', 'teacher'), updateStudent);
router.delete('/:id', authorize('admin'), deleteStudent);

module.exports = router;
