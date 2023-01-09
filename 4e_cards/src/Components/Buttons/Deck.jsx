import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  font-weight: bold;
  border-radius: 1em;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
  background-color: black;
`;

const CenterdDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

/**
 * Renders the new deck button.
 */

const CreateDeckButton = () => {
  return (
    <CenterdDiv>
      <StyledButton style={{color: "green"}}>
        Add New Deck
      </StyledButton>
    </CenterdDiv>
  )
}

/**
 * Renders the edit deck button.
 */

 const EditDeckButton = () => {
  return (
    <CenterdDiv>
      <StyledButton style={{color: "teal"}}>
        Edit Deck
      </StyledButton>
    </CenterdDiv>
  )
}

/**
 * Renders the delete deck button.
 */

 const DeleteDeckButton = () => {
  return (
    <CenterdDiv>
      <StyledButton style={{color: "red"}}>
        Delete Deck
      </StyledButton>
    </CenterdDiv>
  )
}

export {
  CreateDeckButton,
  DeleteDeckButton,
  EditDeckButton,
}
