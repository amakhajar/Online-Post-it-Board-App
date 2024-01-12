# TIW8 - TP1 Mise en place Stack [React + Node]


## Projet

L'application est déployée et accessible via ce lien:
http://tiw8-p2312644-ada18a34041d10e39f5ffeb8b65a1dbed2f84e7cbb88e1b7d.pages.univ-lyon1.fr/

Le projet est composé de deux répertoires principaux :

  
-   *Server* : partie back de l'application (_Node.js_ + _Express.js_)  
  -   *Client* : partie front de l'application (_React_)


## Prérequis (dernière version lts)

   -  Node.js 
-    nvm
-    npm/yarn    
-    Express.js


## Manipulations

##### 1. Cloner le projet

~~~~
git clone https://forge.univ-lyon1.fr/p2312644/tiw8.git
~~~~
##### 2. Installer les dépendances 
~~~~
 yarn install 
~~~~
> _Remarque: à lancer depuis les deux répertoires _client_ et _server__

##### 3. Lancer le serveur
~~~~
Accéder au répertoire par un `cd server` et puis lancer `yarn run start`
~~~~

> _Le serveur se lance sur le port `3000`_

##### 4. Lancer le client
-  En mode développement : 
~~~~
yarn run dev
~~~~
 
-  En mode production : 
~~~~
yarn run build
~~~~

> _L'application est disponible sur_ [localhost:3000]() 

##### 5.  Evaluer le code 

~~~~
yarn run lint
~~~~

> _Remarque: à lancer depuis le répertoire _client__


