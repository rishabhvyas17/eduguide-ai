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
    <>
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-white shadow-xl border-r border-gray-200 z-50 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-72'
      }`}>
        
        {/* Header - Only show when expanded */}
        {!isCollapsed && (
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
          </div>
        )}

        {/* When collapsed, show just the logo centered */}
        {isCollapsed && (
          <div className="flex justify-center pt-6 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className={`space-y-2 ${isCollapsed ? 'px-3' : 'px-6'}`}>
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeTab === item.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: activeTab === item.id ? colors.button : 'transparent'
                  }}
                >
                  <IconComponent className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="font-medium">
                      {item.label}
                    </span>
                  )}
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

        {/* Profile Section at Bottom */}
        <div className={`absolute bottom-6 ${isCollapsed ? 'left-3 right-3' : 'left-6 right-6'}`}>
          <div className="relative group">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full rounded-xl transition-all duration-200 ${
                activeTab === 'profile'
                  ? 'text-white shadow-lg'
                  : 'bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200'
              } ${isCollapsed ? 'p-3' : 'p-4'}`}
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

      {/* Floating Burger Menu Button */}
      <button
        onClick={() => onToggleCollapse(!isCollapsed)}
        className={`fixed top-6 z-[60] p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 ease-in-out bg-white shadow-md border border-gray-200 ${
          isCollapsed ? 'left-28' : 'left-80'
        }`}
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>
    </>
  );
};

export default Sidebar;