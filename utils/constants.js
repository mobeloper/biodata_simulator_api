
// Normal ranges to generate mock data

//Normal-> 60 - 100
const heartBeatAvg = 70;
const heartBeatMin = 40;
const heartBeatMax = 220;

// Normal -> 360 - 600 minutes
const sleepDurationMin = 240;
const sleepDurationMax = 720;

const stepsWalkedMin = 100;
const stepsWalkedMax=10000;


// Normal --> 70 - 140 mg/dL
const glucoseLevelMin = 60;
const glucoseLevelMax = 200;

// Normal Below 120
const bpMin = 60;
const bpMax = 180;

// Normal -> 96 - 98 %
const oxygenSaturationMin = 93;
const oxygenSaturationMax = 98;


let ranges = { heartBeatAvg,heartBeatMin,heartBeatMax,sleepDurationMin,sleepDurationMax,stepsWalkedMin,stepsWalkedMax,glucoseLevelMin,glucoseLevelMax,bpMin,bpMax,oxygenSaturationMin,oxygenSaturationMax};

export default ranges;
