const { body, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation errors',
      errors: errors.array()
    });
  }
  next();
};

// User validation rules
const userValidationRules = () => {
  return [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('role').isIn(['admin', 'teacher', 'parent', 'student']).withMessage('Invalid role')
  ];
};

// Student validation rules
const studentValidationRules = () => {
  return [
    body('grade').isInt({ min: 1, max: 12 }).withMessage('Grade must be between 1 and 12'),
    body('section').notEmpty().withMessage('Section is required'),
    body('rollNumber').notEmpty().withMessage('Roll number is required'),
    body('dateOfBirth').isISO8601().withMessage('Valid date of birth is required'),
    body('parentInfo.fatherName').notEmpty().withMessage('Father name is required'),
    body('parentInfo.motherName').notEmpty().withMessage('Mother name is required'),
    body('parentInfo.contactNumber').isMobilePhone('en-IN').withMessage('Valid contact number is required'),
    body('parentInfo.email').isEmail().withMessage('Valid parent email is required')
  ];
};

module.exports = {
  handleValidationErrors,
  userValidationRules,
  studentValidationRules
};
