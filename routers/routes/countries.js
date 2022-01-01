const express = require("express");

const { insertData } = require("../controllers/insertData");
const {getAllCountries , getCountryCurrencyByCCA2 , getAllCountriesByRegion} = require("../controllers/countries")

const countryRouter = express.Router();

//POST http://localhost:5000/country
countryRouter.post("/",  insertData);

//GET http://localhost:5000/country?query="search word"
countryRouter.get("/",  getAllCountries);

//GET http://localhost:5000/country/currency/:cca2
countryRouter.get("/currency/:cca2",  getCountryCurrencyByCCA2);

countryRouter.get("/region", getAllCountriesByRegion);


module.exports = countryRouter;
