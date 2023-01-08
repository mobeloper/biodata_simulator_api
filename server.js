const ranges=require('./constants')

const express = require('express')
const app = express()

app.get('/', function (req, res) {

    const data={
        heartBeat:ranges.generate(ranges.heartBeatMin,ranges.heartBeatMax),
        sleep:ranges.generate(ranges.sleepDurationMin,ranges.sleepDurationMax),
        steps:ranges.generate(ranges.stepsWalkedMin,ranges.stepsWalkedMax),
        glucose:ranges.generate(ranges.glucoseLevelMin,ranges.glucoseLevelMax),
        bp:ranges.generate(ranges.bpMin,ranges.bpMax),
        oxygen:ranges.generate(ranges.oxygenSaturationMin,ranges.oxygenSaturationMax)
    
    
    }
    
  res.json(data)
})

app.listen(1000)
