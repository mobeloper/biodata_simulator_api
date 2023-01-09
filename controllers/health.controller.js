



//const Metriport = require("@metriport/api")
//import { Metriport } from "@metriport/api";
//import { Activity } from "@metriport/api";
//const metriportClient = metriport("LVduWnh2alJMaWl2MlFlX3JoNWhJOjM0NjZjMjhjLWE0Y2ItNGQxZi05M2FkLTFjNWIzNTg1NGZjNw", "https://api.sandbox.metriport.com");


const ranges=require('../constants');
const { bodyParameters } = require("../healthdata/body");
const { activity } = require("../healthdata/activity");
const { userInfo } = require("../healthdata/user");
const { nutrition } = require("../healthdata/nutrition");
const { sleep } = require("../healthdata/sleep");
const { biometrics } = require("../healthdata/biometrics");


//const metriportClient = new Metriport()

exports.all = (req, res) => {
    try{
        
        const data={
            userInfo: userInfo,
            summary: {
                metadata: {
                    "date": new Date().toISOString(),
                },
                heartBeat:ranges.generate(ranges.heartBeatMin,ranges.heartBeatMax),
                steps:ranges.generate(ranges.stepsWalkedMin,ranges.stepsWalkedMax),
                glucose:ranges.generate(ranges.glucoseLevelMin,ranges.glucoseLevelMax),
                bp:ranges.generate(ranges.bpMin,ranges.bpMax),
                oxygen:ranges.generate(ranges.oxygenSaturationMin,ranges.oxygenSaturationMax),
                sleep:ranges.generate(ranges.sleepDurationMin,ranges.sleepDurationMax),
            },
            body: bodyParameters,
            sleep: sleep,
            nutrition: nutrition,
            biometrics: biometrics,
            activity: activity,
          }
          res.status(200).send(data);
          //res.json(data);


    }catch (error) {
        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
};


exports.activity = (req, res) => {
    try{
        res.status(200).send(activity);
    }catch (error) {
        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
};