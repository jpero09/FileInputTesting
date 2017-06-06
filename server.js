// Requires:
const fs = require("fs");
const path = require("path");


const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static('public'));
app.listen(3000, function () {

  console.log('-- File Input Testing --');
  readFile(path.join(__dirname+'/Samples/512b-dsa-example-cert.pem'));
  readFile(path.join(__dirname+'/Samples/mdm.cer'));
});

function readFile(path){
    fs.readFile(path, function(err, data){
      if (err) throw err;
      console.log("\n ** ", path);
      console.log("RAW:", data.toString());
      console.log("BASE64:", data.toString("base64"));
      console.log("**\n");
    });
}