import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border: none;
  padding: 10px 20px;
  border-radius: 2px;
  box-shadow: 0 0 20px 0 ${({ $isOn }) => ($isOn ? "red" : "transparent")};

  &:hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  ${({ $variant }) => {
    if ($variant === "contained") {
      return css`
        background: black;
        color: white;

        &:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      `;
    } else if ($variant === "outlined") {
      return css`
        border: 1px solid black;
      `;
    }
  }}
`;

export default StyledButton;
