// client/src/pages/Students/components/FloatingTopBar.jsx

import React, { useState, useEffect } from 'react';

const FloatingTopBar = ({ activeTab, tabTitles, subTab, setSubTab, className }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTabSections = () => {
    switch (activeTab) {
      case 'dashboard':
        return [
          { id: 'greeting', label: 'Overview' },
          { id: 'stats', label: 'Quick Stats' },
          { id: 'performance', label: 'Performance' },
          { id: 'calendar', label: 'Calendar' },
          { id: 'subjects', label: 'Subjects' }
        ];
      case 'analyse':
        return subTab === 'academic' 
          ? [
              { id: 'overview', label: 'Overview' },
              { id: 'performance', label: 'Performance' },
              { id: 'detailed', label: 'Detailed Analysis' }
            ]
          : [
              { id: 'skills', label: 'Skills Radar' },
              { id: 'progress', label: 'Progress' },
              { id: 'recommendations', label: 'Recommendations' }
            ];
      case 'scheduled':
        return [
          { id: 'calendar', label: 'Calendar' },
          { id: 'tests', label: 'All Tests' },
          { id: 'start-exam', label: 'Start Exam' },
          { id: 'results', label: 'Results' }
        ];
      case 'learning':
        return [
          { id: 'recommendations', label: 'AI Recommendations' },
          { id: 'resources', label: 'Learning Resources' },
          { id: 'career', label: 'Career Analysis' },
          { id: 'goals', label: 'Study Goals' }
        ];
      case 'records':
        return [
          { id: 'main', label: 'Records Overview' }
        ];
      case 'profile':
        return [
          { id: 'personal', label: 'Personal Info' },
          { id: 'contact', label: 'Contact & Settings' },
          { id: 'goals', label: 'Academic Goals' },
          { id: 'parents', label: 'Parent Info' }
        ];
      default:
        return [];
    }
  };

  const getSubNavItems = () => {
    if (activeTab === 'analyse') {
      return [
        { id: 'academic', label: 'Academic Analysis' },
        { id: 'critical', label: 'Critical Thinking' }
      ];
    }
    if (activeTab === 'records') {
      return [
        { id: 'academic', label: 'Academic Records' },
        { id: 'aptitude', label: 'Aptitude Tests' },
        { id: 'interviews', label: 'Interview Records' }
      ];
    }
    return [];
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tabSections = getTabSections();
  const subNavItems = getSubNavItems();
  const bubblePosition = (activeSection / Math.max(tabSections.length - 1, 1)) * 100;

  return (
    <div className={`fixed top-6 ${className || 'left-80'} right-6 z-40`}>
      <div 
        className="backdrop-blur-3xl border border-white/10 rounded-3xl px-8 py-4 shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(60px)',
          WebkitBackdropFilter: 'blur(60px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: `
            0 32px 64px -12px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.08) inset,
            0 1px 0 rgba(255, 255, 255, 0.15) inset
          `
        }}
      >
        <div className="flex items-center justify-between">
          {/* Main Title */}
          
          {/* Sub Navigation */}
          {subNavItems.length > 0 && (
            <div className="flex items-center space-x-1 bg-white/15 backdrop-blur-md rounded-2xl p-1 border border-white/10">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSubTab(item.id)}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    subTab === item.id
                      ? 'bg-white/25 text-gray-800 shadow-lg backdrop-blur-sm border border-white/15'
                      : 'text-gray-600 hover:bg-white/10 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Section Navigation */}
        {tabSections.length > 0 && (
          <div className="mt-4 relative">
            <div className="flex items-center space-x-2 backdrop-blur-sm rounded-2xl p-2 border border-white/8">
              {/* Liquid Glass Bubble */}
              <div
                className="absolute h-8 bg-white/25 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-500 ease-in-out shadow-lg"
                style={{
                  left: `${8 + (bubblePosition * (100 - 16)) / 100}%`,
                  width: `${100 / tabSections.length - 1}%`,
                  transform: 'translateX(-50%)'
                }}
              />
              
              {tabSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                    setActiveSection(index);
                  }}
                  className="relative z-10 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300 flex-1 text-center"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingTopBar;