// client/src/pages/Students/components/Sidebar.jsx

import React, { useState } from 'react';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  BarChart3, 
  FileText, 
  GraduationCap,
  Menu
} from 'lucide-react';
import { mockStudent } from '../data/mockData';
import { colors } from '../utils/colors';

const Sidebar = ({ activeTab, setActiveTab, isCollapsed, onToggleCollapse }) => {

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'scheduled', label: 'Scheduled Tests', icon: Calendar },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'analyse', label: 'Analyse', icon: BarChart3 },
    { id: 'records', label: 'Records', icon: FileText }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-xl border-r border-gray-200 z-50 transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-20' : 'w-72'
    }`}>
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-8">
          <div className={`flex items-center space-x-3 transition-all duration-300 ${
            isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">EduGuide</h1>
              <p className="text-sm text-gray-500">AI Learning Platform</p>
            </div>
          </div>
          
          <button
            onClick={() => onToggleCollapse(!isCollapsed)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* When collapsed, show just the logo */}
        {isCollapsed && (
          <div className="flex justify-center mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  style={{
                    backgroundColor: activeTab === item.id ? colors.button : 'transparent'
                  }}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  <span className={`font-medium transition-all duration-300 ${
                    isCollapsed ? 'opacity-0 pointer-events-none w-0' : 'opacity-100 w-auto'
                  }`}>
                    {item.label}
                  </span>
                </button>
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Profile Section at Bottom */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="relative group">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full p-4 rounded-xl transition-all duration-200 ${
              activeTab === 'profile'
                ? 'text-white shadow-lg'
                : 'bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200'
            } ${isCollapsed ? 'p-2' : 'p-4'}`}
            style={{
              backgroundColor: activeTab === 'profile' ? colors.button : undefined
            }}
          >
            {isCollapsed ? (
              <div className="flex justify-center">
                <img
                  src={mockStudent.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              </div>
            ) : (
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
            )}
          </button>
          
          {/* Tooltip for collapsed profile */}
          {isCollapsed && (
            <div className="absolute left-full ml-2 bottom-0 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Profile Settings
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;