#! /usr/bin/env node
const fs = require("fs");

let config;
if (fs.existsSync(`${process.cwd()}/launchlist.json`)) {
  config = require(`${process.cwd()}/launchlist.json`);
} else {
  config = {
    extends: ["launchlist-default"],
    remove: []
  };
}
const extendedConfigs = [];
const categories = ["Uncategorized"];
let allItems = [];
const keys = [];
const dupes = [];
const filename = process.argv.indexOf("--filename");
const includeName = process.argv.indexOf("--includeName") > -1;
const force = process.argv.indexOf("--force") > -1;
const markdownMap = new Map();

const validName = name => {
  return name.toLowerCase().replace(" ", "-");
};

const args = {
  filename: filename > -1 ? process.argv[filename + 1] : "launchlist.checklist",
  includeName: includeName,
  force: force
};

// start the markdown string
let list = "# Site Launch Checklist\n\n";

// make an array of all extended configs
// configs beyond the base on should not extend other configs
if (config.extends && config.extends.length) {
  config.extends.forEach(extended => {
    extendedConfigs.push(require(`${extended}`));
  });
}

// create a map of all the items from all configs.
extendedConfigs.forEach(config => {
  allItems = allItems.concat(config.listItems);
});

// Add in any listItems from a user config.
if (config.listItems && config.listItems.length) {
  allItems = allItems.concat(config.listItems);
}

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
allItems.forEach(item => {
  if (item.category && categories.indexOf(item.category) === -1) {
    categories.push(item.category);
  }
});

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
  if (itemsForCategory.length !== 0) {
    markdownMap.set(category, itemsForCategory);
  }
});

// Build the string
// First, the TOC for categories
markdownMap.forEach((value, key) => {
  if (value.length) {
    list += `- [${key}](#${validName(key)}) \n`;
  }
});

list += `\n`;

markdownMap.forEach((value, key) => {
  if (value.length) {
    list += `## ${key}<a name="${validName(key)}"></a>\n`;

    value.forEach(item => {
      list += `- [ ] ${item.title}: ${item.description}`;
      if (args.includeName) {
        list += ` (${item.name})`;
      }
      list += `\n`;
    });
  }
});

if (!args.force) {
  if (fs.existsSync(`${process.cwd()}/${args.filename}.md`)) {
    throw Error("File already exists! Delete or use --force option.");
  }
}

fs.writeFile(`${process.cwd()}/${args.filename}.md`, list, err => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log(`Checklist saved as ${args.filename}!`);
});
