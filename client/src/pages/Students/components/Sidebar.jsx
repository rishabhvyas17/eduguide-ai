// client/src/pages/Students/components/Sidebar.jsx

import React from 'react';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  BarChart3, 
  FileText, 
  GraduationCap
} from 'lucide-react';
import { mockStudent } from '../data/mockData';
import { colors } from '../utils/colors';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'scheduled', label: 'Scheduled Tests', icon: Calendar },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'analyse', label: 'Analyse', icon: BarChart3 },
    { id: 'records', label: 'Records', icon: FileText }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-white shadow-xl border-r border-gray-200 z-50">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">EduGuide</h1>
            <p className="text-sm text-gray-500">AI Learning Platform</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                style={{
                  backgroundColor: activeTab === item.id ? colors.button : 'transparent'
                }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Profile Section at Bottom - Clickable */}
      <div className="absolute bottom-6 left-6 right-6">
        <button
          onClick={() => setActiveTab('profile')}
          className={`w-full p-4 rounded-xl transition-all duration-200 ${
            activeTab === 'profile'
              ? 'text-white shadow-lg'
              : 'bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200'
          }`}
          style={{
            backgroundColor: activeTab === 'profile' ? colors.button : undefined
          }}
        >
          <div className="flex items-center space-x-3">
            <img
              src={mockStudent.profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div className="text-left">
              <p className={`font-semibold ${activeTab === 'profile' ? 'text-white' : 'text-gray-800'}`}>
                {mockStudent.name}
              </p>
              <p className={`text-sm ${activeTab === 'profile' ? 'text-gray-200' : 'text-gray-600'}`}>
                {mockStudent.grade}
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;