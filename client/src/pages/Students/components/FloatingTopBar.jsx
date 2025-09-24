// client/src/pages/Students/components/FloatingTopBar.jsx

import React from 'react';

const FloatingTopBar = ({ activeTab, tabTitles, subTab, setSubTab }) => {
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

  const subNavItems = getSubNavItems();

  return (
    <div className="fixed top-6 left-80 right-6 z-40">
      <div 
        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-5 shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 25px 45px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05) inset'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse shadow-lg"></div>
            <h1 className="text-xl font-semibold text-gray-800">{tabTitles[activeTab]}</h1>
          </div>
          
          {subNavItems.length > 0 && (
            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md rounded-2xl p-1">
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSubTab(item.id)}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    subTab === item.id
                      ? 'bg-white/30 text-gray-800 shadow-lg backdrop-blur-sm'
                      : 'text-gray-600 hover:bg-white/10 hover:text-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingTopBar;