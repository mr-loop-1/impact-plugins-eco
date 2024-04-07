require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || 5000, () => {
    console.log("listning...");
});
