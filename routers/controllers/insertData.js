const countryModel = require("../../db/models/countries");
const axios = require("axios");
function insertData(req, res) {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((result) => {
      result.data.forEach((country) => {
        const oneContry = new countryModel({
          name: country.name,
          languages: country.languages,
          cca2: country.cca2,
          cca3: country.cca3,
          ccn3: country.ccn3,
          currencies: country.currencies,
          region: country.region,
          latlng: country.latlng,
        });
        oneContry
          .save()
          .catch((err) => {
            return res.status(409).json({
              success: false,
              message: `country already exist `,
              err: err,
            });
          });
      });
      return res.status(200).json({
        success: true,
        message: `Success country Added`,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
}

module.exports = { insertData };
