Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@mobeloper 
Suriyaprakashhh
/
HealthMonitor-OpenAPI
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
HealthMonitor-OpenAPI/constants.js /
@Suriyaprakashhh
Suriyaprakashhh API code
Latest commit 4fad6e2 on Feb 21, 2021
 History
 1 contributor
41 lines (24 sloc)  836 Bytes

// range to generate mock data

//Normal-> 60 - 100
const heartBeatMin = 40
const heartBeatMax =120

// Normal -> 360 - 600 minutes

const sleepDurationMin = 240
const sleepDurationMax = 720

const stepsWalkedMin = 100
const stepsWalkedMax=10000

// Normal --> 70 - 140 mg/dL

const glucoseLevelMin = 60
const glucoseLevelMax = 200

// Normal Below 120

const bpMin = 60
const bpMax = 180

// Normal -> 96 - 98 %

const oxygenSaturationMin = 93
const oxygenSaturationMax = 98


function generate(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }




module.exports = { heartBeatMin,heartBeatMax,sleepDurationMin,sleepDurationMax,stepsWalkedMin,stepsWalkedMax,glucoseLevelMin,glucoseLevelMax,bpMin,bpMax,oxygenSaturationMin,oxygenSaturationMax,generate}
