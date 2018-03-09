const loadAllConfigs = () => {
  const fs = require("fs");
  const configFile = "launchlist.config.json";
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

  return allItems;
};

module.exports = loadAllConfigs;
