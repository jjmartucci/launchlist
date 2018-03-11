import * as React from "react";
import { markdown } from "markdown";

import mapCategories from "../scripts/mapCategories";
import { ListItem } from "./ListItem";

import { ChecklistWrapper } from "./styledComponents";

export const Checklist = props => {
  let categories = [];
  if (props.list.length) {
    categories = props.list.reduce((array, listItem) => {
      if (array.indexOf(listItem.category) === -1) {
        array.push(listItem.category);
      }
      return array;
    }, []);
  }
  categories.sort();
  const mappedCategories = mapCategories(categories, props.list);

  // There's probably more to check for here.
  const validId = name => {
    return name.toLowerCase().replace(" ", "-");
  };

  const buildSections = mappedCategories => {
    const sections = [];
    mappedCategories.forEach((value, key) => {
      sections.push(
        <section>
          <h2 id={validId(key)}>{key}</h2>
          <ChecklistWrapper>
            {value.map((item, index) => {
              let desc = "";
              let title = "";
              try {
                title = markdown.toHTML(item.title);
                desc = markdown.toHTML(item.description);
              } catch (e) {
                console.log(e);
              }
              return (
                <li>
                  <ListItem
                    id={item.name}
                    checked={item.completed ? item.completed : false}
                    completeItem={props.completeItem}
                  >
                    <h3 dangerouslySetInnerHTML={{ __html: title }} />
                    <div dangerouslySetInnerHTML={{ __html: desc }} />
                  </ListItem>
                </li>
              );
            })}
          </ChecklistWrapper>
        </section>
      );
    });
    return sections;
  };

  return (
    <main>
      <h2>Table of Contents</h2>
      <ul>
        {categories.map(category => (
          <li>
            <a href={`#${validId(category)}`}>{category}</a>
          </li>
        ))}
      </ul>
      {buildSections(mappedCategories)}
    </main>
  );
};
