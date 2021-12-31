const express = require("express");

const { insertData } = require("../controllers/insertData");

const countryRouter = express.Router();

countryRouter.post("/",  insertData);


module.exports = countryRouter;
