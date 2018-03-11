const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const public = path.join(__dirname, "..", "views");
const defaultFileName = "launchlist.json";
const loadAllConfigs = require("../../scripts/loadAllConfigs");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(`${process.cwd()}/${defaultFileName}`);
const db = low(adapter);

/* GET home page. */
router.get("/", function(req, res, next) {
  if (!db.get("checklistItems").value()) {
    db
      .defaults({
        theme: "default",
        title: "launchlist",
        checklistItems: loadAllConfigs()
      })
      .write();
  }
  res.sendFile(path.join(public + "/index.html"));
});

module.exports = router;
