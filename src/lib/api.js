import axios from 'axios';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API request failed:', error);
    return Promise.reject(error);
  }
);

// API endpoints
export const api = {
  // Info endpoints
  getInfo: () => apiClient.get('/info'),
  downloadCV: () => apiClient.get('/info/download-cv'),

  // Blog endpoints
  getBlogs: () => apiClient.get('/blogs'),
  getBlog: (id) => apiClient.get(`/blogs/${id}`),
  createBlog: (data, token) => apiClient.post('/blogs', data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  updateBlog: (id, data, token) => apiClient.put(`/blogs/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  deleteBlog: (id, token) => apiClient.delete(`/blogs/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),

  // Experience endpoints
  getExperiences: () => apiClient.get('/experiences'),
  getExperience: (id) => apiClient.get(`/experiences/${id}`),
  createExperience: (data, token) => apiClient.post('/experiences', data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  updateExperience: (id, data, token) => apiClient.put(`/experiences/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  deleteExperience: (id, token) => apiClient.delete(`/experiences/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),

  // Project endpoints
  getProjects: () => apiClient.get('/projects'),
  getProject: (id) => apiClient.get(`/projects/${id}`),
  createProject: (data, token) => apiClient.post('/projects', data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  updateProject: (id, data, token) => apiClient.put(`/projects/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  deleteProject: (id, token) => apiClient.delete(`/projects/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),

  // Skill endpoints
  getSkills: () => apiClient.get('/skills'),
  getSkill: (id) => apiClient.get(`/skills/${id}`),
  createSkill: (data, token) => apiClient.post('/skills', data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  updateSkill: (id, data, token) => apiClient.put(`/skills/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  deleteSkill: (id, token) => apiClient.delete(`/skills/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),

  // Testimonial endpoints
  getTestimonials: () => apiClient.get('/testimonials'),
  getTestimonial: (id) => apiClient.get(`/testimonials/${id}`),
  createTestimonial: (data, token) => apiClient.post('/testimonials', data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  updateTestimonial: (id, data, token) => apiClient.put(`/testimonials/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  deleteTestimonial: (id, token) => apiClient.delete(`/testimonials/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),

  // Contact endpoints
  createContact: (data) => apiClient.post('/contacts', data),
  getContacts: (token) => apiClient.get('/contacts', {
    headers: { Authorization: `Bearer ${token}` },
  }),
  getContact: (id, token) => apiClient.get(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),
  deleteContact: (id, token) => apiClient.delete(`/contacts/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  }),

  // Auth endpoints
  login: (data) => apiClient.post('/auth/login', data),
  verifyOTP: (data) => apiClient.post('/auth/verify-otp', data),

  // Health check
  healthCheck: () => apiClient.get('/health'),
};

export default api;
