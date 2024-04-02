/* eslint-disable */
const functions = require("firebase-functions");
const fetch = require("node-fetch");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.helloWorld = functions.region("us-west2").https
    .onRequest((request, response) => {
      functions.logger.info("Hello logs!", {structuredData: true});
      response.send("Hello from Firebase!");
    });

exports.metriport = functions.region("us-west2").https
    .onRequest((req, res) => {

      console.log(`Received from Metriport... BODY: ${JSON.stringify(req.body, undefined, 2)}`);

      functions.logger.info(`Received from Metriport... BODY: ${JSON.stringify(req.body, undefined, 2)}`, {structuredData: true});

      //process.env.METRIPORT_WEBHOOKKEY

      if (req.body.ping) {
        console.log(`Sending 200 | OK + 'pong' body param`);
        return res.status(200).send({ pong: req.body.ping });
      }
      console.log(`Sending 200 | OK`);
      res.sendStatus(200);


    });
    
