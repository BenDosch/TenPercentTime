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
 * Renders the new card button.
 */

const CreateCardButton = () => {
  return (
    <CenterdDiv>
      <StyledButton style={{color: "green"}}>
        Add New Card
      </StyledButton>
    </CenterdDiv>
  )
}

/**
 * Renders the edit card button.
 */

 const EditCardButton = () => {
  return (
    <CenterdDiv>
      <StyledButton style={{color: "teal"}}>
        Edit Card
      </StyledButton>
    </CenterdDiv>
  )
}

/**
 * Renders the delete card button.
 */

 const DeleteCardButton = () => {
  return (
    <CenterdDiv>
      <StyledButton style={{color: "red"}}>
        Delete Card
      </StyledButton>
    </CenterdDiv>
  )
}

export {
  CreateCardButton,
  DeleteCardButton,
  EditCardButton,
}
