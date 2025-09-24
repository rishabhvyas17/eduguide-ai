// client/src/pages/Students/components/FloatingTopBar.jsx
// CUSTOMIZABLE VERSION - Adjust these values to your preference

import React, { useState, useEffect } from 'react';

const FloatingTopBar = ({ activeTab, tabTitles, subTab, setSubTab, className }) => {
  // ... existing state and functions remain the same ...

  // 🎨 CUSTOMIZATION VARIABLES - MODIFY THESE VALUES:
  
  // 1. MAIN BAR TRANSPARENCY (0.01 = almost invisible, 0.1 = more visible)
  const mainBarOpacity = {
    start: 0.02,    // Top gradient opacity
    middle: 0.05,   // Middle gradient opacity  
    end: 0.02       // Bottom gradient opacity
  };

  // 2. BLUR AMOUNT (10px = light blur, 60px = heavy blur)
  const blurAmount = 40; // Current: 40px

  // 3. BORDER TRANSPARENCY (0.01 = barely visible, 0.2 = strong border)
  const borderOpacity = {
    main: 0.06,     // Main border
    top: 0.15,      // Top highlight
    bottom: 0.05    // Bottom shadow
  };

  // 4. SHADOW INTENSITY
  const shadowSettings = {
    mainShadow: {
      blur: 40,           // Shadow blur radius
      spread: -15,        // Shadow spread
      opacity: 0.2        // Shadow darkness (0.1 = light, 0.5 = dark)
    },
    insetHighlight: {
      opacity: 0.03       // Inner glow strength
    },
    topHighlight: {
      opacity: 0.1        // Top edge highlight
    },
    bottomShadow: {
      opacity: 0.05       // Bottom edge shadow
    }
  };

  // 5. WATER BUBBLE TRANSPARENCY
  const bubbleOpacity = {
    topLeft: 0.2,         // Top-left highlight (main shine)
    bottomRight: 0.1,     // Bottom-right subtle glow
    gradient: 0.08,       // Overall gradient opacity
    gradientEnd: 0.02,    // Gradient fade-out
    border: 0.12,         // Bubble border
    borderTop: 0.25,      // Top border highlight
    borderLeft: 0.15,     // Left border highlight
    innerHighlight: 0.3,  // Inner top highlight
    innerShadow: 0.1,     // Inner bottom shadow
    dropShadow: 0.15,     // Drop shadow below bubble
    innerGlow: 0.1        // Inner glow effect
  };

  // 6. SUB NAVIGATION TRANSPARENCY
  const subNavOpacity = {
    background: 0.08,     // Sub nav background
    border: 0.06,         // Sub nav border
    activeButton: 0.15,   // Active button background
    activeBorder: 0.1     // Active button border
  };

  // ... existing functions remain the same ...

  return (
    <div className={`fixed top-6 ${className || 'left-80'} right-6 z-40`}>
      <div 
        className="backdrop-blur-lg border rounded-3xl px-6 py-3 shadow-2xl"
        style={{
          // 🎨 MAIN BAR BACKGROUND - Adjust mainBarOpacity values above
          background: `
            linear-gradient(135deg, 
              rgba(255, 255, 255, ${mainBarOpacity.start}) 0%, 
              rgba(255, 255, 255, ${mainBarOpacity.middle}) 50%, 
              rgba(255, 255, 255, ${mainBarOpacity.end}) 100%
            )
          `,
          
          // 🌫️ BLUR EFFECT - Adjust blurAmount above
          backdropFilter: `blur(${blurAmount}px) saturate(1.2)`,
          WebkitBackdropFilter: `blur(${blurAmount}px) saturate(1.2)`,
          
          // 🖼️ BORDERS - Adjust borderOpacity values above
          border: `1px solid rgba(255, 255, 255, ${borderOpacity.main})`,
          borderTop: `1px solid rgba(255, 255, 255, ${borderOpacity.top})`,
          borderBottom: `1px solid rgba(0, 0, 0, ${borderOpacity.bottom})`,
          
          // 🌑 SHADOWS - Adjust shadowSettings values above
          boxShadow: `
            0 20px ${shadowSettings.mainShadow.blur}px ${shadowSettings.mainShadow.spread}px rgba(0, 0, 0, ${shadowSettings.mainShadow.opacity}),
            0 0 0 1px rgba(255, 255, 255, ${shadowSettings.insetHighlight.opacity}) inset,
            0 1px 0 rgba(255, 255, 255, ${shadowSettings.topHighlight.opacity}) inset,
            0 -1px 0 rgba(0, 0, 0, ${shadowSettings.bottomShadow.opacity}) inset
          `
        }}
      >
        {/* SUB NAVIGATION */}
        {showSubNav && (
          <div className="flex items-center justify-center mb-3">
            <div 
              className="flex items-center space-x-1 backdrop-blur-sm rounded-2xl p-1 border"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${subNavOpacity.background})`,
                borderColor: `rgba(255, 255, 255, ${subNavOpacity.border})`
              }}
            >
              {subNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSubTab(item.id)}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 ${
                    subTab === item.id
                      ? 'text-gray-800 shadow-sm backdrop-blur-sm border'
                      : 'text-gray-600 hover:bg-white/6 hover:text-gray-800'
                  }`}
                  style={subTab === item.id ? {
                    backgroundColor: `rgba(255, 255, 255, ${subNavOpacity.activeButton})`,
                    borderColor: `rgba(255, 255, 255, ${subNavOpacity.activeBorder})`
                  } : {}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* WATER BUBBLE NAVIGATION */}
        {tabSections.length > 0 && (
          <div className="relative">
            <div 
              className="flex items-center backdrop-blur-sm rounded-2xl p-2 border relative overflow-hidden"
              style={{
                backgroundColor: `rgba(255, 255, 255, ${subNavOpacity.background})`,
                borderColor: `rgba(255, 255, 255, ${subNavOpacity.border})`
              }}
            >
              {/* 🫧 WATER BUBBLE - Adjust bubbleOpacity values above */}
              <div
                className="absolute h-8 backdrop-blur-sm rounded-2xl transition-all duration-700 ease-out z-10"
                style={{
                  left: `${2 + (bubblePosition * (100 - 4)) / 100}%`,
                  width: `${Math.max(100 / tabSections.length - 2, 15)}%`,
                  transform: 'translateX(-50%)',
                  
                  // 🎨 BUBBLE BACKGROUND GRADIENTS
                  background: `
                    radial-gradient(ellipse at top left, rgba(255, 255, 255, ${bubbleOpacity.topLeft}) 0%, rgba(255, 255, 255, ${bubbleOpacity.bottomRight}) 50%, transparent 70%),
                    radial-gradient(ellipse at bottom right, rgba(255, 255, 255, ${bubbleOpacity.bottomRight}) 0%, transparent 50%),
                    linear-gradient(45deg, rgba(255, 255, 255, ${bubbleOpacity.gradient}) 0%, rgba(255, 255, 255, ${bubbleOpacity.gradientEnd}) 100%)
                  `,
                  
                  // 🖼️ BUBBLE BORDERS
                  border: `1px solid rgba(255, 255, 255, ${bubbleOpacity.border})`,
                  borderTop: `1px solid rgba(255, 255, 255, ${bubbleOpacity.borderTop})`,
                  borderLeft: `1px solid rgba(255, 255, 255, ${bubbleOpacity.borderLeft})`,
                  borderRadius: '16px',
                  
                  // 🌑 BUBBLE SHADOWS
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, ${bubbleOpacity.innerHighlight}),
                    inset 0 -1px 0 rgba(0, 0, 0, ${bubbleOpacity.innerShadow}),
                    0 2px 8px rgba(0, 0, 0, ${bubbleOpacity.dropShadow}),
                    0 1px 3px rgba(255, 255, 255, ${bubbleOpacity.innerGlow}) inset
                  `
                }}
              />
              
              {/* Navigation buttons remain the same */}
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

/*
🎨 QUICK CUSTOMIZATION GUIDE:

1. MAKE MORE TRANSPARENT:
   - Decrease mainBarOpacity values (try 0.01, 0.02, 0.01)
   - Decrease borderOpacity.main (try 0.03)
   - Decrease bubbleOpacity values

2. MAKE MORE VISIBLE/DARKER:
   - Increase mainBarOpacity values (try 0.05, 0.08, 0.05)
   - Increase borderOpacity values
   - Increase shadowSettings.mainShadow.opacity (try 0.3)

3. STRONGER BLUR:
   - Increase blurAmount (try 60)

4. LIGHTER BLUR:
   - Decrease blurAmount (try 20)

5. MORE PRONOUNCED BUBBLE:
   - Increase bubbleOpacity.topLeft (try 0.3)
   - Increase bubbleOpacity.border (try 0.2)

6. SUBTLER BUBBLE:
   - Decrease bubbleOpacity values by half

7. STRONGER SHADOWS:
   - Increase shadowSettings.mainShadow.opacity (try 0.4)
   - Increase shadowSettings.mainShadow.blur (try 60)

8. LIGHTER SHADOWS:
   - Decrease shadowSettings.mainShadow.opacity (try 0.1)
   - Decrease shadowSettings.mainShadow.blur (try 20)
*/