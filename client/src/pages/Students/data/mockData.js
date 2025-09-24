// client/src/pages/Students/data/mockData.js

export const mockStudent = {
  name: "Arjun Sharma",
  grade: "10th Standard",
  school: "Delhi Public School",
  profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  id: "DPS2024001",
  section: "A",
  rollNumber: "15",
  dateOfBirth: "2009-03-15",
  address: "123, Green Park, New Delhi - 110016",
  bloodGroup: "O+",
  email: "arjun.sharma@student.dps.edu.in",
  phone: "+91 98765 43210"
};

export const mockAcademicData = [
  { subject: "Mathematics", current: 88, previous: 82, target: 95 },
  { subject: "Physics", current: 85, previous: 78, target: 90 },
  { subject: "Chemistry", current: 82, previous: 85, target: 88 },
  { subject: "Biology", current: 90, previous: 87, target: 95 },
  { subject: "English", current: 78, previous: 75, target: 85 },
  { subject: "Hindi", current: 85, previous: 83, target: 90 }
];

export const mockPerformanceTrend = [
  { month: "Jan", academic: 78, aptitude: 72, overall: 75 },
  { month: "Feb", academic: 82, aptitude: 75, overall: 78 },
  { month: "Mar", academic: 85, aptitude: 78, overall: 81 },
  { month: "Apr", academic: 83, aptitude: 82, overall: 82 },
  { month: "May", academic: 87, aptitude: 85, overall: 86 },
  { month: "Jun", academic: 89, aptitude: 88, overall: 88 }
];

export const mockAptitudeData = [
  { skill: "Logical Reasoning", score: 85, maxScore: 100 },
  { skill: "Problem Solving", score: 78, maxScore: 100 },
  { skill: "Numerical Ability", score: 92, maxScore: 100 },
  { skill: "Communication", score: 75, maxScore: 100 },
  { skill: "Creativity", score: 88, maxScore: 100 },
  { skill: "Critical Thinking", score: 82, maxScore: 100 }
];

export const mockUpcomingTests = [
  { id: 1, title: "Monthly Aptitude Test", date: "2025-10-05", time: "10:00 AM", type: "aptitude", status: "upcoming" },
  { id: 2, title: "Mathematics Unit Test", date: "2025-10-08", time: "9:00 AM", type: "academic", status: "upcoming" },
  { id: 3, title: "Personal Interview Session", date: "2025-10-12", time: "2:00 PM", type: "interview", status: "scheduled" },
  { id: 4, title: "Physics Lab Assessment", date: "2025-10-15", time: "11:00 AM", type: "practical", status: "upcoming" }
];

export const mockCareerRecommendations = [
  { field: "Engineering", match: 92, reason: "Strong in Math & Physics" },
  { field: "Medicine", match: 88, reason: "Excellent Biology scores" },
  { field: "Research", match: 85, reason: "High analytical thinking" },
  { field: "Technology", match: 82, reason: "Good problem-solving skills" }
];

export const mockLearningResources = [
  { subject: "Mathematics", resources: ["Advanced Calculus Practice", "Geometry Problem Sets"], priority: "high" },
  { subject: "English", resources: ["Writing Skills Enhancement", "Grammar Fundamentals"], priority: "medium" },
  { subject: "Physics", resources: ["Conceptual Physics Videos", "Lab Experiment Guides"], priority: "low" }
];