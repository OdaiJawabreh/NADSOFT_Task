const express = require("express");

const insertData = require("../controllers/insertData");
const saveFile = require ("../controllers/saveInJson")

const {
  getAllCountries,
  getCountryCurrencyByCCA2,
  getAllCountriesByRegion,
  getAllCountriesByLanguage,
} = require("../controllers/countries");

const countryRouter = express.Router();

//POST http://localhost:5000/country
countryRouter.post("/", insertData);

//GET http://localhost:5000/country?query="search word"
countryRouter.get("/", getAllCountries);

//GET http://localhost:5000/country/currency/:cca2
countryRouter.get("/currency/:cca2", getCountryCurrencyByCCA2);

//GET http://localhost:5000/country/region
countryRouter.get("/region", getAllCountriesByRegion);

//GET http://localhost:5000/country/language
countryRouter.get("/language", getAllCountriesByLanguage);

//GET http://localhost:5000/country/file
countryRouter.post("/file", saveFile);

module.exports = countryRouter;
