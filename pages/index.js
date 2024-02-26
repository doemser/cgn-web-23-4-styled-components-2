import styled, { css } from "styled-components";
import { useState } from "react";
import StyledButton from "@/components/StyledButton";

const StyledFlex = styled.section`
  display: flex;
  flex-direction: ${({ $direction = "row" }) => $direction};
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  const [isOn, setIsOn] = useState(false);
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <h1>Styled Components 2</h1>
      <StyledFlex $direction="column">
        <StyledButton $isOn={isOn} onClick={() => setIsOn(!isOn)}>
          Text Button
        </StyledButton>
        <StyledButton $variant="contained" onClick={() => setIsShown(!isShown)}>
          {isShown ? "shown" : "hidden"}
        </StyledButton>
        <StyledButton $variant="outlined">Outlined Button</StyledButton>
      </StyledFlex>
    </>
  );
}
