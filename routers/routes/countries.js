const express = require("express");

const { insertData } = require("../controllers/insertData");
const {getAllCountries , getCountryCurrencyByCCA2} = require("../controllers/countries")

const countryRouter = express.Router();

//POST http://localhost:5000/country
countryRouter.post("/",  insertData);

//GET http://localhost:5000/country?query="search word"
countryRouter.get("/",  getAllCountries);

//GET http://localhost:5000/:cca2
countryRouter.get("/:cca2",  getCountryCurrencyByCCA2);


module.exports = countryRouter;
