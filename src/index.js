'use strict';

//We are going to do a very basic server, this is not secure at the moment, I will add a proper database later...
const express = require('express');
const db = require('./db');
const path = require('path');
const bodyParser = require('body-parser')

//Load the data into memory
db.loadData();
db.saveData();

//Create our Server
let app = express();
app.use(bodyParser.json());

//Load our API Methods
require('./API/getConsoles')(app, db);
require('./API/getGames')(app, db);
require('./API/addGame')(app, db);
require('./API/editGame')(app, db);
require('./API/deleteGame')(app, db);

app.use('/', express.static(path.join(__dirname, './../www')));

//Setup a 404 handler.
app.get('*', function (req, res) {
    let logged = false;
    if(req && req._parsedOriginalUrl) {
        let url = req._parsedOriginalUrl;
        if(url.path) {
           console.log("404: Bad Path: " + url.path);
           logged = true;
        }
    }
	if(!logged) console.log("404 Received.");
    res.send('An error has occured! Please try again later.');
});

//Start server
app.listen(80, function () {
    console.log('Server is now online.');
});