// client/src/pages/Students/components/TakeTest.jsx

import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

// Dummy test data - will be replaced with AI-generated questions
const dummyTest = {
  title: "Monthly Aptitude Test",
  subject: "General Aptitude",
  duration: 30, // minutes
  totalQuestions: 10,
  instructions: [
    "Read each question carefully before answering",
    "You can navigate between questions using the question palette on the right",
    "You can change your answers before submitting",
    "There is no negative marking",
    "Click 'Submit Test' when you're done",
    "Make sure you have a stable internet connection"
  ],
  questions: [
    {
      id: 1,
      question: "If a car travels 60 km in 1 hour, how far will it travel in 2.5 hours at the same speed?",
      options: [
        "120 km",
        "150 km",
        "180 km",
        "200 km"
      ],
      correctAnswer: 1 // index of correct option (for testing)
    },
    {
      id: 2,
      question: "Which of the following is a prime number?",
      options: [
        "15",
        "21",
        "29",
        "33"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Complete the series: 2, 6, 12, 20, 30, ?",
      options: [
        "40",
        "42",
        "44",
        "46"
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "If 'CODING' is written as 'DPEJOH', how is 'PYTHON' written?",
      options: [
        "QZUIPO",
        "QZUIPM",
        "QXUIPO",
        "QZUJPO"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "What is 15% of 200?",
      options: [
        "25",
        "30",
        "35",
        "40"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Which number comes next in the sequence: 1, 4, 9, 16, 25, ?",
      options: [
        "30",
        "32",
        "36",
        "49"
      ],
      correctAnswer: 2
    },
    {
      id: 7,
      question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?",
      options: [
        "True",
        "False",
        "Cannot be determined",
        "Sometimes true"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "A rectangle has a length of 10 cm and width of 5 cm. What is its area?",
      options: [
        "30 cm²",
        "40 cm²",
        "50 cm²",
        "60 cm²"
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      question: "Which of these is NOT a programming language?",
      options: [
        "Python",
        "JavaScript",
        "HTML",
        "Java"
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "If today is Wednesday, what day will it be 100 days from now?",
      options: [
        "Monday",
        "Wednesday",
        "Friday",
        "Saturday"
      ],
      correctAnswer: 2
    }
  ]
};

const TakeTest = ({ onClose }) => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(dummyTest.duration * 60); // in seconds
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Timer effect
  useEffect(() => {
    if (!testStarted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testStarted]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartTest = () => {
    setTestStarted(true);
  };

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < dummyTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionClick = (index) => {
    setCurrentQuestion(index);
  };

  const handleSubmitTest = () => {
    setShowSubmitConfirm(false);
    // Calculate results (for demo purposes)
    let correct = 0;
    dummyTest.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    alert(`Test Submitted!\n\nYou answered ${correct} out of ${dummyTest.totalQuestions} questions correctly.\n\nScore: ${(correct / dummyTest.totalQuestions * 100).toFixed(0)}%`);
    onClose();
  };

  const getQuestionStatus = (index) => {
    const questionId = dummyTest.questions[index].id;
    if (answers[questionId] !== undefined) return 'answered';
    if (index === currentQuestion) return 'current';
    return 'unanswered';
  };

  const currentQuestionData = dummyTest.questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = dummyTest.totalQuestions - answeredCount;

  // Instructions Page
  if (!testStarted) {
    return (
      <div className="fixed inset-0 bg-gray-100 flex items-center justify-center p-6 z-50">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{dummyTest.title}</h1>
            <p className="text-gray-600">{dummyTest.subject}</p>
          </div>

          {/* Test Details */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{dummyTest.totalQuestions}</div>
              <div className="text-sm text-gray-600">Questions</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{dummyTest.duration}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">100</div>
              <div className="text-sm text-gray-600">Total Marks</div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructions</h2>
            <ul className="space-y-2">
              {dummyTest.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleStartTest}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              Start Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Test Interface
  return (
    <div className="fixed inset-0 bg-gray-100 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to exit the test? Your progress will be lost.')) {
                  onClose();
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Exit Test"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{dummyTest.title}</h1>
              <p className="text-sm text-gray-600">{dummyTest.subject}</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-600" />
              <span className={`text-lg font-semibold ${timeRemaining < 300 ? 'text-red-600' : 'text-gray-800'}`}>
                {formatTime(timeRemaining)}
              </span>
            </div>
            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Question Area */}
          <div className="col-span-3 bg-white rounded-xl shadow-sm p-6">
            {/* Question Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of {dummyTest.totalQuestions}
                </span>
                <span className="text-sm text-gray-600">
                  {answers[currentQuestionData.id] !== undefined ? 'Answered' : 'Not Answered'}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / dummyTest.totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {currentQuestionData.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestionData.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestionData.id, index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    answers[currentQuestionData.id] === index
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 ${
                      answers[currentQuestionData.id] === index
                        ? 'border-purple-600 bg-purple-600'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestionData.id] === index && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className={`text-base ${
                      answers[currentQuestionData.id] === index
                        ? 'text-gray-800 font-medium'
                        : 'text-gray-700'
                    }`}>
                      {option}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentQuestion === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              {answers[currentQuestionData.id] === undefined && (
                <button
                  onClick={() => handleAnswer(currentQuestionData.id, null)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Mark for Review
                </button>
              )}

              <button
                onClick={handleNextQuestion}
                disabled={currentQuestion === dummyTest.questions.length - 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentQuestion === dummyTest.questions.length - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-white bg-purple-600 hover:bg-purple-700'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Question Palette */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Question Palette</h3>
            
            {/* Legend */}
            <div className="mb-4 space-y-2 text-xs">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                <span className="text-gray-600">Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                <span className="text-gray-600">Not Answered ({unansweredCount})</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                <span className="text-gray-600">Current</span>
              </div>
            </div>

            {/* Question Numbers Grid */}
            <div className="grid grid-cols-5 gap-2">
              {dummyTest.questions.map((q, index) => {
                const status = getQuestionStatus(index);
                return (
                  <button
                    key={q.id}
                    onClick={() => handleQuestionClick(index)}
                    className={`aspect-square rounded-lg font-semibold text-sm transition-all duration-200 ${
                      status === 'answered'
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : status === 'current'
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Submit Test?</h3>
            <p className="text-gray-600 mb-6">
              You have answered {answeredCount} out of {dummyTest.totalQuestions} questions.
              {unansweredCount > 0 && (
                <span className="block mt-2 text-orange-600 font-medium">
                  {unansweredCount} question(s) are still unanswered.
                </span>
              )}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitTest}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakeTest;