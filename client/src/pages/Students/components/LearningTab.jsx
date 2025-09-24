// client/src/pages/Students/components/LearningTab.jsx

import React from 'react';
import { 
  BookOpen,
  ChevronRight,
  Zap
} from 'lucide-react';
import { mockCareerRecommendations, mockLearningResources } from '../data/mockData';

const LearningTab = () => {
  return (
    <div className="space-y-6">
      {/* AI Recommendations */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="w-6 h-6" />
          <h2 className="text-xl font-bold">AI-Powered Learning Recommendations</h2>
        </div>
        <p className="text-blue-100">Based on your performance analysis, here are personalized resources to boost your learning!</p>
      </div>

      {/* Learning Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockLearningResources.map((resource, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">{resource.subject}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                resource.priority === 'high' ? 'bg-red-100 text-red-800' :
                resource.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {resource.priority} priority
              </span>
            </div>
            <div className="space-y-3">
              {resource.resources.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-800">{item}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Career Recommendations */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Career Fit Analysis</h3>
        <div className="grid grid-cols-2 gap-4">
          {mockCareerRecommendations.map((career, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800">{career.field}</h4>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{career.match}%</div>
                  <div className="text-xs text-gray-500">Match</div>
                </div>
              </div>
              <p className="text-sm text-gray-600">{career.reason}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${career.match}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Goals */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Study Goals</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">8/10</div>
            <div className="text-sm text-gray-600">Practice Tests</div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">15/20</div>
            <div className="text-sm text-gray-600">Study Hours</div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">5/5</div>
            <div className="text-sm text-gray-600">Assignments</div>
            <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningTab;