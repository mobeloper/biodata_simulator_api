
import ranges from "../utils/constants.js"
import generate from "../utils/generate.js";

import body from "../healthdata/body.js";
import activity from "../healthdata/activity.js";
import userInfo from "../healthdata/user.js";
import nutrition from "../healthdata/nutrition.js";
import sleep from "../healthdata/sleep.js";
import biometrics from "../healthdata/biometrics.js";


import { Metriport } from "@metriport/api";
const metriportClient = new Metriport(
    "LVduWnh2alJMaWl2MlFlX3JoNWhJOjM0NjZjMjhjLWE0Y2ItNGQxZi05M2FkLTFjNWIzNTg1NGZjNw", 
    "https://api.sandbox.metriport.com"
);


//const ranges=require('../constants');

// const { body } = require("../healthdata/body");
// const { activity } = require("../healthdata/activity");
// const { userInfo } = require("../healthdata/user");
// const { nutrition } = require("../healthdata/nutrition");
// const { sleep } = require("../healthdata/sleep");
// const { biometrics } = require("../healthdata/biometrics");



//exports.all = (req, res) => {
export function allDummy(req, res){
    try{
        const data={
            userInfo,
            summary: {
                metadata: {
                    "date": new Date().toISOString(),
                },
                heartBeat:generate(ranges.heartBeatMin,ranges.heartBeatMax),
                steps:generate(ranges.stepsWalkedMin,ranges.stepsWalkedMax),
                glucose:generate(ranges.glucoseLevelMin,ranges.glucoseLevelMax),
                bp:generate(ranges.bpMin,ranges.bpMax),
                oxygen:generate(ranges.oxygenSaturationMin,ranges.oxygenSaturationMax),
                sleep:generate(ranges.sleepDurationMin,ranges.sleepDurationMax),
            },
            body,
            sleep,
            nutrition,
            biometrics,
            activity,
          }
          //res.status(200).send(data);
          res.status(200).json(data);


    }catch (error) {
        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
};


//exports.activity = (req, res) => {
//export function getActivity(req, res){
export async function getActivity(req, res){
    try{

        // //const appUserId = "test.user";
        // const appUserId = req.query.uid;
        
        // //const metriportUserId = "3fe738a7-1f65-480c-9fd6-b9ef5dabef04";
        // const metriportUserId = await metriportClient.getMetriportUserId(appUserId);
        

        const metriportUserId = req.query.uid;
        console.log("checking for activity data from user: ",metriportUserId);

        let dateNow = new Date().toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles'
        });
        dateNow = new Date(dateNow).toISOString();
        console.log(dateNow);
        dateNow = dateNow.substring(0, dateNow.indexOf("T"));
 
        await metriportClient.getActivityData(
            metriportUserId,
            dateNow
            ).then((data)=>{
                res.status(200).send({metriportData:data});
            });
    


    }catch (error) {
        if(!req.query.uid)
        {
            res
        .status(501)
        .send({message: "uid missing. Try something like... ?uid=test.user"});
        }else if(!req.query.uid == null)
        {
            res
        .status(501)
        .send({message: "uid cannot be empty. Try something like... ?uid=test.user"});
        }

        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
};

export async function getSleep(req, res){
    try{

        // //req.params.uid
        // //req.query.uid
        // //console.log("user: ",req.query.uid);

        // //const appUserId = "test.user";
        // const appUserId = req.query.uid;
        
        // //const metriportUserId = "3fe738a7-1f65-480c-9fd6-b9ef5dabef04";
        // const metriportUserId = await metriportClient.getMetriportUserId(appUserId);

        
        const metriportUserId = req.query.uid;

        console.log(metriportUserId);

        let dateNow = new Date().toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles'
        });
        dateNow = new Date(dateNow).toISOString();
        console.log(dateNow);
        dateNow = dateNow.substring(0, dateNow.indexOf("T"));
 
        //const sleep = await metriportClient.getSleepData(
        await metriportClient.getSleepData(
        metriportUserId,
        dateNow
        ).then((sleep)=>{
            res.status(200).send(sleep);
        });

        //res.status(200).send(sleep);

    }catch (error) {

        if(!req.query.uid)
        {
            res
        .status(501)
        .send({message: "uid missing. Try something like... ?uid=test.user"});
        }else if(!req.query.uid == null)
        {
            res
        .status(501)
        .send({message: "uid cannot be empty. Try something like... ?uid=test.user"});
        }

        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
};


export async function receiveHealthDataFromMetriport(req, res){
    try{

        // const bodyContent = JSON.stringify(req.body);
        // const headerContent = JSON.stringify(req.headers);

        // res.status(200).send(`headerContent: ${headerContent} \n\n bodyContent: ${bodyContent}`);


        console.log(`Received from Metriport... BODY: ${JSON.stringify(req.body, undefined, 2)}`);

        //process.env.METRIPORT_WEBHOOKKEY

        if (req.body.ping) {
          console.log(`Sending 200 | OK + 'pong' body param`);
          return res.status(200).send({ pong: req.body.ping });
        }
        console.log(`Sending 200 | OK`);
        res.sendStatus(200);

    }catch (error) {

        if(!req.query.uid)
        {
            res
        .status(501)
        .send({message: "uid missing. Try something like... ?uid=test.user"});
        }else if(!req.query.uid == null)
        {
            res
        .status(501)
        .send({message: "uid cannot be empty. Try something like... ?uid=test.user"});
        }

        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
};


export async function authLogin(req,res){
    try{
        const appUserId = req.query.uid;
        const metriportUserId = await metriportClient.getMetriportUserId(appUserId);
        const response = await metriportClient.getConnectToken(metriportUserId);

        res.status(200).send(`MetriportUserId=${metriportUserId}\n\nSession Token (valid for 10min only): ${response}`);

    }catch(error){
        if(!req.query.uid)
        {
            res
        .status(501)
        .send({message: "uid missing. Try something like... ?uid=test.user"});
        }else if(!req.query.uid == null)
        {
            res
        .status(501)
        .send({message: "uid cannot be empty. Try something like... ?uid=test.user"});
        }

        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
}

export async function authUserInfo(req,res){
    try{
        const metriportUserId = req.query.uid;

        console.log(metriportUserId);

        let dateNow = new Date().toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles'
        });
        dateNow = new Date(dateNow).toISOString();
        console.log(dateNow);
        dateNow = dateNow.substring(0, dateNow.indexOf("T"));
 
        await metriportClient.getUserData(
        metriportUserId,
        dateNow
        ).then((data)=>{
            res.status(200).send({userData: data});
        });
    }catch(error){
        if(!req.query.uid)
        {
            res
        .status(501)
        .send({message: "uid missing. Try something like... ?uid=test.user"});
        }else if(!req.query.uid == null)
        {
            res
        .status(501)
        .send({message: "uid cannot be empty. Try something like... ?uid=test.user"});
        }

        res
        .status(500)
        .send({message: "Wrong document or schema"});
    }
}

let healthAPI = {allDummy,getActivity,getSleep,receiveHealthDataFromMetriport,authLogin,authUserInfo}

export default healthAPI => {healthAPI};