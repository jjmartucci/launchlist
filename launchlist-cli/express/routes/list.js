var express = require("express");
var router = express.Router();
const fs = require("fs");
const defaultFileName = "launchlist.json";
const checklistPath = `${process.cwd()}/${defaultFileName}`;

router.get("/", function(req, res, next) {
  var obj = JSON.parse(fs.readFileSync(checklistPath, "utf8"));
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(obj));
});

module.exports = router;
