const express = require("express");
const router = express.Router();
const fs = require("fs");
const defaultFileName = "launchlist.json";
const checklistPath = `${process.cwd()}/${defaultFileName}`;

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(`${process.cwd()}/${defaultFileName}`);
const db = low(adapter);

router.get("/", function(req, res, next) {
  db.read();
  let checklist = db.get("checklistItems").value();
  res.setHeader("Content-Type", "application/json");
  res.send(db.get("checklistItems").value());
});

module.exports = router;
