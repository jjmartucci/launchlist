#! /usr/bin/env node
var shell = require("shelljs");
const config = require(`${process.cwd()}/launchlist.json`);
const fs = require("fs");
const extendedConfigs = [];
const categories = ["Uncategorized"];
let allItems = [];
const keys = [];
const dupes = [];

// start the markdown string
let list = "# Site Launch Checklist\n\n";

// make an array of all extended configs
// configs beyond the base on should not extend other configs
if (config.extends.length) {
  config.extends.forEach(extended => {
    extendedConfigs.push(require(`${extended}`));
  });
}

// create a map of all the items from all configs.
extendedConfigs.forEach(config => {
  allItems = allItems.concat(config.listItems);
});

allItems = allItems.concat(config.listItems);

allItems.forEach((item, index) => {
  const keyIndex = keys.indexOf(item.name);
  if (keyIndex === -1) {
    keys.push(item.name);
  } else {
    const existingItem = allItems[keyIndex];
    const newListItem = Object.assign({}, existingItem, item);
    dupes.push(index);
    allItems[keyIndex] = newListItem;
  }
});

// Remove duplicate rules
dupes.forEach(dupe => {
  allItems.splice(dupe, 1);
});

// Build the categories
config.listItems.forEach(item => {
  if (item.category && categories.indexOf(item.category) === -1) {
    categories.push(item.category);
  }
});

categories.sort().forEach(category => {
  list += `- [${category}](#${category}) \n`;
});

list += "\n";

categories.forEach(category => {
  const itemsForCategory = allItems.filter(listItem => {
    if (config.remove.indexOf(listItem.name) !== -1) {
      return false;
    }
    if (category !== "Uncategorized") {
      return listItem.category === category;
    } else {
      return listItem.category === "" || listItem.category === undefined;
    }
    return false;
  });
  list += `## ${category}<a name="${category}"></a>\n`;
  itemsForCategory.forEach(item => {
    list += `- [ ] ${item.title}: ${item.description}\n`;
  });
  list += "\n";
});

fs.writeFile(`${process.cwd()}/launchlist.checklist.md`, list, err => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log("Checklist saved!");
});
