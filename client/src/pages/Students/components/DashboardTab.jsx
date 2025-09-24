// client/src/pages/Students/components/DashboardTab.jsx

import React from 'react';
import { 
  TrendingUp,
  Award,
  Target,
  Brain,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import { mockStudent, mockAcademicData, mockPerformanceTrend, mockUpcomingTests } from '../data/mockData';
import { colors } from '../utils/colors';

const DashboardTab = () => {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? 'Good Morning' : currentHour < 17 ? 'Good Afternoon' : 'Good Evening';
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  // Generate calendar days
  const generateCalendar = () => {
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
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
  
  // Mock test dates for calendar highlighting
  const testDates = [5, 8, 12, 15, 22, 28];
  const piDates = [12, 25];
  
  return (
    <div className="space-y-6">
      {/* Greeting Section */}
      <div id="greeting" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{greeting}, {mockStudent.name}! 👋</h2>
            <p className="text-gray-600 mt-2">Ready to continue your learning journey?</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-purple-600">88%</div>
            <div className="text-sm text-gray-500">Overall Performance</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div id="stats" className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">89%</p>
              <p className="text-sm text-gray-600">Academic Average</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">85%</p>
              <p className="text-sm text-gray-600">Aptitude Score</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">3rd</p>
              <p className="text-sm text-gray-600">Class Rank</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">2</p>
              <p className="text-sm text-gray-600">Goals Achieved</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Performance Trend */}
        <div id="performance" className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockPerformanceTrend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip />
              <Line type="monotone" dataKey="academic" stroke={colors.primary} strokeWidth={3} dot={{ fill: colors.primary }} />
              <Line type="monotone" dataKey="aptitude" stroke={colors.success} strokeWidth={3} dot={{ fill: colors.success }} />
              <Line type="monotone" dataKey="overall" stroke={colors.warning} strokeWidth={3} dot={{ fill: colors.warning }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mini Calendar */}
        <div id="calendar" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Calendar</h3>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="text-center mb-3">
            <p className="text-sm font-medium text-gray-700">{currentMonth}</p>
          </div>
          <div className="grid grid-cols-7 gap-1 text-xs">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
              <div key={day} className="text-center text-gray-500 font-medium p-1">{day}</div>
            ))}
            {calendarDays.slice(0, 35).map((date, index) => {
              const day = date.getDate();
              const isCurrentMonth = date.getMonth() === today.getMonth();
              const isToday = date.toDateString() === today.toDateString();
              const hasTest = testDates.includes(day) && isCurrentMonth;
              const hasPI = piDates.includes(day) && isCurrentMonth;
              
              return (
                <div
                  key={index}
                  className={`text-center p-1 rounded cursor-pointer ${
                    !isCurrentMonth ? 'text-gray-300' :
                    isToday ? 'bg-purple-600 text-white font-semibold' :
                    hasPI ? 'bg-green-100 text-green-800 font-medium' :
                    hasTest ? 'bg-blue-100 text-blue-800 font-medium' :
                    'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Tests</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Interviews</span>
            </div>
          </div>
        </div>

        {/* Upcoming Tests */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming</h3>
          <div className="space-y-3">
            {mockUpcomingTests.slice(0, 3).map((test) => (
              <div key={test.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  test.type === 'aptitude' ? 'bg-purple-500' :
                  test.type === 'academic' ? 'bg-blue-500' :
                  test.type === 'interview' ? 'bg-green-500' : 'bg-orange-500'
                }`}></div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-gray-800">{test.title}</p>
                  <p className="text-xs text-gray-600">{test.date} at {test.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Performance */}
      <div id="subjects" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject Performance</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={mockAcademicData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="subject" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Bar dataKey="current" fill={colors.primary} radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill={colors.graph} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardTab;