# Guide de Transition d'une application React Native, API en MongoDB vers SQL

Ce guide à pour but de vous guider dans la transition d'une application utilisant react native et une API node.js/Express.js en MongoDB vers une base de données relationelle SQL.

## 1. Prérequis
##### 1.1 Configurer votre projet React Native :

- Axios: ```npm install axios```  
Axios est une bibliothèque JavaScript qui permet d'effectuer des requêtes HTTP depuis le navigateur et Node.js, facilitant ainsi la communication avec des API. Dans le cadre de l'authentification, Axios simplifie l'envoi de requêtes pour se connecter, s'inscrire et gérer les sessions utilisateur via des appels API sécurisés.

##### 1.2 Modifier la requête de Register :

Identifiez la structure des données que l'API SQL attend pour l'enregistrement d'un nouvel utilisateur.

Exemple: (  
  "FirstName": "John",  
  "LastName": "Doe",  
  "Address": "123 Main St",  
  "City": "Anytown",  
  "State": "CA",  
  "Zip": "12345",  
  "Country": "USA",  
  "Email": "john.doe@example.com",  
  "Password": "securePassword123")  

  









## Tableaux et commandes:

| Commande                  | Description                                                    |
|--------------------------|---------------------------------------------------------------|
| `axios.get(url)`         | Effectue une requête GET à l'URL spécifiée.                  |
| `axios.post(url, data)`  | Effectue une requête POST à l'URL avec les données fournies.  |
| `axios.put(url, data)`   | Effectue une requête PUT pour mettre à jour les données.      |
| `axios.delete(url)`      | Effectue une requête DELETE à l'URL spécifiée.                |
| `axios.interceptors`     | Permet d'intercepter les requêtes ou les réponses.            |
| `axios.create(config)`   | Crée une instance Axios avec une configuration personnalisée. |


## 