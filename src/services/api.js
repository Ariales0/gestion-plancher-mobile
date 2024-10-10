// src/services/api.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig'; // Importez la configuration

// Construisez l'URL de l'API à partir de la configuration
const API_URL = `${API_CONFIG.URL}:${API_CONFIG.PORT}`;

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    console.log('User registered:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, loginData);
    console.log('User logged in:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error.response ? error.response.data : error.message);
    throw error;
  }
};
