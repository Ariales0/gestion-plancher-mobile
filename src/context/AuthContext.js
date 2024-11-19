import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Création du contexte
export const AuthContext = createContext();

// Création du provider/fournisseur
export const AuthProvider = ({ children }) => {
  // État initial ou valeur que vous souhaitez partager
  const [authState, setAuthState] = useState(false);

  // Vérification de l'authentification lors du chargement
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setAuthState(true); // L'utilisateur est authentifié
      }
    };

    checkAuth();
  }, []);

  // Fonction de déconnexion
  const handleLogout = async () => {
    try {
      // Suppression des éléments d'authentification
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('username'); 
      
      console.log('Déconnexion réussie');
      
      // Réinitialiser l'état d'authentification
      setAuthState(false);
      
      // Vous pouvez rediriger vers la page de connexion ici si nécessaire
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthState, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
