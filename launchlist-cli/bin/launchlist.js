#! /usr/bin/env node

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const opn = require("opn");
const fs = require("fs");

// Express paths
const routes = path.join(__dirname, "..", "express", "routes");
const public = path.join(__dirname, "..", "express", "views");
const index = require(path.join(routes, "index"));
const list = require(path.join(routes, "list"));
// Constants
const defaultFileName = "launchlist.json";

/* MIGHT NOT NEED */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 1234;

var router = express.Router(); // get an instance of the express Router

app.use("/", index);
app.use("/list", list);
app.use(express.static(path.join(__dirname, "..", "express", "static")));

// START THE SERVER
app.listen(port);
console.log("Launchlist running at localhost:" + port);
opn(`http://localhost:${port}`);
