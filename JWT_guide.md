# Guide sur les JSON Web Tokens (JWT)

Ce guide explique en détail ce qu'est un JSON Web Token (JWT), comment il fonctionne et comment l'utiliser dans vos applications.

## Table des matières
1. [Introduction aux JWT](#introduction-aux-jwt)
2. [Structure d'un JWT](#structure-dun-jwt)
3. [Utilisation des JWT](#utilisation-des-jwt)
4. [Sécurité des JWT](#sécurité-des-jwt)
5. [Exemple pratique](#exemple-pratique)
6. [Conclusion](#conclusion)

---

## Introduction aux JWT

Un JSON Web Token (JWT) est un format de jeton ouvert qui permet la transmission sécurisée d'informations entre deux parties sous la forme d'un objet JSON. Ces informations sont signées numériquement pour garantir l'authenticité et l'intégrité des données.

## Structure d'un JWT

Un JWT est composé de trois parties séparées par des points :
1. **Header** : Contient le type (typ) de token (JWT) et l'algorithme de signature (alg).
2. **Payload** : Contient les revendications (claims) document Json, c'est-à-dire les informations à transmettre.  
    C'est l'emplacement ou est précisé les dates de création et d'expiration du token.  
    Exemple: (exp = expiration en timestamp    "exp": 1647807974)  
3. **Signature** : Vérifie que le contenu n'a pas été altéré. Signé avec un secret que seul le server connaît.    
![Structure du JWT](https://github.com/Ariales0/gestion-plancher-mobile/blob/iteration-Visuel-steve/src/assets/images/JWT_guide/Structured'un%20JWL.png)  

Voici un exemple de JWT :




## Utilisation des JWT  
  
Les JWT sont souvent utilisés pour :
- **Authentification** : Ils permettent à un utilisateur de se connecter une fois et de continuer à accéder aux ressources sans avoir à se reconnecter à chaque requête.
- **Échange d'information sécurisé** : Le contenu d'un JWT peut être signé et éventuellement chiffré.


![Fonctionnement](https://github.com/Ariales0/gestion-plancher-mobile/blob/iteration-Visuel-steve/src/assets/images/JWT_guide/jwt-workflow.png)

## Sécurité des JWT
  
Bien que les JWT soient pratiques, il est essentiel de les utiliser correctement pour garantir la sécurité :
- **Ne stockez jamais de JWT sensibles dans le stockage local du navigateur**.
- **Utilisez HTTPS** pour sécuriser la transmission des JWT.
- **Revocation** : Assurez-vous d'avoir un mécanisme pour révoquer les tokens si nécessaire.





## Exemple pratique
  
  Voici comment générer un JWT en utilisant la bibliothèque `jsonwebtoken` en Node.js :

```javascript
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'secret_key', { expiresIn: '1h' });
console.log(token);
![Fonctionnement](https://github.com/Ariales0/gestion-plancher-mobile/blob/iteration-Visuel-steve/src/assets/images/JWT_guide/exemple-login.jpg)


## Conclusion
  
Les JWT sont un outil puissant pour l'authentification et l'échange sécurisé de données, mais ils doivent être utilisés avec prudence pour éviter des failles de sécurité. Prenez soin de toujours protéger vos tokens et de suivre les meilleures pratiques en matière de sécurité.
![JWT Security Best Practices - Auth0](https://auth0.com/docs/secure/tokens/token-best-practices)