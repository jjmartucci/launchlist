const loadAllConfigs = () => {
  const fs = require("fs");
  const configFile = "launchlist.config.json";
  const dupes = [];
  const keys = [];

  let config;
  if (fs.existsSync(`${process.cwd()}/${configFile}`)) {
    config = require(`${process.cwd()}/${configFile}`);
  } else {
    config = {
      extends: ["launchlist-default"],
      remove: []
    };
  }
  const extendedConfigs = [];
  let allItems = [];

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

  return allItems;
};

module.exports = loadAllConfigs;
