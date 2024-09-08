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


![Fonctionnement](https://github.com/Ariales0/gestion-plancher-mobile/blob/iteration-Visuel-steve/src/assets/images/JWT_guide/jwt-workflow.png)

## Sécurité des JWT






## Exemple pratique





## Conclusion

