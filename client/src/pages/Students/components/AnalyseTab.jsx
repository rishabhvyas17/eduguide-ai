// client/src/pages/Students/components/AnalyseTab.jsx

import React from 'react';
import { 
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { mockAcademicData, mockAptitudeData } from '../data/mockData';
import { colors, pieColors } from '../utils/colors';

const AnalyseTab = () => {
  return (
    <div className="space-y-6">
      {/* Academic/Analytic Analysis Section */}
      <div id="analytic-analyse" className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Performance Analysis</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Subject-wise Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockAcademicData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="subject" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip />
                  <Bar dataKey="current" fill={colors.primary} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="previous" fill={colors.graph} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mockAcademicData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ subject, current }) => `${subject}: ${current}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="current"
                  >
                    {mockAcademicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Analysis */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Academic Analysis</h3>
            <div className="grid grid-cols-3 gap-6">
              {mockAcademicData.map((subject, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{subject.subject}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current:</span>
                      <span className="font-semibold text-purple-600">{subject.current}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Previous:</span>
                      <span className="font-medium text-gray-700">{subject.previous}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Target:</span>
                      <span className="font-medium text-gray-700">{subject.target}%</span>
                    </div>
                    <div className="pt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${(subject.current / subject.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Critical Thinking Section */}
      <div id="critical-thinking" className="space-y-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Critical Thinking & Skills Analysis</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Skill Radar Chart</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={mockAptitudeData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar name="Score" dataKey="score" stroke={colors.primary} fill={colors.primary} fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Skill Progress</h3>
              <div className="space-y-4">
                {mockAptitudeData.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-800">{skill.skill}</span>
                      <span className="text-sm font-semibold text-purple-600">{skill.score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skill Recommendations */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Skill Development Recommendations</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-4 border-red-400 bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800">Areas for Improvement</h4>
                <ul className="list-disc list-inside text-sm text-red-700 mt-2 space-y-1">
                  <li>Communication skills need practice</li>
                  <li>Focus on problem-solving strategies</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-400 bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">Strengths</h4>
                <ul className="list-disc list-inside text-sm text-green-700 mt-2 space-y-1">
                  <li>Excellent numerical ability</li>
                  <li>Strong creative thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyseTab;