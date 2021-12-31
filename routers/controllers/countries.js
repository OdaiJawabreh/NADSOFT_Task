const countryModel = require("../../db/models/countries");

function getAllCountries(req, res) {
  let query = req.query.query;

  countryModel
    .find({
      $or: [
        {
          "name.common": {
            $regex: query,
            $options: "i",
          },
        },
        {
          "name.official": {
            $regex: query,
            $options: "i",
          },
        },
        {
          cca2: {
            $regex: query,
            $options: "i",
          },
        },
        {
          ccn3: {
            $regex: query,
            $options: "i",
          },
        },
        {
          cca3: {
            $regex: query,
            $options: "i",
          },
        },
      ],
    })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All the countries `,
        countries: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
      });
    });
}

module.exports = { getAllCountries };
