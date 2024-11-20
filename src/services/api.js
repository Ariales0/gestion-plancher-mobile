// src/services/api.js
import axios from 'axios';
import API_CONFIG from '../config/apiConfig'; // Importez la configuration
import AsyncStorage from '@react-native-async-storage/async-storage';


// Construisez l'URL de l'API à partir de la configuration
const API_URL = `${API_CONFIG.URL}:${API_CONFIG.PORT}`;

// Fonction pour enregistrer un utilisateur
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

// Fonction pour connecter un utilisateur
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

// Fonction pour récupérer les données de l'utilisateur
export const fetchUserData = async (email) => {
  try {
    const token = await AsyncStorage.getItem('token'); // Récupérer le token
    const response = await axios.get(`${API_URL}/users/info/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Utilisez une interpolation correcte
        'Content-Type': 'application/json',
      },
    });

    return response.data.user; // Retourne uniquement les données utilisateur
  } catch (error) {
    console.error(
      'Erreur fetchUserData:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};


