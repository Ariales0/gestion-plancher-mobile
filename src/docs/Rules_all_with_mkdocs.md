# Guide Complet pour l'Installation et l'Utilisation de MkDocs

## Table des Matières

1. [Introduction à MkDocs](#introduction-à-mkdocs)
2. [Fonctionnalités Principales de MkDocs](#fonctionnalités-principales-de-mkdocs)
3. [Commandes et Description](#commande)
3. [Prérequis](#prerequis)
4. [Installation de MkDocs](#installation-de-mkdocs)
   1. [Installation de MkDocs](#1-installer-mkdocs)
   2. [Installation du Thème Material (Optionnel)](#2-installer-le-theme-material-optionnel)
   3. [Créer un Nouveau Projet MkDocs](#3-creer-un-nouveau-projet-mkdocs)
5. [Structure d'un Projet MkDocs](#structure-dun-projet-mkdocs)
6. [Configuration du Fichier `mkdocs.yml`](#configuration-du-fichier-mkdocsyml)
   1. [Configuration Basique](#1-configuration-basique)
   2. [Navigation](#2-navigation)
   3. [Thème et Apparence](#3-theme-et-apparence)
   4. [Extensions Markdown](#4-extensions-markdown)
   5. [Personnalisation avec CSS et JavaScript](#5-personnalisation-avec-css-et-javascript)
7. [Générer et Visualiser la Documentation](#generer-et-visualiser-la-documentation)
   1. [Lancer le Serveur de Développement](#1-lancer-le-serveur-de-developpement)
   2. [Générer les Fichiers Statics](#2-generer-les-fichiers-statics)
8. [Déploiement de la Documentation](#deployez-sur-GitHub-Pages-avec-la-commande-suivante)
9. [Conclusion](#conclusion)

---

## Introduction à MkDocs

**MkDocs** est un outil open-source utilisé pour générer des sites de documentation statiques à partir de fichiers Markdown. Il est simple à utiliser, flexible, et offre une configuration minimale via un fichier YAML ou YML.

## Fonctionnalités Principales de MkDocs

- **Facilité d'utilisation** : Écrivez vos documents en Markdown et générez un site complet.
- **Support des thèmes** : Utilisez différents thèmes comme le populaire thème **Material** pour personnaliser l'apparence.
- **Navigation automatique** : MkDocs organise automatiquement la structure de vos fichiers pour créer des menus de navigation.
- **Extensions Markdown** : Ajoutez des fonctionnalités comme les tables des matières, les notes de bas de page, et la coloration syntaxique du code.

## Commande

| Commande                                  | Description                                                                 |
|-------------------------------------------|-----------------------------------------------------------------------------|
| `pip install mkdocs`                               | Installe MkDocs de base sans thème supplémentaire.                                            |
| `pip install mkdocs-material`             | Installe le thème Material pour MkDocs.                                      |
| `mkdocs new my-project`                   | Crée un nouveau projet MkDocs dans le répertoire `my-project`.               |
| `cd my-project`                           | Accède au répertoire du nouveau projet.                                      |
| `mkdocs build`                            | Génère les fichiers statiques du site prêt pour la production.               |
| `mkdocs serve`                            | Lance le serveur de développement local pour prévisualiser le site MkDocs.   |

| Fonctionnalité / Commande                          | Description                                                                                  |
|----------------------------------------------------|----------------------------------------------------------------------------------------------|
| `mkdocs.yml`                                       | Fichier de configuration principal pour personnaliser MkDocs (titre, thème, navigation, etc.). |
| `theme: 'material'`                                | Ajoute le thème Material dans le fichier `mkdocs.yml` sous la section `theme:`.               |
| `nav:`                                              | Définir la navigation du site dans `mkdocs.yml` pour organiser les pages et chapitres.        |
| `extra_css:`                                        | Ajoute des fichiers CSS personnalisés pour ajuster le style du site dans `mkdocs.yml`.        |
| `extra_javascript:`                                 | Ajoute des fichiers JavaScript supplémentaires dans `mkdocs.yml`.                            |
| `pip install mkdocs-material-extensions`           | Installe des extensions pour améliorer les fonctionnalités du thème Material.                 |
| `mkdocs gh-deploy`                                 | Déploie le site généré sur GitHub Pages directement.                                          |
| `plugins:`                                         | Ajoute des plugins dans `mkdocs.yml` pour des fonctionnalités supplémentaires comme la recherche. |
| `docs/`                                            | Répertoire où placer vos fichiers Markdown qui composeront les pages du site.                 |
| `mkdocs serve --dirtyreload`                       | Lance un serveur de développement avec rechargement rapide des modifications locales.         |
| `mkdocs build --clean`                             | Supprime les fichiers générés précédemment et construit à nouveau les fichiers du site.       |


## Prérequis

Avant d'installer MkDocs, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Python 3.6 ou version ultérieure ](https://www.python.org/downloads)

- Pip (gestionnaire de paquets Python)

## Installation de MkDocs

### 1. Installer MkDocs

Pour installer MkDocs, exécutez la commande suivante dans votre terminal ou invite de commandes :

```bash
pip install mkdocs
```

### 2. Installer le Thème Material (Optionnel)

Le thème Material est un des thèmes les plus utilisés avec MkDocs. Pour l'installer, exécutez :

```bash
pip install mkdocs-material
```

### 3. Créer un Nouveau Projet MkDocs

Une fois que MkDocs est installé, vous pouvez créer un nouveau projet en utilisant la commande suivante :

```bash
mkdocs new mon_projet
```

Cette commande va générer un répertoire mon_projet avec la structure de base suivante :
```
mon_projet/
    mkdocs.yml  
    docs/  
        index.md  
```
- mkdocs.yml : Le fichier de configuration de MkDocs.  
- docs/ : Ce répertoire contiendra tous vos fichiers Markdown pour la documentation.

### 4. Structure d'un Projet MkDocs

Voici un aperçu de la structure typique d'un projet MkDocs :
```
mon_projet/
    mkdocs.yml         # Fichier de configuration principal
    docs/              # Dossier contenant la documentation
        index.md       # Page d'accueil de votre documentation
        installation.md
        guide_utilisation.md
        reference.md
```

### 5. Configuration du Fichier mkdocs.yml

##### 1. Configuration Basique  
Le fichier mkdocs.yml est où vous définissez la plupart des options de configuration de votre site de documentation. Voici un exemple simple :
```
site_name: Ma Documentation
theme: 
  name: readthedocs
```
- site_name : Le nom de votre site.  
- theme : Définit le thème utilisé (ici, le thème Material).  

##### 2. Navigation  
La navigation dans MkDocs est définie dans la section nav du fichier mkdocs.yml. Vous pouvez créer des menus avec plusieurs niveaux :
```
nav:
  - Accueil: index.md
  - Guide:
      - Installation: installation.md
      - Utilisation: guide_utilisation.md
  - Référence: reference.md
```
##### 3. Thème et Apparence
Vous pouvez personnaliser le thème et l'apparence de votre site en modifiant le fichier mkdocs.yml :
```
theme:
  name: readthedocs
  palette:
    primary: 'indigo'
    accent: 'pink'
```
##### 4. Extensions Markdown
MkDocs supporte plusieurs extensions Markdown qui ajoutent des fonctionnalités supplémentaires :
```
markdown_extensions:
  - toc:       # Génère des tables des matières automatiques
      permalink: true
  - admonition  # Permet l'ajout de blocs de texte attentionnels (ex. info, warning)
  - codehilite # Coloration syntaxique pour les blocs de code
```
##### 5. Personnalisation avec CSS et JavaScript
Vous pouvez également ajouter des fichiers CSS ou JavaScript personnalisés :
```
extra_css:
  - 'css/custom.css'

extra_javascript:
  - 'js/custom.js'
```
### 6. Générer et Visualiser la Documentation
##### 1. Lancer le Serveur de Développement
Pour voir votre documentation en cours de développement, lancez le serveur de développement local :
```
mkdocs serve
```
Cela lancera un serveur à l'adresse http://127.0.0.1:8000/, où vous pourrez voir les changements en temps réel.

##### 2. Générer les Fichiers Statics
Lorsque vous êtes prêt à déployer votre site, générez les fichiers statiques en exécutant :
```
mkdocs build
```
Cela créera un répertoire site/ contenant les fichiers HTML statiques.

Déploiement de la Documentation
Vous pouvez déployer votre documentation générée sur n'importe quel serveur d'hébergement de sites statiques. Si vous utilisez GitHub Pages, voici comment faire :

##### 3. Initialisez un dépôt Git dans votre projet

Ajoutez vos fichiers et validez les changements :
```
git add .
git commit -m "Ajout de la documentation"
```
##### 4. Déployez sur GitHub Pages avec la commande suivante

```
mkdocs gh-deploy
```
Cela publiera votre site directement sur GitHub Pages.

### Conclusion
MkDocs est un outil simple et puissant pour créer de la documentation statique. Grâce à sa facilité d'installation et à sa flexibilité via les fichiers Markdown, il est idéal pour documenter des projets de toutes tailles. Vous pouvez approfondir votre utilisation en explorant les différentes options et thèmes disponibles, ainsi que les documents officiels de MkDocs.

