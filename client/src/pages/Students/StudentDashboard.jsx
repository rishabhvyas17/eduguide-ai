// client/src/pages/Students/StudentDashboard.jsx

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import FloatingTopBar from './components/FloatingTopBar';
import DashboardTab from './components/DashboardTab';
import ScheduledTestsTab from './components/ScheduledTestsTab';
import LearningTab from './components/LearningTab';
import AnalyseTab from './components/AnalyseTab';
import RecordsTab from './components/RecordsTab';
import ProfileTab from './components/ProfileTab';
import { colors } from './utils/colors';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [subTab, setSubTab] = useState('academic'); // For analyse and records tabs
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const tabTitles = {
    dashboard: 'Student Dashboard',
    scheduled: 'Scheduled Tests & Events',
    learning: 'AI-Powered Learning Resources',
    analyse: 'Performance Analysis',
    records: 'Academic Records',
    profile: 'Profile & Settings'
  };

  // Reset subTab when changing main tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'analyse') {
      setSubTab('academic');
    } else if (tab === 'records') {
      setSubTab('academic');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'scheduled':
        return <ScheduledTestsTab />;
      case 'learning':
        return <LearningTab />;
      case 'analyse':
        return <AnalyseTab subTab={subTab} />;
      case 'records':
        return <RecordsTab subTab={subTab} />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <DashboardTab />;
    }
  };

  // Calculate positioning based on sidebar state
  const sidebarWidth = isSidebarCollapsed ? 'ml-20' : 'ml-72';
  const topBarLeft = isSidebarCollapsed ? 'left-36' : 'left-96'; // Account for burger button

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={handleTabChange}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={setIsSidebarCollapsed}
      />
      <FloatingTopBar 
        activeTab={activeTab} 
        tabTitles={tabTitles} 
        subTab={subTab} 
        setSubTab={setSubTab}
        className={topBarLeft}
      />
      
      <div className={`${sidebarWidth} pt-28 p-6 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;