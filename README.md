# GestionPlancherMobile
Voici les étapes du processus pour la création d'une application mobile React Native et de son environnement.

Sources de tutoriels:  
**Sources de tutoriels:**
**==Sources de tutoriels:==**
**Sources de tutoriels:** 🟨

https://www.youtube.com/watch?v=gXrBpt9MLzE&t=11s  
https://www.youtube.com/watch?v=o2GUagUfJeA

Autres Sources:  
Documentation de React Native pour la mise en place d'un environnement: https://reactnative.dev/docs/getting-started  
Expo guides: https://docs.expo.dev/guides/overview/   
Expo guide pour intaller les dependencies  https://docs.expo.dev/router/installation/#install-dependencies  
► npx create-expo-app@latest  
► npx expo start  
► npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar  
Design React Native Elements: https://reactnativeelements.com/docs  
Créer des composants avec Tailwind CSS: https://www.youtube.com/watch?v=hAMVFvMB5Jo  https://tailwindcss.com  


Création d'un nouveau projet.  
1- Ouvrir un terminal sous windows.  
2- S'assurer d'être au bon endroit pour créer le projet.  Faire Windows + R et dans écrire wl (pour Windows Terminal).  
3- Un terminal sous windows va s'ouvrir.  
4- Vous allez devoir copier le chemin ou vous voulez créer votre nouveau projet.  
    exemple du chemin: C:\ecole\1-Informatique\Session 5\Programmation WEB avancée\Projet 2 - Native mobile-Schluter- 30% Équipe  
5- Simplement taper dans le terminal votre chemin ainsi "nom du chemin"  
    cd "C:\ecole\1-Informatique\Session 5\Programmation WEB avancée\Projet 2 - Native mobile-Schluter- 30% Équipe\gestion-plancher-mobile"  

6- npx create-expo-app gestion-plancher-mobile -t       (-t permet de choisir un template)  choisir blank (TypeScript)  

Possible que cette étape soit demandé pour utiliser expo-app. 
expo-app fait partie de l'écosystème Expo, qui est un ensemble d'outils et de services destinés à simplifier le développement d'applications mobiles en utilisant React Native.  
7- Installer expo-app. 
Documentation Start a new React Native project with Expo https://reactnative.dev/docs/environment-setup  
https://docs.expo.dev/get-started/set-up-your-environment/?platform 

Étape 8: optionnelle si vous avez un téléphone cellulaire Android.  
Simulateur pour android (recommandé par google pour le développement d'application Android)  

8-Installer Android Studio: https://developer.android.com/studio?hl=fr  
8.1 Accepter les termines d'utilisation.  
8.2 Lancer l'application Android Studio et cliquer sur More actions (au milieu) et Virtual Device Manager.  
8.3 Au choix prendre le téléphone par default ou créer un nouveau appareil en cliquant sur + (Create Virtual Device) Next (noté l'API LEVEL).  

9- Installer React devtools  
Documentation React devtools: https://reactnative.dev/blog/2023/01/12/version-071#react-devtools  
React DevTools est un outil essentiel pour les développeurs React afin de faciliter le débogage, l'optimisation et l'inspection des applications React. 
9.1 Dans votre projet, ouvir le terminal et y inscrire cette commande: npm install -g react-devtools  

10- Ensuite compiler et lancer l'application via la commande: npm run android  

Si vous avez ce message c'Est que votre version de TypeScript n'est pas compatible avec la version de Expo:  
The following packages should be updated for best compatibility with the installed expo version:  
  typescript@5.5.4 - expected version: ~5.3.3  
Your project may not work correctly until you install the expected versions of the packages.  

Il est recommandé d'intaller la version de TypeScript 5.3.3 qui est compatible avec Expo à l'aide de cette commande: npm install --save-dev typescript@~5.3.3  
Vérifier que la version est correct: npx tsc --version  
Redémarrer le Metro Bundler: npm run android  

Si vous êtes sur l'émulateur android possible de faire CTRL + M permet de voir plusieurs options (inspecteur d'éléments)  

React-DevTools permet d'inspecter et de déboguer la structure des composants React dans une application en temps réel.  
11-Lancer React-DevTools via la commande: react-devtools  

Si vous avez ce message react-devtools : Impossible de charger le fichier C:\Users\X\AppData\Roaming\npm\react-devtools.ps1. Le fichier (nom du fichier) n’est pas signé numériquement.  

Explication de l'erreur: PowerShell a une stratégie d'exécution qui contrôle les types de scripts qui peuvent être exécutés. Par défaut, sur certaines machines, cette stratégie peut être définie sur Restricted ou RemoteSigned, ce qui empêche l'exécution de scripts non signés, comme celui de react-devtools.  
Documentation Microsoft: https://learn.microsoft.com/fr-fr/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4   

Solution:  
11.1 Lancer Windows PowerShell en tant qu'Administrateur.  
11.2 Vérifiez la stratégie actuelle : Tapez la commande suivante pour vérifier la stratégie d'exécution actuelle : Get-ExecutionPolicy  
11.3 Changez la stratégie d'exécution : Pour permettre l'exécution de scripts non signés (ce qui est généralement sûr pour les scripts locaux), tapez la commande suivante : Set-ExecutionPolicy RemoteSigned  
11.4 Relancer l'application React-DevTools via la commande: react-devtools  
DevTools devrait s'ouvrir.  
11.5 Aller sur le cellulaire et faire CTRL + M et sélectionner Reload. Le Devtools est enfin prêt.  

Recommmandation d'extensions à installer dans Visual Studio Code pour facilité et accélérer le développement avec React Native:    
► ES7+ React/Redux/React-Native snippets est une extension pour Visual Studio Code qui fournit des raccourcis clavier permettant de générer rapidement du code standard pour React, React Native, Redux, et JavaScript moderne.  
exemple: rnfe + tab  
  
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
