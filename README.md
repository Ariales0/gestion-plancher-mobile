# GestionPlancherMobile

**GestionPlancherMobile** est une application mobile développée en **React Native** en utilisant l'écosystème **Expo**. Ce projet est conçu pour fournir une expérience utilisateur fluide et intuitive, tout en tirant parti des meilleures pratiques de développement mobile.

---

## Table des matières

1. [Développeurs / Auteurs](#équipe-de-développement)
1. [À propos du projet](#à-propos-du-projet)
2. [Prérequis](#prérequis)
3. [Installation](#installation)
4. [Commandes importantes](#commandes-importantes)
5. [Sources et tutoriels](#sources-et-tutoriels)

---

## Équipe de Développement

- Lepage Steve
- Lecourt Quentin
- Hamrani Lyes

---

## À propos du projet

**GestionPlancherMobile** vise à simplifier la gestion des tâches liées à la gestion des planchers en utilisant des outils modernes comme **React Native**, **Expo** et **TypeScript**. 

Le projet utilise une architecture modulaire avec une intégration transparente pour les fonctionnalités de navigation, d'authentification, et de performances optimales.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés :

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Android Studio](https://developer.android.com/studio?hl=fr) (si vous utilisez un émulateur Android)
- [Visual Studio Code](https://code.visualstudio.com/)

---

## Installation

1. **Cloner le dépôt :**
  ```bash
   git clone https://github.com/votre-utilisateur/gestion-plancher-mobile.git
   cd gestion-plancher-mobile
  ```
1. **Changer la configucation de API_CONFIG**
  - Aller dans le fichier API_CONFIG.js localisé /src/config/API_CONFIG .js
  ```bash
  URL: 'http://172.16.7.106', // Remplacez {{URL}} par l'URL réelle
  ```
  Ouvrir un terminal et faire (sous windows) ipconfig et votre {{URL}} sera votre Adresse IPv4  

2. Créer un nouveau projet avec Expo (optionnel) :
  ```bash
  npx create-expo-app gestion-plancher-mobile -t
  ```
3. Installer les dépendances :
  ```bash
  npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
  npm install react-native-vector-icons --save
  npm install --save-dev typescript@~5.3.3
  ```
4. Installer React DevTools   
React DevTools est un outil indispensable pour déboguer vos composants React Native. Installez-le avec :   
  ```bash
npm install -g react-devtools
  ```
5. Démarrer le serveur Expo :  
  ```bash
  npx expo start
  ```
6. Lancer sur un Appareil ou un Émulateur  
Pour exécuter l'application sur un appareil Android, Scanner le code QR au besoin ou utilisez :  

  ```bash
  npm start
  ```
  ou
    ```bash
  npm run android
  ```
  Choisir a dans le menu pour  Press a │ open Android   

## Commandes Importantes

| Commande                                                                                               | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `npx create-expo-app gestion-plancher-mobile -t`                                                      | Crée un nouveau projet Expo avec un template TypeScript.                                                       |
| `npx expo start`                                                                                      | Démarre le serveur de développement Expo.                                                                      |
| `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar` | Installe les dépendances nécessaires pour le projet Expo.                                                      |
| `npm install react-native-vector-icons --save`                                                        | Installe les icônes vectorielles pour React Native.                                                            |
| `npm install -g react-devtools`                                                                       | Installe React DevTools globalement pour le débogage des applications React.                                   |
| `npm run android`                                                                                     | Compile et lance l'application sur un émulateur Android ou un appareil connecté.                               |
| `npm install --save-dev typescript@~5.3.3`                                                            | Installe une version spécifique de TypeScript compatible avec Expo.                                            |

---



## Ressources
- Documentation React Native
- Documentation Expo
- Documentation TypeScript
- Guide pour React DevTools