//const http = require("http")
//console.log('This is the main')
const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log("Started on port", port);
});
