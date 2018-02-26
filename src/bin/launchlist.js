#! /usr/bin/env node
var shell = require("shelljs");

shell.exec(`node ${__dirname}/../express/server.js`);
