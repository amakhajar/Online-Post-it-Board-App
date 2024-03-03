# TIW8 - TP1 Mise en place Stack [React + Node]


## Projet
Cette  application est une version digitale d'un board de post-its qui facilitent aux étudiants leur prise de notes. 

L'application est déployée et accessible via ce lien:
http://tiw8-p2312644-ada18a34041d10e39f5ffeb8b65a1dbed2f84e7cbb88e1b7d.pages.univ-lyon1.fr/
Cependant pour faire des manipulations, il est conseillé de la lancer en local.
Vu l'absence d'enregistrement d'état, un raffraichissement de la page va reinitier l'application à son état initial

Le projet est composé de deux répertoires principaux :

  
-   *Server* : partie back de l'application (_Node.js_ + _Express.js_)  
  -   *Client* : partie front de l'application (_React_+Redux toolkit)

## Architecture du projet:
### Client 
Composé de trois répertoires essentiels :
1- *Components* : les différents composants de l'application
> _Remarque: Cette application est responsive mais l'url de forme *board/boardID/postit/postitID* a une particularité en mobile! 
Les boutons de navigation entre les postits (pervious/next) ne sont visibles que sur la version mobile de l'application grâce à la fonction *IsMobile* du module *react-device-detect*. 
Remarque: Une réactualisation de la page peut être nécessaire pour afficher/enlever cette fonctionnalité selon le type de device que vous utilisez
2- *models*: Le dossier où on défini les types clés de l'application; BoardType et PostitType
3- *state*: Le dossier qui gère l'état de l'application. 
   3.1- *Middleware*: dedans est défini le middleware qui gère la synchronisation entre multidispositifs
   3.2- *routes*: dedans on défini les routes de l'application
   3.3- *Slices*: dedans on défini les reducers, les actions et l'état initial du state de l'application
   3.4- *store*: le store de l'application

## Manipulations:
L'application vous permet de faire le suivant :
- Ajouter un nouveau board
- Ajouter un post-it 
- Supprimer un post-it 
- Aimer un post-it
- Cacher un post-it
- Aggrandir un post-it
- Editer #le titre# d'un post-it (Pour modifier le titre, il suffit de poser votre curseur sur le champ du titre ET pour enregistrer les modifications cliquer sur l'icone du *stylo*)
- Voir la liste des post-its aimés
- Basculer entre les post-its MAIS que sur mobile

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
cd server && yarn run start
~~~~

> _Le serveur se lance sur le port `3000`_

##### 4. Lancer le client
-  En mode développement : 
~~~~
cd client && yarn run dev
~~~~
 
-  En mode production : 
~~~~
cd client && yarn run build
~~~~

> _L'application est disponible sur_ [localhost:3000](http://localhost:3000/) 

##### 5.  Evaluer le code 

~~~~
yarn run lint
~~~~

> _Remarque: à lancer depuis le répertoire _client__ 


