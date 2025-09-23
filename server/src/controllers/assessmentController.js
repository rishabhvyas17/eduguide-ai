const Assessment = require('../models/Assessment');

// Get all assessments
const getAssessments = async (req, res) => {
  try {
    const { page = 1, limit = 10, studentId, assessmentType, status } = req.query;
    
    const query = {};
    if (studentId) query.studentId = studentId;
    if (assessmentType) query.assessmentType = assessmentType;
    if (status) query.status = status;

    const assessments = await Assessment.find(query)
      .populate('studentId', 'studentId userId')
      .populate({
        path: 'studentId',
        populate: {
          path: 'userId',
          select: 'firstName lastName'
        }
      })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });

    const total = await Assessment.countDocuments(query);

    res.json({
      assessments,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get assessments error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single assessment
const getAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id)
      .populate('studentId', 'studentId userId')
      .populate({
        path: 'studentId',
        populate: {
          path: 'userId',
          select: 'firstName lastName'
        }
      });

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    res.json({ assessment });
  } catch (error) {
    console.error('Get assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new assessment
const createAssessment = async (req, res) => {
  try {
    const assessment = new Assessment(req.body);
    await assessment.save();

    const populatedAssessment = await Assessment.findById(assessment._id)
      .populate('studentId', 'studentId userId')
      .populate({
        path: 'studentId',
        populate: {
          path: 'userId',
          select: 'firstName lastName'
        }
      });

    res.status(201).json({
      message: 'Assessment created successfully',
      assessment: populatedAssessment
    });
  } catch (error) {
    console.error('Create assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update assessment
const updateAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('studentId', 'studentId userId')
    .populate({
      path: 'studentId',
      populate: {
        path: 'userId',
        select: 'firstName lastName'
      }
    });

    if (!assessment) {
      return res.status(404).json({ message: 'Assessment not found' });
    }

    res.json({
      message: 'Assessment updated successfully',
      assessment
    });
  } catch (error) {
    console.error('Update assessment error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAssessments,
  getAssessment,
  createAssessment,
  updateAssessment
};
