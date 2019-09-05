**NODEJS**

-Permite desarrollar backends utilizando JS en el front y backend

-Crear API REST o backend
***

**Commands**

-Ejecutar un archivo
`$ node calculatrice.js`

-Capturar parametros por la consola
`process.argv.slice(params)`

`$ node calculatrice.js 1 2 3` Output: [ '1', '2', '3' ]

-Help
`$ npm help json`

-Install a package from https://docs.npmjs.com/searching-for-and-choosing-packages-to-download#package-search-rank-criteria

`$ npm install <package>`

-Save package on my current project
`$ npm install <package> --save`

-Save package only in dev, in local
`$ npm install <package> --save-dev`
***

**Basic packages for a project**
1) `body-parser`
2) `express`
3) `connect-multiparty`
4) `mongoose`
5) `nodemon`
***

**Access to MongoDB from Console**

`$ sudo service mongodb start` : Initialize mongo

`$mongo`

`$ show dbs;` : Show databases

`$ use <db_name>;` : Create database

`$ db;` : Access to our database recently created

`$ db.myCollection_name.insert({name:'Yurniel', email:'mail@domain.com''});` : Insert data

`$ show collections;` : Show collections

`$ db.myCollection_name.find();` : Show data of my collection

***

**INITIALIZE A PROJECT**

`$ npm init` : Create NodeJs project (This creates a package.json)

`$ npm install express --save`

`$ npm install body-parser --save`

`$ npm install connect-multiparty --save`

`$ npm install mongoose --save`

`$ npm install nodemon --save-dev`

Add `index.js` to the project root

Add `"start": "nodemon index.js"` on `package.json` scripts section

Create database

Connect to database on `index.js`
`var mongoose = require('mongoose)`;

`mongoose.Promise = global.Promise;`

`mongoose.connect('mongodb://localhost:27017/db_name').then(() => {
    console.log('Connected to database');
    }).catch(error => console.log(error));`

Add `app.js` to create server with NodeJS 

***

