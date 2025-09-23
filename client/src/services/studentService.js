import api from './api';

export const studentService = {
  // Get all students
  getStudents: async (params) => {
    const response = await api.get('/students', { params });
    return response.data;
  },

  // Get single student
  getStudent: async (id) => {
    const response = await api.get(`/students/${id}`);
    return response.data;
  },

  // Create new student
  createStudent: async (studentData) => {
    const response = await api.post('/students', studentData);
    return response.data;
  },

  // Update student
  updateStudent: async (id, studentData) => {
    const response = await api.put(`/students/${id}`, studentData);
    return response.data;
  },

  // Delete student
  deleteStudent: async (id) => {
    const response = await api.delete(`/students/${id}`);
    return response.data;
  },
};
