const express = require("express");
require("./db/db");
require("dotenv").config();
const app = express();
app.use(express.json());

// import Routers
const countryRouter = require("./routers/routes/insertData");
// Routers
app.use("/country", countryRouter);


const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
