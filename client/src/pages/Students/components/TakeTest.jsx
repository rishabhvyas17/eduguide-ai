// client/src/pages/Students/components/TakeTest.jsx

import React, { useState, useEffect } from 'react';
import { Clock, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';

const TakeTest = ({ onClose }) => {
  const { t, language } = useLanguage();
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Get test data based on language
  const testData = {
    title: t('test.title'),
    subject: t('test.subject'),
    duration: 30,
    totalQuestions: 10,
    instructions: t('test.instructionsList'),
    questions: t('test.dummyQuestions').map((q, index) => ({
      id: index + 1,
      question: q.question,
      options: q.options,
      correctAnswer: [1, 2, 1, 0, 1, 2, 0, 2, 2, 2][index] // Same correct answers
    }))
  };

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
    if (currentQuestion < testData.questions.length - 1) {
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
    let correct = 0;
    testData.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const message = language === 'en' 
      ? `Test Submitted!\n\nYou answered ${correct} out of ${testData.totalQuestions} questions correctly.\n\nScore: ${(correct / testData.totalQuestions * 100).toFixed(0)}%`
      : `परीक्षा जमा की गई!\n\nआपने ${testData.totalQuestions} में से ${correct} प्रश्नों के सही उत्तर दिए।\n\nस्कोर: ${(correct / testData.totalQuestions * 100).toFixed(0)}%`;
    alert(message);
    onClose();
  };

  const getQuestionStatus = (index) => {
    const questionId = testData.questions[index].id;
    if (answers[questionId] !== undefined) return 'answered';
    if (index === currentQuestion) return 'current';
    return 'unanswered';
  };

  const currentQuestionData = testData.questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const unansweredCount = testData.totalQuestions - answeredCount;

  // Instructions Page - Full Screen
  if (!testStarted) {
    return (
      <div className="fixed inset-0 bg-gray-100 flex items-center justify-center p-6 z-50">
        <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="mb-4 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-medium">{t('test.backToTests')}</span>
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{testData.title}</h1>
            <p className="text-gray-600">{testData.subject}</p>
          </div>

          {/* Test Details */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{testData.totalQuestions}</div>
              <div className="text-sm text-gray-600">{t('test.questions')}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{testData.duration}</div>
              <div className="text-sm text-gray-600">{t('test.minutes')}</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">100</div>
              <div className="text-sm text-gray-600">{t('test.totalMarks')}</div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{t('test.instructions')}</h2>
            <ul className="space-y-2">
              {testData.instructions.map((instruction, index) => (
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
              {t('common.cancel')}
            </button>
            <button
              onClick={handleStartTest}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              {t('test.startTest')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Test Interface - Full Screen
  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                if (window.confirm(t('test.exitConfirm'))) {
                  onClose();
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
              title={t('common.back')}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{testData.title}</h1>
              <p className="text-sm text-gray-600">{testData.subject}</p>
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
              {t('test.submitTest')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden p-6">
        <div className="h-full max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-6 h-full">
            {/* Question Area */}
            <div className="col-span-3 bg-white rounded-xl shadow-sm p-6 flex flex-col">
              {/* Question Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    {t('test.questionOf')
                      .replace('{current}', currentQuestion + 1)
                      .replace('{total}', testData.totalQuestions)}
                  </span>
                  <span className="text-sm text-gray-600">
                    {answers[currentQuestionData.id] !== undefined ? t('test.answered') : t('test.notAnswered')}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / testData.totalQuestions) * 100}%` }}
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
              <div className="space-y-3 mb-6 flex-1">
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
                  <span>{t('common.previous')}</span>
                </button>

                {answers[currentQuestionData.id] === undefined && (
                  <button
                    onClick={() => handleAnswer(currentQuestionData.id, null)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                  >
                    {t('test.markForReview')}
                  </button>
                )}

                <button
                  onClick={handleNextQuestion}
                  disabled={currentQuestion === testData.questions.length - 1}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentQuestion === testData.questions.length - 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-white bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  <span>{t('common.next')}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Question Palette */}
            <div className="bg-white rounded-xl shadow-sm p-6 overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('test.questionPalette')}</h3>
              
              {/* Legend */}
              <div className="mb-4 space-y-2 text-xs">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                  <span className="text-gray-600">{t('test.answered')} ({answeredCount})</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                  <span className="text-gray-600">{t('test.notAnswered')} ({unansweredCount})</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
                  <span className="text-gray-600">{t('test.current')}</span>
                </div>
              </div>

              {/* Question Numbers Grid */}
              <div className="grid grid-cols-5 gap-2">
                {testData.questions.map((q, index) => {
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
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t('test.submitConfirm')}</h3>
            <p className="text-gray-600 mb-6">
              {t('test.submitMessage')
                .replace('{answered}', answeredCount)
                .replace('{total}', testData.totalQuestions)}
              {unansweredCount > 0 && (
                <span className="block mt-2 text-orange-600 font-medium">
                  {t('test.unansweredWarning').replace('{count}', unansweredCount)}
                </span>
              )}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                {t('common.cancel')}
              </button>
              <button
                onClick={handleSubmitTest}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                {t('common.submit')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TakeTest;