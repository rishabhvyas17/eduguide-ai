// client/src/translations/index.js

export const translations = {
  en: {
    // Navigation
    nav: {
      dashboard: "Dashboard",
      scheduled: "Scheduled Tests",
      learning: "Learning",
      analyse: "Analyse",
      records: "Records",
      profile: "Profile & Settings"
    },
    
    // Common
    common: {
      back: "Back",
      next: "Next",
      previous: "Previous",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      view: "View",
      close: "Close",
      confirm: "Confirm",
      loading: "Loading...",
      search: "Search",
      filter: "Filter",
      clear: "Clear"
    },
    
    // Dashboard
    dashboard: {
      greeting: {
        morning: "Good Morning",
        afternoon: "Good Afternoon",
        evening: "Good Evening"
      },
      subtitle: "Ready to continue your learning journey?",
      overallPerformance: "Overall Performance",
      academicAverage: "Academic Average",
      aptitudeScore: "Aptitude Score",
      classRank: "Class Rank",
      goalsAchieved: "Goals Achieved",
      performanceTrend: "Performance Trend",
      calendar: "Calendar",
      upcoming: "Upcoming",
      subjectPerformance: "Subject Performance",
      tests: "Tests",
      interviews: "Interviews"
    },
    
    // Test Interface
    test: {
      title: "Monthly Aptitude Test",
      subject: "General Aptitude",
      questions: "Questions",
      minutes: "Minutes",
      totalMarks: "Total Marks",
      instructions: "Instructions",
      instructionsList: [
        "Read each question carefully before answering",
        "You can navigate between questions using the question palette on the right",
        "You can change your answers before submitting",
        "There is no negative marking",
        "Click 'Submit Test' when you're done",
        "Make sure you have a stable internet connection"
      ],
      startTest: "Start Test",
      backToTests: "Back to Tests",
      questionOf: "Question {current} of {total}",
      answered: "Answered",
      notAnswered: "Not Answered",
      submitTest: "Submit Test",
      exitConfirm: "Are you sure you want to exit the test? Your progress will be lost.",
      submitConfirm: "Submit Test?",
      submitMessage: "You have answered {answered} out of {total} questions.",
      unansweredWarning: "{count} question(s) are still unanswered.",
      markForReview: "Mark for Review",
      questionPalette: "Question Palette",
      current: "Current",
      testSubmitted: "Test Submitted!",
      yourScore: "You answered {correct} out of {total} questions correctly.",
      scorePercentage: "Score: {score}%",
      
      // Dummy Questions in Hindi
      dummyQuestions: [
        {
          question: "If a car travels 60 km in 1 hour, how far will it travel in 2.5 hours at the same speed?",
          options: ["120 km", "150 km", "180 km", "200 km"]
        },
        {
          question: "Which of the following is a prime number?",
          options: ["15", "21", "29", "33"]
        },
        {
          question: "Complete the series: 2, 6, 12, 20, 30, ?",
          options: ["40", "42", "44", "46"]
        },
        {
          question: "If 'CODING' is written as 'DPEJOH', how is 'PYTHON' written?",
          options: ["QZUIPO", "QZUIPM", "QXUIPO", "QZUJPO"]
        },
        {
          question: "What is 15% of 200?",
          options: ["25", "30", "35", "40"]
        },
        {
          question: "Which number comes next in the sequence: 1, 4, 9, 16, 25, ?",
          options: ["30", "32", "36", "49"]
        },
        {
          question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?",
          options: ["True", "False", "Cannot be determined", "Sometimes true"]
        },
        {
          question: "A rectangle has a length of 10 cm and width of 5 cm. What is its area?",
          options: ["30 cm²", "40 cm²", "50 cm²", "60 cm²"]
        },
        {
          question: "Which of these is NOT a programming language?",
          options: ["Python", "JavaScript", "HTML", "Java"]
        },
        {
          question: "If today is Wednesday, what day will it be 100 days from now?",
          options: ["Monday", "Wednesday", "Friday", "Saturday"]
        }
      ]
    },
    
    // Profile
    profile: {
      title: "Profile & Settings",
      personalInfo: "Personal Information",
      contactSettings: "Contact & Settings",
      academicGoals: "Academic Goals",
      parentInfo: "Parent/Guardian Information",
      fullName: "Full Name",
      grade: "Grade",
      section: "Section",
      rollNumber: "Roll Number",
      dateOfBirth: "Date of Birth",
      bloodGroup: "Blood Group",
      email: "Email Address",
      phone: "Phone Number",
      address: "Address",
      languagePreference: "Language Preference",
      notificationPreferences: "Notification Preferences",
      whatsappNotifications: "WhatsApp Notifications",
      emailNotifications: "Email Notifications",
      smsNotifications: "SMS Notifications",
      testReminders: "Test Reminders",
      editProfile: "Edit Profile",
      saveChanges: "Save Changes",
      cancelChanges: "Cancel"
    },
    
    // Scheduled Tests
    scheduled: {
      testCalendar: "Test Calendar",
      upcomingTests: "Upcoming Tests",
      startExam: "Start Exam",
      recentResults: "Recent Test Results",
      readyToTest: "Ready to Take a Test?",
      startAssessment: "Start your next scheduled assessment",
      next: "Next",
      scheduledFor: "Scheduled for",
      duration: "Duration",
      viewInstructions: "View Instructions",
      testName: "Test Name",
      date: "Date",
      score: "Score",
      status: "Status",
      completed: "Completed",
      viewDetails: "View Details",
      academicTests: "Academic Tests",
      aptitudeTests: "Aptitude Tests",
      events: "Events"
    },
    
    // Analysis
    analyse: {
      analyticAnalyse: "Analytic Analyse",
      criticalThinking: "Critical Thinking",
      academicPerformance: "Academic Performance Analysis",
      subjectWise: "Subject-wise Performance",
      performanceDistribution: "Performance Distribution",
      detailedAnalysis: "Detailed Academic Analysis",
      current: "Current",
      target: "Target",
      skillsAnalysis: "Critical Thinking & Skills Analysis",
      skillRadar: "Skill Radar Chart",
      skillProgress: "Skill Progress",
      recommendations: "Skill Development Recommendations",
      areasForImprovement: "Areas for Improvement",
      strengths: "Strengths",
      communicationSkills: "Communication skills need practice",
      problemSolving: "Focus on problem-solving strategies",
      numericalAbility: "Excellent numerical ability",
      creativeThinking: "Strong creative thinking"
    },
    
    // Records
    records: {
      academicRecords: "Academic Records",
      aptitudeTests: "Aptitude Tests",
      interviewRecords: "Interview Records",
      academicHistory: "Complete history of academic assessments and grades",
      aptitudeHistory: "Monthly aptitude assessments and skill evaluations",
      interviewHistory: "Counselor sessions and personal development tracking",
      subject: "Subject",
      term: "Term",
      marks: "Marks",
      grade: "Grade",
      monthlyTest: "Monthly Aptitude Test",
      overall: "Overall",
      improvement: "Improvement from previous",
      excellent: "Excellent",
      good: "Good",
      satisfactory: "Satisfactory",
      interviewSession: "Personal Interview Session",
      counselor: "Counselor",
      topicsDiscussed: "Topics discussed",
      notes: "Notes",
      interviewRecommendations: "Recommendations"
    },
    
    // Learning
    learning: {
      aiRecommendations: "AI-Powered Learning Recommendations",
      basedOnPerformance: "Based on your performance analysis, here are personalized resources to boost your learning!",
      learningResources: "Learning Resources",
      careerAnalysis: "Career Fit Analysis",
      studyGoals: "Monthly Study Goals",
      priority: "priority",
      high: "high",
      medium: "medium",
      low: "low",
      practiceTests: "Practice Tests",
      studyHours: "Study Hours",
      assignments: "Assignments"
    }
  },
  
  hi: {
    // Navigation (Hindi)
    nav: {
      dashboard: "डैशबोर्ड",
      scheduled: "निर्धारित परीक्षाएं",
      learning: "सीखना",
      analyse: "विश्लेषण",
      records: "रिकॉर्ड",
      profile: "प्रोफ़ाइल और सेटिंग्स"
    },
    
    // Common (Hindi)
    common: {
      back: "वापस",
      next: "अगला",
      previous: "पिछला",
      submit: "जमा करें",
      cancel: "रद्द करें",
      save: "सहेजें",
      edit: "संपादित करें",
      delete: "हटाएं",
      view: "देखें",
      close: "बंद करें",
      confirm: "पुष्टि करें",
      loading: "लोड हो रहा है...",
      search: "खोजें",
      filter: "फ़िल्टर",
      clear: "साफ़ करें"
    },
    
    // Dashboard (Hindi)
    dashboard: {
      greeting: {
        morning: "सुप्रभात",
        afternoon: "नमस्ते",
        evening: "शुभ संध्या"
      },
      subtitle: "क्या आप अपनी सीखने की यात्रा जारी रखने के लिए तैयार हैं?",
      overallPerformance: "समग्र प्रदर्शन",
      academicAverage: "शैक्षणिक औसत",
      aptitudeScore: "योग्यता स्कोर",
      classRank: "कक्षा रैंक",
      goalsAchieved: "लक्ष्य प्राप्त",
      performanceTrend: "प्रदर्शन रुझान",
      calendar: "कैलेंडर",
      upcoming: "आगामी",
      subjectPerformance: "विषय प्रदर्शन",
      tests: "परीक्षाएं",
      interviews: "साक्षात्कार"
    },
    
    // Test Interface (Hindi)
    test: {
      title: "मासिक योग्यता परीक्षा",
      subject: "सामान्य योग्यता",
      questions: "प्रश्न",
      minutes: "मिनट",
      totalMarks: "कुल अंक",
      instructions: "निर्देश",
      instructionsList: [
        "उत्तर देने से पहले प्रत्येक प्रश्न को ध्यान से पढ़ें",
        "आप दाईं ओर प्रश्न पैलेट का उपयोग करके प्रश्नों के बीच नेविगेट कर सकते हैं",
        "आप जमा करने से पहले अपने उत्तर बदल सकते हैं",
        "कोई नकारात्मक अंकन नहीं है",
        "समाप्त होने पर 'परीक्षा जमा करें' पर क्लिक करें",
        "सुनिश्चित करें कि आपके पास स्थिर इंटरनेट कनेक्शन है"
      ],
      startTest: "परीक्षा शुरू करें",
      backToTests: "परीक्षाओं पर वापस जाएं",
      questionOf: "प्रश्न {current} का {total}",
      answered: "उत्तर दिया",
      notAnswered: "उत्तर नहीं दिया",
      submitTest: "परीक्षा जमा करें",
      exitConfirm: "क्या आप वाकई परीक्षा से बाहर निकलना चाहते हैं? आपकी प्रगति खो जाएगी।",
      submitConfirm: "परीक्षा जमा करें?",
      submitMessage: "आपने {total} में से {answered} प्रश्नों के उत्तर दिए हैं।",
      unansweredWarning: "{count} प्रश्न अभी भी अनुत्तरित हैं।",
      markForReview: "समीक्षा के लिए चिह्नित करें",
      questionPalette: "प्रश्न पैलेट",
      current: "वर्तमान",
      testSubmitted: "परीक्षा जमा की गई!",
      yourScore: "आपने {total} में से {correct} प्रश्नों के सही उत्तर दिए।",
      scorePercentage: "स्कोर: {score}%",
      
      // Dummy Questions in Hindi
      dummyQuestions: [
        {
          question: "यदि एक कार 1 घंटे में 60 किमी की यात्रा करती है, तो समान गति से 2.5 घंटे में कितनी दूरी तय करेगी?",
          options: ["120 किमी", "150 किमी", "180 किमी", "200 किमी"]
        },
        {
          question: "निम्नलिखित में से कौन सी एक अभाज्य संख्या है?",
          options: ["15", "21", "29", "33"]
        },
        {
          question: "श्रृंखला पूरी करें: 2, 6, 12, 20, 30, ?",
          options: ["40", "42", "44", "46"]
        },
        {
          question: "यदि 'CODING' को 'DPEJOH' लिखा जाता है, तो 'PYTHON' कैसे लिखा जाएगा?",
          options: ["QZUIPO", "QZUIPM", "QXUIPO", "QZUJPO"]
        },
        {
          question: "200 का 15% कितना है?",
          options: ["25", "30", "35", "40"]
        },
        {
          question: "अनुक्रम में अगली संख्या कौन सी आती है: 1, 4, 9, 16, 25, ?",
          options: ["30", "32", "36", "49"]
        },
        {
          question: "यदि सभी ब्लूप्स राज़ी हैं और सभी राज़ी लैज़ी हैं, तो सभी ब्लूप्स निश्चित रूप से लैज़ी हैं?",
          options: ["सत्य", "असत्य", "निर्धारित नहीं किया जा सकता", "कभी-कभी सत्य"]
        },
        {
          question: "एक आयत की लंबाई 10 सेमी और चौड़ाई 5 सेमी है। इसका क्षेत्रफल क्या है?",
          options: ["30 सेमी²", "40 सेमी²", "50 सेमी²", "60 सेमी²"]
        },
        {
          question: "इनमें से कौन सी प्रोग्रामिंग भाषा नहीं है?",
          options: ["पायथन", "जावास्क्रिप्ट", "एचटीएमएल", "जावा"]
        },
        {
          question: "यदि आज बुधवार है, तो अब से 100 दिन बाद कौन सा दिन होगा?",
          options: ["सोमवार", "बुधवार", "शुक्रवार", "शनिवार"]
        }
      ]
    },
    
    // Profile (Hindi)
    profile: {
      title: "प्रोफ़ाइल और सेटिंग्स",
      personalInfo: "व्यक्तिगत जानकारी",
      contactSettings: "संपर्क और सेटिंग्स",
      academicGoals: "शैक्षणिक लक्ष्य",
      parentInfo: "माता-पिता/अभिभावक जानकारी",
      fullName: "पूरा नाम",
      grade: "कक्षा",
      section: "अनुभाग",
      rollNumber: "रोल नंबर",
      dateOfBirth: "जन्म तिथि",
      bloodGroup: "रक्त समूह",
      email: "ईमेल पता",
      phone: "फोन नंबर",
      address: "पता",
      languagePreference: "भाषा प्राथमिकता",
      notificationPreferences: "सूचना प्राथमिकताएं",
      whatsappNotifications: "व्हाट्सएप सूचनाएं",
      emailNotifications: "ईमेल सूचनाएं",
      smsNotifications: "एसएमएस सूचनाएं",
      testReminders: "परीक्षा अनुस्मारक",
      editProfile: "प्रोफ़ाइल संपादित करें",
      saveChanges: "परिवर्तन सहेजें",
      cancelChanges: "रद्द करें"
    },
    
    // Scheduled Tests (Hindi)
    scheduled: {
      testCalendar: "परीक्षा कैलेंडर",
      upcomingTests: "आगामी परीक्षाएं",
      startExam: "परीक्षा शुरू करें",
      recentResults: "हाल के परीक्षा परिणाम",
      readyToTest: "परीक्षा देने के लिए तैयार हैं?",
      startAssessment: "अपनी अगली निर्धारित परीक्षा शुरू करें",
      next: "अगला",
      scheduledFor: "के लिए निर्धारित",
      duration: "अवधि",
      viewInstructions: "निर्देश देखें",
      testName: "परीक्षा का नाम",
      date: "तारीख",
      score: "स्कोर",
      status: "स्थिति",
      completed: "पूर्ण",
      viewDetails: "विवरण देखें",
      academicTests: "शैक्षणिक परीक्षाएं",
      aptitudeTests: "योग्यता परीक्षाएं",
      events: "आयोजन"
    },
    
    // Analysis (Hindi)
    analyse: {
      analyticAnalyse: "विश्लेषणात्मक विश्लेषण",
      criticalThinking: "आलोचनात्मक सोच",
      academicPerformance: "शैक्षणिक प्रदर्शन विश्लेषण",
      subjectWise: "विषयवार प्रदर्शन",
      performanceDistribution: "प्रदर्शन वितरण",
      detailedAnalysis: "विस्तृत शैक्षणिक विश्लेषण",
      current: "वर्तमान",
      target: "लक्ष्य",
      skillsAnalysis: "आलोचनात्मक सोच और कौशल विश्लेषण",
      skillRadar: "कौशल रडार चार्ट",
      skillProgress: "कौशल प्रगति",
      recommendations: "कौशल विकास सिफारिशें",
      areasForImprovement: "सुधार के क्षेत्र",
      strengths: "ताकत",
      communicationSkills: "संचार कौशल पर अभ्यास की आवश्यकता है",
      problemSolving: "समस्या-समाधान रणनीतियों पर ध्यान दें",
      numericalAbility: "उत्कृष्ट संख्यात्मक क्षमता",
      creativeThinking: "मजबूत रचनात्मक सोच"
    },
    
    // Records (Hindi)
    records: {
      academicRecords: "शैक्षणिक रिकॉर्ड",
      aptitudeTests: "योग्यता परीक्षाएं",
      interviewRecords: "साक्षात्कार रिकॉर्ड",
      academicHistory: "शैक्षणिक मूल्यांकन और ग्रेड का पूर्ण इतिहास",
      aptitudeHistory: "मासिक योग्यता मूल्यांकन और कौशल मूल्यांकन",
      interviewHistory: "परामर्शदाता सत्र और व्यक्तिगत विकास ट्रैकिंग",
      subject: "विषय",
      term: "अवधि",
      marks: "अंक",
      grade: "ग्रेड",
      monthlyTest: "मासिक योग्यता परीक्षा",
      overall: "समग्र",
      improvement: "पिछले से सुधार",
      excellent: "उत्कृष्ट",
      good: "अच्छा",
      satisfactory: "संतोषजनक",
      interviewSession: "व्यक्तिगत साक्षात्कार सत्र",
      counselor: "परामर्शदाता",
      topicsDiscussed: "चर्चा किए गए विषय",
      notes: "नोट्स",
      interviewRecommendations: "सिफारिशें"
    },
    
    // Learning (Hindi)
    learning: {
      aiRecommendations: "एआई-संचालित सीखने की सिफारिशें",
      basedOnPerformance: "आपके प्रदर्शन विश्लेषण के आधार पर, यहां आपकी सीखने को बढ़ावा देने के लिए व्यक्तिगत संसाधन हैं!",
      learningResources: "सीखने के संसाधन",
      careerAnalysis: "करियर फिट विश्लेषण",
      studyGoals: "मासिक अध्ययन लक्ष्य",
      priority: "प्राथमिकता",
      high: "उच्च",
      medium: "मध्यम",
      low: "निम्न",
      practiceTests: "अभ्यास परीक्षाएं",
      studyHours: "अध्ययन घंटे",
      assignments: "असाइनमेंट"
    }
  }
};