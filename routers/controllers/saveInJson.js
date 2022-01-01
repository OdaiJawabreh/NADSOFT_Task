const fs = require("fs");
const axios = require("axios");

function saveInJson(req, res) {
  try {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((result) => {
        fs.writeFile("countries.json", JSON.stringify(result.data), (err) => {
          if (err) {
            throw err;
          }
          return res.status(200).json({
            success: true,
            message: `the file has been created with countries`,
          });
        });
      })
      .catch((err) => {
        return res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err,
        });
      });
  } catch (error) {
    throw error;
  }
}

module.exports =  saveInJson ;
