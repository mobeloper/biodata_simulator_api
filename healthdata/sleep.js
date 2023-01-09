const sleep = [
    {
      "metadata": {
        "date": "2022-12-21",
        "source": "fitbit"
      },
      "start_time": "2022-12-12T22:15:40Z",
      "end_time": "2022-12-13T04:15:40Z",
      "durations": {
        "awake_seconds": 400,
        "deep_seconds": 543,
        "in_bed_seconds": 245,
        "light_seconds": 654,
        "no_data_seconds": 345,
        "rem_seconds": 320,
        "time_to_fall_asleep_seconds": 754,
        "total_seconds": 234
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
      }
    }
  ]

  module.exports = {sleep}