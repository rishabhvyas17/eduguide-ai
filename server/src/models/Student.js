const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  grade: {
    type: Number,
    required: [true, 'Grade is required'],
    min: 1,
    max: 12
  },
  section: {
    type: String,
    required: [true, 'Section is required'],
    trim: true
  },
  rollNumber: {
    type: String,
    required: [true, 'Roll number is required'],
    trim: true
  },
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required']
  },
  parentInfo: {
    fatherName: {
      type: String,
      required: [true, 'Father name is required'],
      trim: true
    },
    motherName: {
      type: String,
      required: [true, 'Mother name is required'],
      trim: true
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required'],
      match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
    },
    email: {
      type: String,
      required: [true, 'Parent email is required'],
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    }
  },
  academicHistory: [{
    year: String,
    grade: Number,
    percentage: Number,
    rank: Number
  }]
}, {
  timestamps: true
});

// Create compound index for efficient queries
studentSchema.index({ grade: 1, section: 1 });
studentSchema.index({ studentId: 1 });

module.exports = mongoose.model('Student', studentSchema);
