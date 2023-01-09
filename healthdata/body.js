
const ranges = require('../constants');

const bodyParameters = [
  {
    "metadata": {
      "date": new Date().toISOString(),
      "source": "withings"
    },
    "body_fat_pct": 9,
    "bone_mass_kg": 33,
    "height_cm": 189,
    "lean_mass_kg": 43,
    "muscle_mass_kg": 22,
    "weight_kg": 78
  }
]

module.exports = {bodyParameters}