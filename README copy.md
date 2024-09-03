# GestionPlancherMobile

Ce document décrit les étapes de la création d'une application mobile React Native, ainsi que la configuration de son environnement.

## Sources de tutoriels
- [Tutoriel vidéo 1](https://www.youtube.com/watch?v=gXrBpt9MLzE)
- [Tutoriel vidéo 2](https://www.youtube.com/watch?v=o2GUagUfJeA)

## Autres Sources
- [Documentation de React Native](https://reactnative.dev/docs/getting-started)
- [Expo guides](https://docs.expo.dev/guides/overview/)
- [Installer les dépendances avec Expo](https://docs.expo.dev/router/installation/#install-dependencies)
- [Design avec React Native Elements](https://reactnativeelements.com/docs)
- [Créer des composants avec Tailwind CSS](https://www.youtube.com/watch?v=hAMVFvMB5Jo) - [Tailwind CSS Documentation](https://tailwindcss.com)
- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)

## Commandes et Description pour Démarrer un Projet React Native

| Commande                                                                                               | Description                                                                                                    |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| ```bash npx create-expo-app gestion-plancher-mobile -t ```                                                       | Crée un nouveau projet Expo avec un template TypeScript.                                                        |
| ```bash npx expo start```                                                                                     | Démarre le serveur de développement Expo.                                                                      |
| ```bash npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar``` | Installe les dépendances nécessaires pour le projet Expo.  |
| ```bash npm install react-native-vector-icons --save```                                                         | Installe les icônes vectorielles pour React Native.                                                             |
| ```bash npm install -g react-devtools```                                                                        | Installe React DevTools globalement pour le débogage des applications React.                                    |
| ```bash npm run android```                                                                                      | Compile et lance l'application sur un émulateur Android ou un appareil connecté.                                |
| ```bash npm install --save-dev typescript@~5.3.3```                                                              | Installe une version spécifique de TypeScript compatible avec Expo.                                             |

## Création d'un Nouveau Projet

1. **Ouvrir un terminal sous Windows.**
   - Faire Windows + R, taper `wl` (pour Windows Terminal).

2. **Naviguer jusqu'au répertoire souhaité.**
   - Exemple de chemin : `C:\ecole\1-Informatique\Session 5\Programmation WEB avancée\Projet 2 - Native mobile-Schluter- 30% Équipe`

3. **Créer un nouveau projet avec Expo.**
   - Utiliser la commande : 
     ```bash
     npx create-expo-app gestion-plancher-mobile -t 
     ```  
   - Choisir `blank (TypeScript)` comme template.

4. **Installer Expo si demandé.**
   - [Documentation Expo](https://docs.expo.dev/get-started/set-up-your-environment/?platform)

5. **Installer Android Studio pour émuler un appareil Android (optionnel).**
   - [Lien vers Android Studio](https://developer.android.com/studio?hl=fr)

6. **Installer React DevTools.**
   - Utiliser la commande : 
     ```bash
     npm install -g react-devtools
     ```
   - Si vous rencontrez des erreurs PowerShell, référez-vous à la [documentation Microsoft](https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4)

7. **Lancer l'application sur Android.**
   - Utiliser la commande : 
     ```bash
     npm run android
     ```

8. **Configurer TypeScript pour la compatibilité avec Expo.**
   - Utiliser la commande : 
     ```bash
     npm install --save-dev typescript@~5.3.3
     ```
   - Vérifier la version avec : 
     ```bash
     npx tsc --version
     ```

9. **Redémarrer le Metro Bundler et React DevTools.**
   - Relancer l'application : 
     ```bash
     npm run android
     ```
   - Lancer React DevTools : 
     ```bash
     react-devtools
     ```

## Installation de Packages pour la Navigation et l'Amélioration des Performances

- **Navigation de base :**
  ```bash
  npm install @react-navigation/native @react-navigation/native-stack
  ```
## **Améliorations des Performances :**

### Étape 1 : Installation des packages pour les performances

1. Ouvrez votre terminal.
2. Assurez-vous d'être dans le répertoire de votre projet.
3. Exécutez la commande suivante pour installer les packages nécessaires :
   ```bash
   npm install react-native-screens react-native-safe-area-context
   ```

## **Recommandations d'Extensions pour Visual Studio Code**

### ES7+ React/Redux/React-Native snippets

1. **Installation de l'extension :**
   - Ouvrez Visual Studio Code.
   - Accédez à la section des extensions (vous pouvez utiliser le raccourci `Ctrl+Shift+X` sur Windows ou `Cmd+Shift+X` sur macOS).
   - Recherchez l'extension `ES7+ React/Redux/React-Native snippets`.
   - Cliquez sur "Install" pour ajouter l'extension à votre éditeur.
   
2. **Description :**
   - Cette extension permet de générer rapidement du code standard pour React, React Native, Redux, et JavaScript moderne.
   
3. **Exemple d'utilisation :**
   - Une fois l'extension installée, tapez `rnfe` et appuyez sur `Tab` pour générer automatiquement un composant fonctionnel de base en React Native.
   - Voici un exemple de code généré :
     ```javascript
     import React from 'react';
     import { View, Text } from 'react-native';

     const MyComponent = () => {
       return (
         <View>
           <Text>MyComponent</Text>
         </View>
       );
     };

     export default MyComponent;
     ```
