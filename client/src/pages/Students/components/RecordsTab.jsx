// client/src/pages/Students/components/RecordsTab.jsx

import React from 'react';

const RecordsTab = ({ subTab }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            {subTab === 'academic' ? 'Academic Records' : 
             subTab === 'aptitude' ? 'Aptitude Test History' : 'Personal Interview Records'}
          </h3>
        </div>
        <div className="p-6">
          {subTab === 'academic' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 font-semibold text-gray-800">Subject</th>
                    <th className="text-left py-3 font-semibold text-gray-800">Term</th>
                    <th className="text-left py-3 font-semibold text-gray-800">Marks</th>
                    <th className="text-left py-3 font-semibold text-gray-800">Grade</th>
                    <th className="text-left py-3 font-semibold text-gray-800">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { subject: "Mathematics", term: "Mid-term", marks: "88/100", grade: "A", date: "2025-09-20" },
                    { subject: "Physics", term: "Unit Test", marks: "92/100", grade: "A+", date: "2025-08-25" },
                    { subject: "Chemistry", term: "Mid-term", marks: "85/100", grade: "A", date: "2025-09-18" },
                    { subject: "Biology", term: "Unit Test", marks: "90/100", grade: "A+", date: "2025-08-20" },
                    { subject: "English", term: "Essay", marks: "78/100", grade: "B+", date: "2025-08-18" },
                    { subject: "Hindi", term: "Unit Test", marks: "85/100", grade: "A", date: "2025-08-15" },
                    { subject: "Mathematics", term: "Unit Test", marks: "92/100", grade: "A+", date: "2025-08-10" },
                    { subject: "Physics", term: "Lab Test", marks: "87/100", grade: "A", date: "2025-08-05" }
                  ].map((record, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 font-medium text-gray-800">{record.subject}</td>
                      <td className="py-3 text-gray-600">{record.term}</td>
                      <td className="py-3 font-semibold text-purple-600">{record.marks}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          record.grade.includes('A') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {record.grade}
                        </span>
                      </td>
                      <td className="py-3 text-gray-600">{record.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {subTab === 'aptitude' && (
            <div className="space-y-4">
              {[
                { 
                  date: "2025-09-01", 
                  score: "85/100", 
                  skills: ["Logical: 88", "Problem-solving: 82", "Numerical: 90", "Communication: 75", "Creativity: 88"],
                  overall: "Excellent",
                  improvement: "+3 points"
                },
                { 
                  date: "2025-08-01", 
                  score: "82/100", 
                  skills: ["Logical: 85", "Problem-solving: 78", "Numerical: 88", "Communication: 72", "Creativity: 85"],
                  overall: "Good",
                  improvement: "+4 points"
                },
                { 
                  date: "2025-07-01", 
                  score: "78/100", 
                  skills: ["Logical: 80", "Problem-solving: 75", "Numerical: 82", "Communication: 70", "Creativity: 82"],
                  overall: "Good",
                  improvement: "+2 points"
                },
                { 
                  date: "2025-06-01", 
                  score: "76/100", 
                  skills: ["Logical: 78", "Problem-solving: 73", "Numerical: 80", "Communication: 68", "Creativity: 80"],
                  overall: "Satisfactory",
                  improvement: "Base score"
                }
              ].map((test, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-800">Monthly Aptitude Test</h4>
                    <div className="text-right">
                      <div className="font-semibold text-purple-600 text-lg">{test.score}</div>
                      <div className="text-sm text-gray-600">{test.date}</div>
                      <div className={`text-xs px-2 py-1 rounded-full mt-1 ${
                        test.overall === 'Excellent' ? 'bg-green-100 text-green-800' :
                        test.overall === 'Good' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {test.overall}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {test.skills.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs text-center">{skill}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Improvement from previous:</span>
                    <span className={`text-sm font-medium ${
                      test.improvement.includes('+') ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      {test.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {subTab === 'interviews' && (
            <div className="space-y-4">
              {[
                { 
                  date: "2025-08-15", 
                  counselor: "Ms. Priya Sharma", 
                  topics: ["Career interests", "Study habits", "Future goals"], 
                  rating: "Excellent",
                  notes: "Student shows strong interest in STEM fields. Good communication skills and clear academic goals.",
                  duration: "45 minutes",
                  recommendations: ["Focus on advanced mathematics", "Consider science olympiads"]
                },
                { 
                  date: "2025-06-20", 
                  counselor: "Dr. Raj Kumar", 
                  topics: ["Academic goals", "Extracurricular activities", "Time management"], 
                  rating: "Good",
                  notes: "Student is well-rounded but needs better time management. Shows potential in multiple areas.",
                  duration: "40 minutes",
                  recommendations: ["Join debate club", "Work on presentation skills"]
                },
                { 
                  date: "2025-04-10", 
                  counselor: "Ms. Priya Sharma", 
                  topics: ["Learning style", "Subject preferences", "Social interactions"], 
                  rating: "Good",
                  notes: "Student prefers visual learning methods. Works well in group settings. Strong in science subjects.",
                  duration: "35 minutes",
                  recommendations: ["Use more visual study aids", "Continue group study sessions"]
                }
              ].map((interview, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-800">Personal Interview Session</h4>
                      <p className="text-sm text-gray-600">Counselor: {interview.counselor}</p>
                      <p className="text-xs text-gray-500">Duration: {interview.duration}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        interview.rating === 'Excellent' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {interview.rating}
                      </span>
                      <div className="text-sm text-gray-600 mt-1">{interview.date}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-2">Topics discussed:</p>
                    <div className="flex flex-wrap gap-2">
                      {interview.topics.map((topic, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">{topic}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">Notes:</p>
                    <p className="text-sm text-gray-600 italic">{interview.notes}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Recommendations:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {interview.recommendations.map((rec, idx) => (
                        <li key={idx}>{rec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordsTab;