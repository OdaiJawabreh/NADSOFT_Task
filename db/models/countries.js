const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: { type: Object },
  Languages: { type: Object },
  CCA2: { type: String },
  CCA3: { type: String },
  CCN3: { type: String },
  Currencies: { tupe: String },
  Region: { type: String },
  latlng: [Number],
});
module.exports = mongoose.model("Country", countrySchema);
