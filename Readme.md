# TIW8 - TP2


## Projet
Cette  application est une version digitale d'un board de post-its qui facilitent aux étudiants leur prise de notes. 

L'application est déployée et accessible via ce lien:
http://tp2-tiw81-10e0902ac35482822319a17b8372046143133ca7de23f389a23f6.pages.univ-lyon1.fr/
Cependant il est conseillé de la lancer en local, pour de meilleures manipulations.
> [NOTE]  Vu l'absence d'une base de données ou d'un outil de storage, un rafraîchissement de la page va réinitialiser l'application



## Architecture du projet:
Le projet est composé de deux répertoires principaux :

  
-   *Server* : partie back de l'application (_Node.js_ + _Express.js_)  
  -   *Client* : partie front de l'application (_React_ + _Redux toolkit_)
### Client 
Composé de trois répertoires essentiels :

1-  *Components* : les différents composants de l'application

2- *Models*: Le dossier où on défini les types clés de l'application; BoardType et PostitType

 

 <details><summary>3- State: Le dossier qui gère l'état de l'application.</summary>


 3.1- Middleware: dedans est défini le middleware qui gère la synchronisation entre multidispositifs

   3.2- Routes: dedans on défini les routes de l'application

   3.3- Slices: dedans on défini les reducers, les actions et l'état initial du state de l'application

   3.4- Store: le store de l'application
</details> 

> [!Remarque]: Cette application est responsive mais l'url de forme ***board/boardID/postit/postitID*** a une particularité en mobile! 
Les boutons de navigation entre les postits (_pervious/next_) ne sont visibles que sur la version mobile de l'application grâce à la fonction ***IsMobile*** du module ***react-device-detect***. 
[ Une réactualisation de la page peut être nécessaire pour afficher/enlever cette fonctionnalité selon le type de dispositif que vous utilisez ]
## Manipulations:
L'application vous permet de faire le suivant :
- Ajouter un nouveau board
- Ajouter un post-it 
- Supprimer un post-it 
- Aimer un post-it
- Cacher un post-it
- Voir un post-it en plein écran
- Changer _le titre_ d'un post-it (il suffit de poser votre curseur sur le champ du titre ET cliquer sur l'icone du *stylo* pour enregistrer les modifications)
- Voir la liste des post-its favoris
- Basculer entre les post-its _mais_ que sur mobile
- L'application est synchronisée donc vous pouvez voir les changements sur deux onglets en temps réel (à l'exception du changement de board)
##### 1. Cloner le projet

~~~~
git clone https://forge.univ-lyon1.fr/tiw81/tp2.git
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


