// API Configuration for Node.js Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  SIGNUP: `${API_BASE_URL}/auth/signup`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  FORGOT_PASSWORD: `${API_BASE_URL}/auth/forgot-password`,
  VERIFY_OTP: `${API_BASE_URL}/auth/verify-otp`,
  RESET_PASSWORD: `${API_BASE_URL}/auth/reset-password`,
  
  // User endpoints
  GET_USER_DATA: `${API_BASE_URL}/user/data`,
  UPDATE_USER: `${API_BASE_URL}/user/update`,
  
  // Booking endpoints
  SAVE_BOOKING: `${API_BASE_URL}/booking/save`,
  GET_USER_BOOKINGS: `${API_BASE_URL}/booking/user-bookings`,
  GET_BOOKINGS_FOR_REVIEW: `${API_BASE_URL}/booking/user-bookings-for-review`,
  GET_RECENT_ACTIVITIES: `${API_BASE_URL}/booking/recent-activities`,
  
  // Admin endpoints
  GET_ALL_USERS: `${API_BASE_URL}/admin/users`,
  GET_ALL_BOOKINGS: `${API_BASE_URL}/admin/bookings`,
  UPDATE_BOOKING: `${API_BASE_URL}/admin/update-booking`,
  DELETE_BOOKING: (id) => `${API_BASE_URL}/admin/delete-booking/${id}`,
  EDIT_USER: `${API_BASE_URL}/admin/edit-user`,
  DELETE_USER: (id) => `${API_BASE_URL}/admin/delete-user/${id}`,
  
  // Review endpoints
  SUBMIT_REVIEW: `${API_BASE_URL}/review/submit`,
  ADD_REVIEW: `${API_BASE_URL}/review/add`,
  GET_ALL_REVIEWS: `${API_BASE_URL}/review/all`,
  
  // Query endpoints
  SUBMIT_QUERY: `${API_BASE_URL}/query/submit`,
  GET_USER_QUERIES: `${API_BASE_URL}/query/user-queries`,
  GET_ALL_QUERIES: `${API_BASE_URL}/query/all`,
  REPLY_TO_QUERY: `${API_BASE_URL}/query/reply`,
  
  // Destination endpoints
  GET_TOP_DESTINATIONS: `${API_BASE_URL}/destination/top`,
  GET_TOP_RATED_DESTINATIONS: `${API_BASE_URL}/destination/top-rated`,
};

export default API_ENDPOINTS;
