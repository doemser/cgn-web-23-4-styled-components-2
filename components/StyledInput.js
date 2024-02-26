import styled from "styled-components";

const bananaStyle = ({ $banane, $cherry }) => {
  return $banane ? $banane : $cherry ? $cherry : "green";
};

const StyledInput = styled.input`
  border: 5px solid ${bananaStyle};
  color: ${({ $cherry }) => $cherry};
`;

export default StyledInput;
