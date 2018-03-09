const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const public = path.join(__dirname, "..", "views");
const defaultFileName = "launchlist.json";
const loadAllConfigs = require("../../scripts/loadAllConfigs");

/* GET home page. */
router.get("/", function(req, res, next) {
  const list = JSON.stringify({ test: "test" });
  const allConfigs = JSON.stringify(loadAllConfigs());

  fs.writeFile(`${process.cwd()}/${defaultFileName}`, allConfigs, err => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log(`Checklist saved as ${defaultFileName}!`);
  });
  res.sendFile(path.join(public + "/index.html"));
});

module.exports = router;
