const express = require('express');
const {
  getAssessments,
  getAssessment,
  createAssessment,
  updateAssessment
} = require('../controllers/assessmentController');
const { auth, authorize } = require('../middleware/auth');

const router = express.Router();

// All routes require authentication
router.use(auth);

router.get('/', getAssessments);
router.get('/:id', getAssessment);
router.post('/', authorize('admin', 'teacher'), createAssessment);
router.put('/:id', authorize('admin', 'teacher'), updateAssessment);

module.exports = router;
