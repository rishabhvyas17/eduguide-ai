const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  assessmentType: {
    type: String,
    enum: ['aptitude', 'personality', 'interest'],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  scores: {
    verbal: { type: Number, min: 0, max: 100 },
    numerical: { type: Number, min: 0, max: 100 },
    logical: { type: Number, min: 0, max: 100 },
    spatial: { type: Number, min: 0, max: 100 }
  },
  completedAt: Date,
  duration: Number, // in minutes
  totalQuestions: Number,
  correctAnswers: Number
}, {
  timestamps: true
});

// Index for efficient queries
assessmentSchema.index({ studentId: 1, assessmentType: 1 });
assessmentSchema.index({ status: 1 });

module.exports = mongoose.model('Assessment', assessmentSchema);
