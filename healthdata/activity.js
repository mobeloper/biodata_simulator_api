
const ranges = require('../constants');

// heartBeat:ranges.generate(ranges.heartBeatMin,ranges.heartBeatMax),
// steps:ranges.generate(ranges.stepsWalkedMin,ranges.stepsWalkedMax),
// glucose:ranges.generate(ranges.glucoseLevelMin,ranges.glucoseLevelMax),
// bp:ranges.generate(ranges.bpMin,ranges.bpMax),
// oxygen:ranges.generate(ranges.oxygenSaturationMin,ranges.oxygenSaturationMax),
// sleep:ranges.generate(ranges.sleepDurationMin,ranges.sleepDurationMax),

//"date": "2022-12-21",

const activity = 
[
  {
      "metadata": {
        "date": new Date().toISOString(),
        "source": "garmin"
      },
      "summary": {
        "biometrics": {
          "heart_rate": {
            "avg_bpm": ranges.heartBeatAvg,
            "max_bpm": ranges.heartBeatMax,
            "min_bpm": ranges.heartBeatMin,
            "resting_bpm": ranges.heartBeatMin,
            "samples_bpm": [
              {
                "time": new Date().toISOString(),
                "value": ranges.generate(ranges.heartBeatMin,ranges.heartBeatMax),
              }
            ]
          },
          "hrv": {
            "rmssd": {
              "avg_millis": 540,
              "samples_millis": [
                {
                  "time": "2022-12-13T06:15:40Z",
                  "value": 140
                }
              ]
            },
            "sdnn": {
              "avg_millis": 340,
              "samples_millis": [
                {
                  "time": "2022-12-13T06:15:40Z",
                  "value": 140
                }
              ]
            }
          },
          "respiration": {
            "avg_breaths_per_minute": 44,
            "spo2": {
              "avg_pct": 97,
              "max_pct": 99,
              "min_pct": 95
            },
            "vo2_max": 390
          }
        },
        "durations": {
          "active_seconds": 3000,
          "intensity": {
            "rest_seconds": 43,
            "very_low_seconds": 584,
            "low_seconds": 372,
            "med_seconds": 230,
            "high_seconds": 758
          },
          "strain": {
            "rest_seconds": 43,
            "very_low_seconds": 584,
            "low_seconds": 372,
            "med_seconds": 230,
            "high_seconds": 758
          }
        },
        "energy_expenditure": {
          "active_kcal": 1230,
          "avg_watts": 110,
          "basal_metabolic_rate_kcal": 1000,
          "total_watts": 180
        },
        "movement": {
          "avg_cadence": 16,
          "distance_meters": 500,
          "elevation": {
            "gain_meters": 560,
            "max_meters": 700,
            "min_meters": 50
          },
          "floors_count": 66,
          "speed": {
            "avg_km_h": 12,
            "max_km_h": 15
          },
          "steps_count": 15702
        }
      },
      "activity_logs": [
        {
          "metadata": {
            "date": "2022-12-21",
            "source": "garmin"
          },
          "name": "Morning Run",
          "type": "Run",
          "start_time": "2022-12-13T04:15:40Z",
          "end_time": "2022-12-13T05:25:40Z",
          "location": {
            "start_lat_lon_deg": {
              "lat": 40,
              "lon": 43
            },
            "end_lat_lon_deg": {
              "lat": 40.34,
              "lon": 43.34
            },
            "city": "San Francisco",
            "country": "US",
            "region": "CA",
            "polystring": "ki{eFvqfiVsBmA`Feh@qg@iX`B}JeCcCqGjIq~@kf@cM{KeHeX`@_GdGkSeBiXtB}YuEkPwFyDeAzAe@pC~DfGc@bIOsGmCcEiD~@oBuEkFhBcBmDiEfAVuDiAuD}NnDaNiIlCyDD_CtJKv@wGhD]YyEzBo@g@uKxGmHpCGtEtI~AuLrHkAcAaIvEgH_EaDR_FpBuBg@sNxHqEtHgLoTpIiCzKNr[sB|Es\\`JyObYeMbGsMnPsAfDxAnD}DBu@bCx@{BbEEyAoD`AmChNoQzMoGhOwX|[yIzBeFKg[zAkIdU_LiHxK}HzEh@vM_BtBg@xGzDbCcF~GhArHaIfByAhLsDiJuC?_HbHd@nL_Cz@ZnEkDDy@hHwJLiCbIrNrIvN_EfAjDWlEnEiAfBxDlFkBfBtEfDaAzBvDKdFx@|@XgJmDsHhAgD`GfElEzOwBnYdBxXgGlSc@bGdHpW|HdJztBnhAgFxc@HnCvBdAs"
          },
          "biometrics": {
            "heart_rate": {
              "avg_bpm": 70,
              "max_bpm": 220,
              "min_bpm": 45,
              "resting_bpm": 45,
              "samples_bpm": [
                {
                  "time": "2022-12-13T06:15:40Z",
                  "value": 140
                }
              ]
            },
            "hrv": {
              "rmssd": {
                "avg_millis": 540,
                "samples_millis": [
                  {
                    "time": "2022-12-13T06:15:40Z",
                    "value": 140
                  }
                ]
              },
              "sdnn": {
                "avg_millis": 340,
                "samples_millis": [
                  {
                    "time": "2022-12-13T06:15:40Z",
                    "value": 140
                  }
                ]
              }
            },
            "respiration": {
              "avg_breaths_per_minute": 44,
              "spo2": {
                "avg_pct": 97,
                "max_pct": 99,
                "min_pct": 95
              },
              "vo2_max": 390
            }
          },
          "durations": {
            "active_seconds": 3000,
            "intensity": {
              "rest_seconds": 43,
              "very_low_seconds": 584,
              "low_seconds": 372,
              "med_seconds": 230,
              "high_seconds": 758
            },
            "strain": {
              "rest_seconds": 43,
              "very_low_seconds": 584,
              "low_seconds": 372,
              "med_seconds": 230,
              "high_seconds": 758
            }
          },
          "energy_expenditure": {
            "active_kcal": 1230,
            "avg_watts": 110,
            "basal_metabolic_rate_kcal": 1000,
            "total_watts": 180
          },
          "movement": {
            "avg_cadence": 16,
            "distance_meters": 500,
            "elevation": {
              "gain_meters": 560,
              "max_meters": 700,
              "min_meters": 50
            },
            "floors_count": 66,
            "speed": {
              "avg_km_h": 12,
              "max_km_h": 15
            },
            "steps_count": 15702
          }
        }
      ]
  }
];  


module.exports = {activity}