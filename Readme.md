# TIW8 - TP1 Mise en place Stack [React + Node]


## Projet

L'application est déployée et disponible sur ce lien:
http://tiw8-p2312644-ada18a34041d10e39f5ffeb8b65a1dbed2f84e7cbb88e1b7d.pages.univ-lyon1.fr/

Le projet est composé de deux principaux dossiers :

  1.  *Server*: partie back de l'application (NodeJs + ExpressJs)  
  2.  *Client*: partie front de l'application (React)


## Prérequis (dernière version lts)

    Node.js 
    nvm
    npm/yarn    
    Express.js

## Manipulations

##### 1. Cloner le projet

> `git clone https://forge.univ-lyon1.fr/p2312644/tiw8.git`

##### 2. Installer les dépendances 

> `yarn install` 

**Remarque:** cette commande est à lancer depuis les deux répertoires _client_ et _server_

##### 3. Lancer le serveur
> Accéder au répertoire par un `cd server` et puis lancer `yarn run start`

Le serveur se lance sur le port `3000`

##### 4. Lancer le client
> En mode développement : `yarn run dev`
> 
> En mode production : `yarn run build`

L'application est disponible sur [localhost:3000]() 

##### 5.  Evaluer le code 
> `yarn run lint`

**Remarque :** à lancer depuis le répertoire _client_


