const fs = require("fs");
const axios = require("axios");
const https = require("https");

function saveFile(req, res) {
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

const downloadFile = (req, res) => {
  // let url = "https://restcountries.com/v3.1/all";
  // https.get(url, (res) => {
  //   const fileStream = fs.createWriteStream("download.json");
  //   res.pipe(fileStream);
  //   fileStream.on("finish", () => {
  //     fileStream.close();
  //     console.log("done");
  //   });
  // });

  let check = req.header.X_ADMIN;
  if (check !== 1) {
    return res.status(403).json({
      success: false,
      message: "You are prohibited from downloading this file",
    });
  } else if (check === 1) {
    res.download("countries.json", (err, res) => {
      if (err) {
        return res.status(500).send({
          message: `File could not be downloaded because ${err}`,
        });
      }
    });
  }

};

module.exports = { saveFile, downloadFile };
