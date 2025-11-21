import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: async (data: { name: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  login: async (data: { email: string; password: string }) => {
    const response = await api.post('/auth/login', data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getMe: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

// User API
export const userAPI = {
  getProfile: async (userId: string) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  },

  updateProfile: async (userId: string, data: any) => {
    const response = await api.put(`/users/${userId}`, data);
    return response.data;
  },

  searchUsers: async (query: string) => {
    const response = await api.get(`/users/search?q=${query}`);
    return response.data;
  },
};

// Activity API
export const activityAPI = {
  getActivities: async (filters?: any) => {
    const response = await api.get('/activities', { params: filters });
    return response.data;
  },

  getActivity: async (activityId: string) => {
    const response = await api.get(`/activities/${activityId}`);
    return response.data;
  },

  createActivity: async (data: any) => {
    const response = await api.post('/activities', data);
    return response.data;
  },

  joinActivity: async (activityId: string) => {
    const response = await api.post(`/activities/${activityId}/join`);
    return response.data;
  },

  leaveActivity: async (activityId: string) => {
    const response = await api.post(`/activities/${activityId}/leave`);
    return response.data;
  },
};

// Message API
export const messageAPI = {
  getConversations: async () => {
    const response = await api.get('/messages/conversations');
    return response.data;
  },

  getMessages: async (conversationId: string) => {
    const response = await api.get(`/messages/${conversationId}`);
    return response.data;
  },

  sendMessage: async (conversationId: string, content: string) => {
    const response = await api.post(`/messages/${conversationId}`, { content });
    return response.data;
  },
};

export default api;
