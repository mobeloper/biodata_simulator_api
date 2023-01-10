let biometrics = [
    {
        "metadata": {
        "date": "2022-12-21",
        "source": "oura"
        },
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
        },
        "blood_glucose": {
        "avg_mg_dL": 132,
        "samples_mg_dL": [
            {
            "time": "2022-12-13T06:15:40Z",
            "value": 123
            }
        ]
        },
        "blood_pressure": {
        "diastolic_mm_Hg": {
            "samples": [
            {
                "time": "2022-12-13T06:15:40Z",
                "value": 123
            }
            ]
        },
        "systolic_mm_Hg": {
            "samples": [
            {
                "time": "2022-12-13T06:15:40Z",
                "value": 123
            }
            ]
        }
        },
        "temperature": {
        "core": {
            "samples_celcius": [
            {
                "time": "2022-12-13T06:15:40Z",
                "value": 36
            }
            ]
        },
        "delta_celcius": 23,
        "skin": {
            "samples_celcius": [
            {
                "time": "2022-12-13T06:15:40Z",
                "value": 36
            }
            ]
        }
        }
    }
]

//module.exports = {biometrics}
export default biometrics = {biometrics}