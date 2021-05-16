# Orinoco #

Projet n5 de la formation Web Développeur chez [OpenClassRooms.com](https://openclassrooms.com/ "OpenClassRooms")

Projet hebergé pour fast-test: [orinoco.42web.io](http://orinoco.42web.io/ "Fast-test orinoco.42web.io")

---

### Prerequisites ###

Vous devrez avoir le [Node.js](https://nodejs.org/ "Site officiel Node.js")  et `npm` installés sur votre ordinateur.

---

### Installation ###

Clonez ce dépôt. Depuis le dossier du projet, exécutez `npm install`. Après, vous pouvez démarrer le **serveur (back-end)** avec `node server`.
Si le serveur fonctionne sur un autre port pour quelque raison que ce soit, c'est indiqué dans la console au démarrage du serveur, par ex. `Listening on port 3001`.

Le **back-end** doit fonctionner sur `localhost` avec le port par défaut `3000`. 

Le **front-end** doit fonctionner sur `localhost` avec le port par défaut `8080`, (utiliser webpack DevServer)

---

### Fonctionnalité et hébergement ###

Reglage des port pour application dans `hostLink.js`

PORT pour front-end: `"8080"`

PORT pour back-end: `"3000"`

Si vous allez héberger le site - dans `hostLink.js`, il faut mettre pour les ports `""`

