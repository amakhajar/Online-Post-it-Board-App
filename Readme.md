# Hajar AMAKHZOUN p2312644

## Le projet
L'application est déployée et disponible sur ce lien: https://tiw8-ibrahimi-elamim.uni.codinget.me/

Le projet est composé de deux dossiers importants :
 1/ Dossier *Server*: partie back de l'application (NodeJs + ExpressJs)
 
 2/ Dossier *Client*: partie front de l'application (React)

## Requirements

    NodeJs : lts
    nvm    : lts
    Express : lts

## Dépendances

### Server dependencies (package.json)

    Dependencies : 

       "@types/express": "^4.17.21",
       "@types/node": "^20.10.6",
       "express": "^4.18.2",
       "ts-node": "^10.9.2"

    Development dependencies: 

       "typescript": "^5.3.3"

### Client dependencies (package.json)

    Dependencies : 

        "eslint": "5.16.0",
        "eslint-plugin-react": "^7.33.2",
        "extract-text-webpack-plugin": "^3.0.2",
        "tailwindcss": "^3.4.1"

    Development dependencies: 
        "@types/react": "^18.2.47",
        "@types/react-dom": "^18.2.18",
        "autoprefixer": "^10.4.16",
        "css-loader": "^6.9.0",
        "file-loader": "^6.2.0",
        "html-webpack-plugin": "^5.6.0",
        "mini-css-extract-plugin": "^2.7.6",
        "postcss": "^8.4.33",
        "postcss-loader": "^7.3.4",
        "postcss-preset-env": "^9.3.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "source-map-loader": "^4.0.2",
        "style-loader": "^3.3.4",
        "tailwindcss-animate": "^1.0.7",
        "ts-loader": "^9.5.1",
        "typescript": "^5.3.3",
        "webpack": "^5.89.0",
        "webpack-cli": "^5.1.4",
        "webpack-dev-server": "^4.15.1"

## Setup 

    Dans le serveur 
        yarn add express --save
        yarn add typescript ts-node express --dev
        yarn add @types/node @types/express
        npm i -g tsc
        tsc --init

    Dans le client
        yarn add typescript --dev 
        yarn add react-dom react @types/react-dom @types/react --dev
        yarn add --dev ts-loader
        npm install --save-dev @babel/core @babel/preset-env
        npm install --save-dev babel-loader
        yarn add --dev eslint
        yarn add --dev eslint-webpack-plugin

## Manipulation en local 

        yarn install        :  Installer les depéndences (à faire dans les deux répertoires en local)
        yarn run dev        :  construire le client en mode développement (depuis le répertoire *Client* )
        yarn run build      :  construire le client en mode production (depuis le répertoire *Client* )
        yarn run start      :  lancer le serveur (depuis le répertoire *server* )
