const express = require("express");
const app = express();
require("dotenv").config();

app.set("json spaces", 5); // to pretify json response

const PORT = process.env.PORT;
const fileParser = require("./file_parser");
const fileParserArg = require("./file_parser_arg");
const putObject = require("./put_object_lambda");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/upload", async (req, res) => {
  await fileParser(req)
    .then((data) => {
      //res.status(200).json({
      //message: "Success",
      //data
      //})
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occurred." + error,
        error,
      });
    });
});

app.post("/api/upload/arg", async (req, res) => {
  await fileParserArg(req)
    .then((data) => {
      //res.status(200).json({
      //message: "Success",
      //data
      //})
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occurred." + error,
        error,
      });
    });
});

app.post("/api/generate/reconciliation", async (req, res) => {
  await putObject(req)
    .then((data) => {
      res.status(200).json({
        message: "Success",
        data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: "An error occurred." + error,
        error,
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
