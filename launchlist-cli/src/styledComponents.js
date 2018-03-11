import styled from "styled-components";

const visuallHidden = `
    position: absolute; 
  overflow: hidden; 
  clip: rect(0 0 0 0); 
  height: 1px; width: 1px; 
  margin: -1px; padding: 0; border: 0; 
`;

export const Main = styled.main`
  font-family: "Roboto Condensed", sans-serif;
  max-width: 600px;
  margin: 0 auto;
`;

export const ChecklistWrapper = styled.ul`
  list-style: none;
`;

export const ChecklistItem = styled.label`
  display: flex;
`;

export const StyledInput = styled.input`
  width: 0;
  height: 0;
  margin-right: 20px;

  :before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #222;
    border-radius: 4px;
  }

  :checked:before {
    background: green;
  }
`;
