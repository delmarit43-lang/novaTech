// Ensure standard base API v1 URL
const ENV_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';
export const API_BASE_URL = ENV_URL.endsWith('/v1') ? ENV_URL : `${ENV_URL}/v1`;

// Custom lightweight fetch wrapper
async function request(endpoint, options = {}) {
  const token = localStorage.getItem('nova_admin_token');
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const config = {
    ...options,
    headers,
  };

  if (options.body && typeof options.body === 'object' && !(options.body instanceof FormData)) {
    config.body = JSON.stringify(options.body);
  }

  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  let response;
  try {
    response = await fetch(url, config);
  } catch {
    throw new Error(
      'Failed to fetch — hubi in backend-ku socdo: npm run dev (port 5000).'
    );
  }
  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem('nova_admin_token');
      localStorage.removeItem('nova_admin_user');
    }
    const message = data.message || `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}

export const apiService = {
  // --- AUTH ---
  login: async (email, password) => {
    const res = await request('/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    if (res?.data?.accessToken) {
      localStorage.setItem('nova_admin_token', res.data.accessToken);
      localStorage.setItem('nova_admin_user', JSON.stringify(res.data.user || { name: 'Admin', email }));
    }
    return res;
  },
  getMe: () => request('/auth/me'),
  logout: async () => {
    try {
      await request('/auth/logout', { method: 'POST' });
    } catch (e) {
      console.warn('Logout API warning:', e);
    } finally {
      localStorage.removeItem('nova_admin_token');
      localStorage.removeItem('nova_admin_user');
    }
  },

  // --- DASHBOARD ---
  getDashboardStats: () => request('/dashboard/stats'),

  // --- PORTFOLIO / PROJECTS ---
  getPortfolios: () => request('/portfolio'),
  createPortfolio: (data) => request('/portfolio', { method: 'POST', body: data }),
  updatePortfolio: (id, data) => request(`/portfolio/${id}`, { method: 'PUT', body: data }),
  deletePortfolio: (id) => request(`/portfolio/${id}`, { method: 'DELETE' }),
  togglePortfolioStatus: (id) => request(`/portfolio/${id}/status`, { method: 'PATCH' }),

  // --- SERVICES ---
  getServices: () => request('/services'),
  createService: (data) => request('/services', { method: 'POST', body: data }),
  updateService: (id, data) => request(`/services/${id}`, { method: 'PUT', body: data }),
  deleteService: (id) => request(`/services/${id}`, { method: 'DELETE' }),

  // --- TEAM MEMBERS ---
  getTeam: () => request('/team'),
  createTeamMember: (data) => request('/team', { method: 'POST', body: data }),
  updateTeamMember: (id, data) => request(`/team/${id}`, { method: 'PUT', body: data }),
  deleteTeamMember: (id) => request(`/team/${id}`, { method: 'DELETE' }),

  // --- TESTIMONIALS ---
  getTestimonials: () => request('/testimonials'),
  createTestimonial: (data) => request('/testimonials', { method: 'POST', body: data }),
  updateTestimonial: (id, data) => request(`/testimonials/${id}`, { method: 'PUT', body: data }),
  deleteTestimonial: (id) => request(`/testimonials/${id}`, { method: 'DELETE' }),

  // --- CONTACT MESSAGES ---
  submitContact: (data) => request('/contact', { method: 'POST', body: data }),
  getContactMessages: () => request('/contact'),
  updateContactStatus: (id, status) => request(`/contact/${id}/status`, { method: 'PATCH', body: { status } }),
  deleteContactMessage: (id) => request(`/contact/${id}`, { method: 'DELETE' }),

  // --- PROJECT REQUESTS ---
  submitProjectRequest: (data) => request('/project-requests', { method: 'POST', body: data }),
  getProjectRequests: () => request('/project-requests'),
  updateProjectRequestStatus: (id, status) => request(`/project-requests/${id}/status`, { method: 'PATCH', body: { status } }),
  deleteProjectRequest: (id) => request(`/project-requests/${id}`, { method: 'DELETE' }),

  // --- NEWSLETTER ---
  subscribeNewsletter: (email) => request('/newsletter/subscribe', { method: 'POST', body: { email } }),
  getNewsletterSubscribers: () => request('/newsletter'),
  deleteNewsletterSubscriber: (id) => request(`/newsletter/${id}`, { method: 'DELETE' }),

  // --- SETTINGS ---
  getSettings: () => request('/settings'),
  updateSettings: (data) => request('/settings', { method: 'PUT', body: data }),

  // --- USERS (ADMIN) ---
  getUsers: () => request('/users'),
  createUser: (data) => request('/users', { method: 'POST', body: data }),
  updateUser: (id, data) => request(`/users/${id}`, { method: 'PUT', body: data }),
  deleteUser: (id) => request(`/users/${id}`, { method: 'DELETE' }),
};

export default apiService;
