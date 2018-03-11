const mapCategories = (categories, items) => {
  const mappedItems = new Map();
  categories.forEach(category => {
    mappedItems.set(category, []);
  });
  // Add in a catch all for uncategorized / missing category.
  mappedItems.set("Uncategorized", []);
  items.forEach(item => {
    if (!item.category) {
      mappedItems.set("Uncategorized", [
        item,
        ...mappedItems.get("Uncategorized")
      ]);
    } else {
      mappedItems.set(item.category, [item, ...mappedItems.get(item.category)]);
    }
  });

  mappedItems.forEach((value, key) => {
    if (value.length === 0) {
      mappedItems.delete(key);
    }
  });

  return mappedItems;
};

module.exports = mapCategories;
