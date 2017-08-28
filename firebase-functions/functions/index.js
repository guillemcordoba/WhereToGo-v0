// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.getNextQuestion = functions.https.onRequest((request, response) => {
    var gameName = request.body.gameName;
    var object = admin.database().ref('/'+gameName);
    response.send("hello world");
});

exports.getGamesEntryPoints = functions.https.onRequest((request, response) => {
    this.admin.database().ref('/');
});