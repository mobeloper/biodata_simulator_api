import * as dotenv from "dotenv";
dotenv.config();
// Keep dotenv import and config before everything else


//import express, { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import mountRoutes from "./routes/api.routes.js";

//const express = require("express");
//const cors = require("cors");

const app = express();
//const app: Application = express();


//global.__basedir = __dirname;

var corsOptions = {
origin: "http://localhost:4200"
};

//app.use(helmet()); // needs to come before any route declaration, including cors()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

mountRoutes(app);
//module.exports = app;

// const db = require("./app/models");

// //Connect to MongoDB database
// //TODO:
// // register to mongodb and get user/password to put in .env file

// db.mongoose
// .connect(db.url, {
//  useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("Connected to the database");
// })
// .catch(error => {
//   console.log("Cannot connect to the database", error);
//   process.exit();
// });


//Default route
app.get("/", (req, res) => {
  res.json({ message: "Simpl Healthcare Health and Medical Data Simulator" });
});

//app.use(errorHandler);

//require("./routes/api.routes")(app);

const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`[server]: API server is running on port ${PORT}.`);
// });

app.listen(PORT, async () => {
  // initialize connection to the databases
  //await initDB();
  console.log(`[server]: API server is running on port ${PORT}.`);
});
