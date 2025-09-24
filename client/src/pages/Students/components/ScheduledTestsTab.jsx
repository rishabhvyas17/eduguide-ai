// client/src/pages/Students/components/ScheduledTestsTab.jsx

import React from 'react';
import { mockUpcomingTests } from '../data/mockData';

const ScheduledTestsTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Test Calendar</h3>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            <div className="font-semibold text-gray-600 p-2">Sun</div>
            <div className="font-semibold text-gray-600 p-2">Mon</div>
            <div className="font-semibold text-gray-600 p-2">Tue</div>
            <div className="font-semibold text-gray-600 p-2">Wed</div>
            <div className="font-semibold text-gray-600 p-2">Thu</div>
            <div className="font-semibold text-gray-600 p-2">Fri</div>
            <div className="font-semibold text-gray-600 p-2">Sat</div>
            
            {[...Array(35)].map((_, i) => {
              const day = i - 5;
              const hasTest = [5, 8, 12, 15, 22, 28].includes(day);
              return (
                <div
                  key={i}
                  className={`p-2 rounded-lg cursor-pointer transition-colors ${
                    day > 0 && day <= 31
                      ? hasTest
                        ? 'bg-purple-100 text-purple-800 font-semibold'
                        : 'hover:bg-gray-100'
                      : 'text-gray-300'
                  }`}
                >
                  {day > 0 && day <= 31 ? day : ''}
                </div>
              );
            })}
          </div>
        </div>

        {/* Test List */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">All Tests</h3>
          <div className="space-y-4">
            {mockUpcomingTests.map((test) => (
              <div key={test.id} className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800">{test.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{test.date}</p>
                <p className="text-sm text-gray-600">{test.time}</p>
                <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                  test.type === 'aptitude' ? 'bg-purple-100 text-purple-800' :
                  test.type === 'academic' ? 'bg-blue-100 text-blue-800' :
                  test.type === 'interview' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {test.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Results */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Test Results</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 font-semibold text-gray-800">Test Name</th>
                <th className="text-left py-2 font-semibold text-gray-800">Date</th>
                <th className="text-left py-2 font-semibold text-gray-800">Score</th>
                <th className="text-left py-2 font-semibold text-gray-800">Grade</th>
                <th className="text-left py-2 font-semibold text-gray-800">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Mathematics Mid-term", date: "2025-09-20", score: "88/100", grade: "A", status: "completed" },
                { name: "Aptitude Test - August", date: "2025-08-30", score: "85/100", grade: "A", status: "completed" },
                { name: "Physics Unit Test", date: "2025-08-25", score: "92/100", grade: "A+", status: "completed" },
                { name: "English Essay", date: "2025-08-18", score: "78/100", grade: "B+", status: "completed" }
              ].map((result, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-800">{result.name}</td>
                  <td className="py-3 text-gray-600">{result.date}</td>
                  <td className="py-3 font-semibold text-purple-600">{result.score}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      result.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      result.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {result.grade}
                    </span>
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      Completed
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduledTestsTab;