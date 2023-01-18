/* eslint-disable */
const functions = require("firebase-functions");
const fetch = require("node-fetch");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

// exports.helloWorld = functions.region("us-west2").https
//     .onRequest((request, response) => {
//       functions.logger.info("Hello logs!", {structuredData: true});
//       response.send("Hello from Firebase!");
//     });

exports.metriport = functions.region("us-west2").https
    .onRequest((req, res) => {

      // console.log('metriport webhook input request: ',req)

      // functions.logger.info("Hello logs!", {structuredData: true});

      // res.status(200).send("Hello from Simpl Healthcare!");
      // res.status(200).json(data);


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
    
// // This is the URL that we will callback and send the content of the updated data node.
// // As an example we're using a Request Bin from http://requestb.in
// // TODO: Make sure you create your own Request Bin and change this URL to try this sample.
// const WEBHOOK_URL = 'http://requestb.in/1mqw97l1';

// // Reads the content of the node that triggered the function and sends it to the registered Webhook
// // URL.
// exports.webhook = functions.database.ref('/hooks/{hookId}').onCreate(async (snap) => {
//   const response = await fetch(WEBHOOK_URL, {
//     method: 'post',
//     body: JSON.stringify(snap.val()),
//     headers: {'Content-Type': 'application/json'}
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP Error: ${response.statusCode}`);
//   }
//   functions.logger.log('SUCCESS! Posted', snap.ref);
// });