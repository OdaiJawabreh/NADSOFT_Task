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

function getCountryCurrencyByCCA2(req, res) {
  let cca2 = req.params.cca2.toUpperCase();
  countryModel
    .findOne({ cca2: cca2 })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The country by ${cca2} => not found odai`,
        });
      }
      res.status(202).json({
        success: true,
        message: `${result.name.common} Country`,
        currency: result.currencies,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
      });
    });
}
function getAllCountriesByRegion(req, res) {
  countryModel
    .aggregate([
      { $group: { _id: "$region", Countries: { $push: "$name.official" } } },
    ])

    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All Countries By Region`,
        countries: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
}

const getAllCountriesByLanguage = async (req, res) => {
  let language = req.params.shortcut.toLowerCase();
  countryModel
    // .distinct("languages")
    .aggregate([
      {
        $group: {
          _id: `$languages.${language}`,
          Countries: { $push: "$name.common" },
        },
      },
    ])

    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All Countries By Language`,
        countries: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};

module.exports = {
  getAllCountries,
  getCountryCurrencyByCCA2,
  getAllCountriesByRegion,
  getAllCountriesByLanguage,
};
