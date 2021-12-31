const express = require("express");

const { insertData } = require("../controllers/insertData");
const {getAllCountries} = require("../controllers/countries")

const countryRouter = express.Router();

//POST http://localhost:5000/country
countryRouter.post("/",  insertData);

//GET http://localhost:5000/country?query="search word"
countryRouter.get("/",  getAllCountries);


module.exports = countryRouter;
