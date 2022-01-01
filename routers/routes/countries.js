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

//if you to show any group by language just writ first 3 letters in name of language insted of shortcut
// for example if you want countries that speak english write following api 
//GET http://localhost:5000/country/language/:eng
countryRouter.get("/language/:shortcut", getAllCountriesByLanguage);

//GET http://localhost:5000/country/file
countryRouter.post("/file", saveFile);

module.exports = countryRouter;
