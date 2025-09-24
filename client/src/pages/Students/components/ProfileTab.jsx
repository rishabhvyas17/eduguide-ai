// client/src/pages/Students/components/ProfileTab.jsx

import React, { useState } from 'react';
import { Camera, Edit3, Save, X } from 'lucide-react';
import { mockStudent } from '../data/mockData';

const ProfileTab = () => {
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
            <p className="text-purple-200 text-sm">Student ID: {profileData.id}</p>
          </div>
          <div className="ml-auto flex space-x-2">
            {!editMode ? (
              <button
                onClick={handleEdit}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors flex items-center space-x-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className="bg-red-500/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-green-500/30 transition-colors flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                value={editMode ? tempData.name : profileData.name}
                onChange={(e) => editMode && handleInputChange('name', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Grade</label>
              <input
                type="text"
                value={editMode ? tempData.grade : profileData.grade}
                onChange={(e) => editMode && handleInputChange('grade', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Section</label>
              <input
                type="text"
                value={editMode ? tempData.section : profileData.section}
                onChange={(e) => editMode && handleInputChange('section', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Roll Number</label>
              <input
                type="text"
                value={editMode ? tempData.rollNumber : profileData.rollNumber}
                onChange={(e) => editMode && handleInputChange('rollNumber', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Date of Birth</label>
              <input
                type="date"
                value={editMode ? tempData.dateOfBirth : profileData.dateOfBirth}
                onChange={(e) => editMode && handleInputChange('dateOfBirth', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Blood Group</label>
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
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact & Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Email Address</label>
              <input
                type="email"
                value={editMode ? tempData.email : profileData.email}
                onChange={(e) => editMode && handleInputChange('email', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Phone Number</label>
              <input
                type="tel"
                value={editMode ? tempData.phone : profileData.phone}
                onChange={(e) => editMode && handleInputChange('phone', e.target.value)}
                disabled={!editMode}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Address</label>
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
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Notification Preferences</label>
              <div className="mt-2 space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">WhatsApp Notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">Email Notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">SMS Notifications</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2 rounded focus:ring-purple-500" />
                  <span className="text-sm text-gray-700">Test Reminders</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Goals & Interests */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Academic Goals & Interests</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium text-gray-600">Career Interests</label>
            <div className="mt-2 space-y-2">
              {[
                'Engineering', 'Medicine', 'Research', 'Arts & Literature', 
                'Sports & Fitness', 'Technology & IT', 'Business & Management', 
                'Teaching & Education', 'Defense & Security', 'Media & Journalism'
              ].map((interest) => (
                <label key={interest} className="flex items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={interest === 'Engineering' || interest === 'Technology & IT'} 
                    className="mr-2 rounded focus:ring-purple-500" 
                  />
                  <span className="text-sm text-gray-700">{interest}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600">Extracurricular Activities</label>
            <div className="mt-2 space-y-2">
              {[
                'Debate Club', 'Science Club', 'Sports Team', 'Music Band', 
                'Drama Club', 'Art Society', 'Photography Club', 'Robotics Club',
                'Environmental Club', 'Literary Society'
              ].map((activity) => (
                <label key={activity} className="flex items-center">
                  <input 
                    type="checkbox" 
                    defaultChecked={activity === 'Science Club' || activity === 'Debate Club'} 
                    className="mr-2 rounded focus:ring-purple-500" 
                  />
                  <span className="text-sm text-gray-700">{activity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Parent/Guardian Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Parent/Guardian Information</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Father's Details</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  defaultValue="Rajesh Sharma"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Occupation</label>
                <input
                  type="text"
                  defaultValue="Software Engineer"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Contact Number</label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  defaultValue="rajesh.sharma@email.com"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-700 mb-3">Mother's Details</h4>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  defaultValue="Sunita Sharma"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Occupation</label>
                <input
                  type="text"
                  defaultValue="Teacher"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Contact Number</label>
                <input
                  type="tel"
                  defaultValue="+91 98765 43211"
                  disabled={!editMode}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  defaultValue="sunita.sharma@email.com"
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