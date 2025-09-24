// client/src/pages/Students/components/DashboardTab.jsx

import React from 'react';
import { 
  TrendingUp,
  Award,
  Target,
  Brain
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
  
  return (
    <div className="space-y-6">
      {/* Greeting Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{greeting}, {mockStudent.name}! 👋</h2>
            <p className="text-purple-100 mt-2">Ready to continue your learning journey?</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">88%</div>
            <div className="text-sm text-purple-200">Overall Performance</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 gap-6">
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

      <div className="grid grid-cols-3 gap-6">
        {/* Performance Trend */}
        <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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

        {/* Upcoming Tests */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Tests</h3>
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
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
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