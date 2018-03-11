import * as React from "react";
import styled from "styled-components";
import { ChecklistItem, StyledInput } from "./styledComponents";

export const ListItem = ({ children, checked, completeItem, id }) => {
  return (
    <ChecklistItem for={id}>
      <StyledInput
        id={id}
        name={id}
        type="checkbox"
        checked={checked}
        onChange={() => completeItem(id)}
      />
      <div>{children}</div>
    </ChecklistItem>
  );
};
