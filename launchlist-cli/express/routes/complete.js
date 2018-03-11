const express = require("express");
const router = express.Router();
const fs = require("fs");
const defaultFileName = "launchlist.json";
const checklistPath = `${process.cwd()}/${defaultFileName}`;

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync(`${process.cwd()}/${defaultFileName}`);
const db = low(adapter);

router.post("/", function(req, res, next) {
  const item = db
    .get("checklistItems")
    .find({ name: req.body.name })
    .value();

  db
    .get("checklistItems")
    .find({ name: req.body.name })
    .assign({ completed: !item.completed })
    .write();

  const checklist = db.get("checklistItems").value();
  res.setHeader("Content-Type", "application/json");
  res.send(checklist);
});

module.exports = router;
