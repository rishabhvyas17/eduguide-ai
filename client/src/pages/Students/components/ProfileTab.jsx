// client/src/pages/Students/components/ProfileTab.jsx

import React, { useState } from 'react';
import { Camera, Edit3, Save, X } from 'lucide-react';
import { mockStudent } from '../data/mockData';
import { useLanguage } from '../../../contexts/LanguageContext';

const ProfileTab = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(mockStudent);
  const [tempData, setTempData] = useState(mockStudent);

  const handleEdit = () => {
    setEditMode(true);
    setTempData(profileData);
  };

  const handleSave = () => {
    setProfileData(tempData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setEditMode(false);
  };

  const handleInputChange = (field, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={profileData.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 text-purple-600 hover:bg-gray-100 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{profileData.name}</h2>
            <p className="text-purple-100">{profileData.grade} • {profileData.school}</p>
            <p className="text-purple-200 text-sm">{t('profile.rollNumber')}: {profileData.id}</p>
          </div>
          <div className="ml-auto flex space-x-2">
            {!editMode ? (
              <button
                onClick={handleEdit}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center space-x-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>{t('profile.editProfile')}</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>{t('profile.cancelChanges')}</span>
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-green-500/30 transition-colors flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>{t('profile.saveChanges')}</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('profile.personalInfo')}</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.fullName')}</label>
              <input
                type="text"
                value={editMode ? tempData.name : profileData.name}
                onChange={(e) => editMode && handleInputChange('name', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.grade')}</label>
              <input
                type="text"
                value={editMode ? tempData.grade : profileData.grade}
                onChange={(e) => editMode && handleInputChange('grade', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.section')}</label>
              <input
                type="text"
                value={editMode ? tempData.section : profileData.section}
                onChange={(e) => editMode && handleInputChange('section', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.rollNumber')}</label>
              <input
                type="text"
                value={editMode ? tempData.rollNumber : profileData.rollNumber}
                onChange={(e) => editMode && handleInputChange('rollNumber', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.dateOfBirth')}</label>
              <input
                type="date"
                value={editMode ? tempData.dateOfBirth : profileData.dateOfBirth}
                onChange={(e) => editMode && handleInputChange('dateOfBirth', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.bloodGroup')}</label>
              <select
                value={editMode ? tempData.bloodGroup : profileData.bloodGroup}
                onChange={(e) => editMode && handleInputChange('bloodGroup', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contact & Settings */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('profile.contactSettings')}</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.email')}</label>
              <input
                type="email"
                value={editMode ? tempData.email : profileData.email}
                onChange={(e) => editMode && handleInputChange('email', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.phone')}</label>
              <input
                type="tel"
                value={editMode ? tempData.phone : profileData.phone}
                onChange={(e) => editMode && handleInputChange('phone', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.address')}</label>
              <textarea
                value={editMode ? tempData.address : profileData.address}
                onChange={(e) => editMode && handleInputChange('address', e.target.value)}
                disabled={!editMode}
                rows="3"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50 resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Language Preference</label>
              <select className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500">
                <option>English</option>
                <option>Hindi</option>
                <option>Bengali</option>
                <option>Tamil</option>
                <option>Telugu</option>
                <option>Marathi</option>
                <option>Gujarati</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                {language === 'en' 
                  ? 'Selecting Hindi will change all text on the website to Hindi' 
                  : 'हिंदी चुनने से वेबसाइट का सभी टेक्स्ट हिंदी में बदल जाएगा'}
              </p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">{t('profile.notificationPreferences')}</label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">{t('profile.whatsappNotifications')}</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">{t('profile.emailNotifications')}</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">{t('profile.smsNotifications')}</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">{t('profile.testReminders')}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Goals & Interests */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('profile.academicGoals')}</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-600">
              {language === 'en' ? 'Career Interests' : 'करियर रुचियां'}
            </label>
            <div className="mt-2 space-y-2">
              {[
                { en: 'Engineering', hi: 'इंजीनियरिंग' },
                { en: 'Medicine', hi: 'चिकित्सा' },
                { en: 'Research', hi: 'अनुसंधान' },
                { en: 'Arts & Literature', hi: 'कला और साहित्य' },
                { en: 'Sports & Fitness', hi: 'खेल और फिटनेस' }
              ].map((interest, index) => (
                <label key={index} className="flex items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={index === 0 || index === 1} 
                    className="mr-2 rounded focus:ring-purple-500" 
                  />
                  <span className="text-sm text-gray-700">{language === 'en' ? interest.en : interest.hi}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">
              {language === 'en' ? 'Extracurricular Activities' : 'पाठ्येतर गतिविधियां'}
            </label>
            <div className="mt-2 space-y-2">
              {[
                { en: 'Debate Club', hi: 'वाद-विवाद क्लब' },
                { en: 'Science Club', hi: 'विज्ञान क्लब' },
                { en: 'Sports Team', hi: 'खेल टीम' },
                { en: 'Music Band', hi: 'संगीत बैंड' },
                { en: 'Drama Club', hi: 'नाटक क्लब' }
              ].map((activity, index) => (
                <label key={index} className="flex items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={index === 0 || index === 1} 
                    className="mr-2 rounded focus:ring-purple-500" 
                  />
                  <span className="text-sm text-gray-700">{language === 'en' ? activity.en : activity.hi}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Parent/Guardian Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('profile.parentInfo')}</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">
              {language === 'en' ? "Father's Details" : 'पिता का विवरण'}
            </h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">{language === 'en' ? 'Name' : 'नाम'}</label>
                <input
                  type="text"
                  defaultValue="Rajesh Sharma"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{language === 'en' ? 'Occupation' : 'व्यवसाय'}</label>
                <input
                  type="text"
                  defaultValue="Software Engineer"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{language === 'en' ? 'Contact Number' : 'संपर्क नंबर'}</label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">
              {language === 'en' ? "Mother's Details" : 'माता का विवरण'}
            </h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">{language === 'en' ? 'Name' : 'नाम'}</label>
                <input
                  type="text"
                  defaultValue="Sunita Sharma"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{language === 'en' ? 'Occupation' : 'व्यवसाय'}</label>
                <input
                  type="text"
                  defaultValue="Teacher"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">{language === 'en' ? 'Contact Number' : 'संपर्क नंबर'}</label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43211"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;