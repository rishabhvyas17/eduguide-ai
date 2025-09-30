// client/src/pages/Students/components/FloatingTopBar.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

const FloatingTopBar = ({ activeTab, tabTitles, className }) => {
  const { t } = useLanguage();
  const darkOverlayOpacity = 0.06;

  const mainBarOpacity = {
    start: 0.02,
    middle: 0.05,
    end: 0.02
  };

  const blurAmount = 4;

  const borderOpacity = {
    main: 0.06,
    top: 0.15,
    bottom: 0.05
  };

  const shadowSettings = {
    mainShadow: {
      blur: 40,
      spread: -15,
      opacity: 0.1
    },
    insetHighlight: {
      opacity: 0.03
    },
    topHighlight: {
      opacity: 0.1
    },
    bottomShadow: {
      opacity: 0.05
    }
  };

  const bubbleOpacity = {
    topLeft: 0.2,
    bottomRight: 0.1,
    gradient: 0.08,
    gradientEnd: 0.02,
    border: 0.12,
    borderTop: 0.25,
    borderLeft: 0.15,
    innerHighlight: 0.3,
    innerShadow: 0.1,
    dropShadow: 0.15,
    innerGlow: 0.1
  };

  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const getTabSections = () => {
    switch (activeTab) {
      case 'dashboard':
        return [
          { id: 'greeting', label: t('dashboard.greeting.morning').split(',')[0] }, // Just "Good Morning" or "सुप्रभात"
          { id: 'stats', label: t('dashboard.overallPerformance') },
          { id: 'performance', label: t('dashboard.performanceTrend') },
          { id: 'calendar', label: t('dashboard.calendar') },
          { id: 'subjects', label: t('dashboard.subjectPerformance') }
        ];
      case 'analyse':
        return [
          { id: 'analytic-analyse', label: t('analyse.analyticAnalyse') },
          { id: 'critical-thinking', label: t('analyse.criticalThinking') }
        ];
      case 'scheduled':
        return [
          { id: 'calendar', label: t('scheduled.testCalendar') },
          { id: 'tests', label: t('scheduled.upcomingTests') },
          { id: 'start-exam', label: t('scheduled.startExam') },
          { id: 'results', label: t('scheduled.recentResults') }
        ];
      case 'learning':
        return [
          { id: 'recommendations', label: t('learning.aiRecommendations') },
          { id: 'resources', label: t('learning.learningResources') },
          { id: 'career', label: t('learning.careerAnalysis') },
          { id: 'goals', label: t('learning.studyGoals') }
        ];
      case 'records':
        return [
          { id: 'academic-records', label: t('records.academicRecords') },
          { id: 'aptitude-tests', label: t('records.aptitudeTests') },
          { id: 'interview-records', label: t('records.interviewRecords') }
        ];
      case 'profile':
        return [
          { id: 'personal', label: t('profile.personalInfo') },
          { id: 'contact', label: t('profile.contactSettings') },
          { id: 'goals', label: t('profile.academicGoals') },
          { id: 'parents', label: t('profile.parentInfo') }
        ];
      default:
        return [];
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const tabSections = getTabSections();

  // Calculate bubble position - it should be at discrete button positions only
  const calculateBubbleLeft = () => {
    if (tabSections.length === 0) return '0%';
    
    // Calculate the width of each button as a percentage
    const buttonWidthPercent = 100 / tabSections.length;
    
    // Position bubble at the exact button position
    const leftPosition = activeSection * buttonWidthPercent;
    
    return `${leftPosition}%`;
  };

  const bubbleLeft = calculateBubbleLeft();
  const bubbleWidth = tabSections.length > 0 ? `${100 / tabSections.length}%` : '0%';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = getTabSections();
      if (sections.length === 0) return;
      
      // Use a point 200px from top for better detection
      const scrollPosition = window.scrollY + 200;
      
      let currentSection = 0;
      let minDistance = Infinity;
      
      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          // If we're within the section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = index;
            minDistance = 0;
          } else if (minDistance > 0) {
            // Find closest section
            const distance = Math.abs(elementTop - scrollPosition);
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = index;
            }
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  return (
    <div className={`fixed top-6 ${className || 'left-80'} right-6 z-40`}>
      <div 
        className="backdrop-blur-lg rounded-3xl px-0 py-0 shadow-2xl"
        style={{
          background: `
          linear-gradient(180deg, rgba(0,0,0,${darkOverlayOpacity}) 0%, rgba(0,0,0,${darkOverlayOpacity * 0}) 100%),
            linear-gradient(135deg, 
              rgba(255, 255, 255, ${mainBarOpacity.start}) 0%, 
              rgba(255, 255, 255, ${mainBarOpacity.middle}) 50%, 
              rgba(255, 255, 255, ${mainBarOpacity.end}) 100%
            )
          `,
          backdropFilter: `blur(${blurAmount}px) saturate(1.2)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(1.2)`,
          border: `1px solid rgba(255, 255, 255, ${borderOpacity.main})`,
          borderTop: `1px solid rgba(255, 255, 255, ${borderOpacity.top})`,
          borderBottom: `1px solid rgba(0, 0, 0, ${borderOpacity.bottom})`,
          boxShadow: `
            0 20px ${shadowSettings.mainShadow.blur}px ${shadowSettings.mainShadow.spread}px rgba(0, 0, 0, ${shadowSettings.mainShadow.opacity}),
            0 0 0 1px rgba(255, 255, 255, ${shadowSettings.insetHighlight.opacity}) inset,
            0 1px 0 rgba(255, 255, 255, ${shadowSettings.topHighlight.opacity}) inset,
            0 -1px 0 rgba(0, 0, 0, ${shadowSettings.bottomShadow.opacity}) inset
          `
        }}
      >
        {tabSections.length > 0 && (
          <div className="relative">
            <div 
              className="flex items-center backdrop-blur-sm rounded-2xl p-2 border relative overflow-hidden"
              style={{
                backgroundColor: `rgba(255, 255, 255, 0.08)`,
                borderColor: `rgba(255, 255, 255, 0.06)`
              }}
            >
              {/* WATER BUBBLE - Snaps to button positions */}
              <div
                className="absolute h-8 backdrop-blur-sm rounded-2xl transition-all duration-500 ease-in-out z-10"
                style={{
                  left: bubbleLeft,
                  width: bubbleWidth,
                  top: '8px',
                  
                  background: `
                    radial-gradient(ellipse at top left, rgba(255, 255, 255, ${bubbleOpacity.topLeft}) 0%, rgba(255, 255, 255, ${bubbleOpacity.bottomRight}) 50%, transparent 70%),
                    radial-gradient(ellipse at bottom right, rgba(255, 255, 255, ${bubbleOpacity.bottomRight}) 0%, transparent 50%),
                    linear-gradient(45deg, rgba(255, 255, 255, ${bubbleOpacity.gradient}) 0%, rgba(255, 255, 255, ${bubbleOpacity.gradientEnd}) 100%)
                  `,
                  
                  border: `1px solid rgba(255, 255, 255, ${bubbleOpacity.border})`,
                  borderTop: `1px solid rgba(255, 255, 255, ${bubbleOpacity.borderTop})`,
                  borderLeft: `1px solid rgba(255, 255, 255, ${bubbleOpacity.borderLeft})`,
                  borderRadius: '16px',
                  
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, ${bubbleOpacity.innerHighlight}),
                    inset 0 -1px 0 rgba(0, 0, 0, ${bubbleOpacity.innerShadow}),
                    0 2px 8px rgba(0, 0, 0, ${bubbleOpacity.dropShadow}),
                    0 1px 3px rgba(255, 255, 255, ${bubbleOpacity.innerGlow}) inset
                  `
                }}
              />
              
              {/* Navigation buttons */}
              {tabSections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id);
                    setActiveSection(index);
                  }}
                  className={`relative z-20 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex-1 text-center ${
                    index === activeSection 
                      ? 'text-gray-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={{
                    textShadow: index === activeSection ? '0 0 20px rgba(255, 255, 255, 0.5)' : 'none'
                  }}
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