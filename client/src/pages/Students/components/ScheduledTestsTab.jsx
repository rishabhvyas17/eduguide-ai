// client/src/pages/Students/components/ScheduledTestsTab.jsx

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { mockUpcomingTests } from '../data/mockData';

const ScheduledTestsTab = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const generateCalendar = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const calendarDays = generateCalendar();
  const today = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  // Mock dates for different event types
  const testDates = [5, 8, 15, 22, 28]; // Academic tests - blue
  const aptitudeDates = [5, 12, 26]; // Aptitude tests - purple
  const piDates = [12, 25]; // Personal interviews - green
  const eventDates = [10, 18, 30]; // Other events - orange

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getEventType = (day, isCurrentMonth) => {
    if (!isCurrentMonth) return null;
    if (piDates.includes(day)) return 'pi';
    if (aptitudeDates.includes(day)) return 'aptitude';
    if (testDates.includes(day)) return 'test';
    if (eventDates.includes(day)) return 'event';
    return null;
  };

  const getEventStyle = (eventType, isToday) => {
    if (isToday) return 'bg-purple-600 text-white font-bold';
    switch (eventType) {
      case 'pi': return 'bg-green-100 text-green-800 font-semibold';
      case 'aptitude': return 'bg-purple-100 text-purple-800 font-semibold';
      case 'test': return 'bg-blue-100 text-blue-800 font-semibold';
      case 'event': return 'bg-orange-100 text-orange-800 font-semibold';
      default: return 'hover:bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        {/* Calendar */}
        <div id="calendar" className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Test Calendar</h3>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => navigateMonth(-1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-sm font-medium text-gray-700 px-3">{currentMonth}</span>
              <button 
                onClick={() => navigateMonth(1)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center text-sm mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="font-semibold text-gray-600 p-2">{day}</div>
            ))}
            
            {calendarDays.map((date, i) => {
              const day = date.getDate();
              const isCurrentMonth = date.getMonth() === currentDate.getMonth();
              const isToday = date.toDateString() === today.toDateString();
              const eventType = getEventType(day, isCurrentMonth);
              
              return (
                <div
                  key={i}
                  className={`p-2 rounded-lg cursor-pointer transition-colors text-center ${
                    !isCurrentMonth 
                      ? 'text-gray-300' 
                      : getEventStyle(eventType, isToday) || 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span className="text-gray-600">Academic Tests</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span className="text-gray-600">Aptitude Tests</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-gray-600">Interviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <span className="text-gray-600">Events</span>
            </div>
          </div>
        </div>

        {/* Test List */}
        <div id="tests" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Tests</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {mockUpcomingTests.map((test) => (
              <div key={test.id} className="border-l-4 border-purple-500 bg-purple-50 p-3 rounded-lg">
                <h4 className="font-semibold text-gray-800 text-sm">{test.title}</h4>
                <div className="flex items-center space-x-2 mt-1">
                  <CalendarIcon className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">{test.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-600">{test.time}</span>
                </div>
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

        {/* Start Exam Card */}
        <div id="start-exam" className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white shadow-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2">Ready to Take a Test?</h3>
            <p className="text-purple-100 text-sm mb-4">Start your next scheduled assessment</p>
            
            <div className="space-y-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <p className="font-semibold text-sm">Next: Monthly Aptitude Test</p>
                <p className="text-xs text-purple-200">Scheduled for Oct 5, 2025</p>
                <p className="text-xs text-purple-200">Duration: 30 minutes</p>
              </div>
              
              <button className="w-full bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                Start Test
              </button>
              
              <button className="w-full bg-white/10 backdrop-blur-sm text-white font-medium py-2 px-4 rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
                View Instructions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Results */}
      <div id="results" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Test Results</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 font-semibold text-gray-800">Test Name</th>
                <th className="text-left py-3 font-semibold text-gray-800">Date</th>
                <th className="text-left py-3 font-semibold text-gray-800">Score</th>
                <th className="text-left py-3 font-semibold text-gray-800">Grade</th>
                <th className="text-left py-3 font-semibold text-gray-800">Status</th>
                <th className="text-left py-3 font-semibold text-gray-800">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Mathematics Mid-term", date: "2025-09-20", score: "88/100", grade: "A", status: "completed" },
                { name: "Aptitude Test - August", date: "2025-08-30", score: "85/100", grade: "A", status: "completed" },
                { name: "Physics Unit Test", date: "2025-08-25", score: "92/100", grade: "A+", status: "completed" },
                { name: "English Essay", date: "2025-08-18", score: "78/100", grade: "B+", status: "completed" }
              ].map((result, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
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
                  <td className="py-3">
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                      View Details
                    </button>
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