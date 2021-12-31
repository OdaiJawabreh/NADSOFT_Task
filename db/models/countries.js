const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: { type: Object },
  languages: { type: Object },
  cca2: { type: String },
  cca3: { type: String },
  ccn3: { type: String },
  currencies: { type: Object },
  region: { type: String },
  latlng: [Number],
});
module.exports = mongoose.model("Country", countrySchema);
