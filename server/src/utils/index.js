// Utility functions for EduGuide AI

const generateStudentId = (count) => {
  return `STU${(count + 1).toString().padStart(4, '0')}`;
};

const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

const formatResponse = (success, message, data = null) => {
  return {
    success,
    message,
    data,
    timestamp: new Date().toISOString()
  };
};

const pagination = (page, limit) => {
  const currentPage = parseInt(page) || 1;
  const perPage = parseInt(limit) || 10;
  const skip = (currentPage - 1) * perPage;
  
  return {
    skip,
    limit: perPage,
    page: currentPage
  };
};

module.exports = {
  generateStudentId,
  calculateAge,
  formatResponse,
  pagination
};
