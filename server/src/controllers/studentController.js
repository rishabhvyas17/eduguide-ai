const Student = require('../models/Student');
const User = require('../models/User');

// Get all students
const getStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10, grade, section } = req.query;
    
    const query = {};
    if (grade) query.grade = grade;
    if (section) query.section = section;

    const students = await Student.find(query)
      .populate('userId', 'firstName lastName email')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Student.countDocuments(query);

    res.json({
      students,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single student
const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id)
      .populate('userId', 'firstName lastName email');

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ student });
  } catch (error) {
    console.error('Get student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new student
const createStudent = async (req, res) => {
  try {
    const studentData = req.body;

    // Generate unique student ID
    const count = await Student.countDocuments();
    studentData.studentId = `STU${(count + 1).toString().padStart(4, '0')}`;

    const student = new Student(studentData);
    await student.save();

    const populatedStudent = await Student.findById(student._id)
      .populate('userId', 'firstName lastName email');

    res.status(201).json({
      message: 'Student created successfully',
      student: populatedStudent
    });
  } catch (error) {
    console.error('Create student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('userId', 'firstName lastName email');

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({
      message: 'Student updated successfully',
      student
    });
  } catch (error) {
    console.error('Update student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Delete student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
};
