# Application Météo React Native avec Backend NestJS

## Description du projet

Cette application météo combine un frontend React Native avec un backend NestJS pour fournir des informations météorologiques précises et en temps réel. L'application utilise la géolocalisation pour obtenir les données météo locales et offre une interface utilisateur intuitive et réactive.

## Fonctionnalités principales

- Affichage des conditions météorologiques actuelles
- Prévisions sur 5 jours
- Géolocalisation pour obtenir la météo locale
- Recherche de météo par ville
- Mise en cache des données pour une utilisation hors ligne

## Technologies utilisées

### Frontend
- React Native
- Expo
- React Navigation
- Axios

### Backend
- NestJS
- TypeORM
- @nestjs/axios
- @nestjs/cache-manager

### API
- OpenWeatherMap API

### Déploiement
- Docker
- Docker Compose

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- Docker et Docker Compose
- Compte Expo (pour le développement mobile)

## Installation

1. Clonez le dépôt :
git clone https://github.com/votre-username/meteo-app.git
cd meteo-app
text

2. Installez les dépendances pour le frontend et le backend :

cd frontend && npm install
cd ../backend && npm install
text

3. Configurez les variables d'environnement :
- Créez un fichier `.env` dans le dossier `backend` et ajoutez votre clé API OpenWeatherMap :
  ```
  OPENWEATHERMAP_API_KEY=votre_clé_api
  ```

## Lancement de l'application

### Développement

1. Démarrez le backend :

cd backend && npm run start:dev
text

2. Démarrez le frontend :

cd frontend && npm start
text

3. Utilisez l'application Expo Go sur votre appareil mobile pour scanner le QR code et lancer l'application.

### Production avec Docker

1. Construisez et lancez les conteneurs Docker :

docker-compose up --build
text

2. L'application sera accessible à l'adresse `http://localhost:3000` pour le backend.

## Structure du projet


meteo-app/
├── frontend/
│ ├── src/
│ ├── App.js
│ └── package.json
├── backend/
│ ├── src/
│ ├── Dockerfile
│ └── package.json
├── docker-compose.yml
└── README.md
text

## Contribution

Les contributions sont les bienvenues ! Veuillez consulter le fichier CONTRIBUTING.md pour plus de détails.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

Ce README fournit une vue d'ensemble complète de votre projet, incluant sa description, ses fonctionnalités principales, les technologies utilisées, les instructions d'installation et de lancement, ainsi que la structure du projet. N'hésitez pas à l'adapter en fonction des spécificités de votre application et de vos besoins.
