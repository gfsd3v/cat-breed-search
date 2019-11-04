import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

const Card = styled.div`
  padding: 3vw;
  margin-bottom: 3vh;
  box-shadow: 0 0 15px -3px ${DefaultTheme.colors.shadow};
  color: ${DefaultTheme.colors.text};
  border-left: 5px solid ${DefaultTheme.colors.lightPrimary};
  background-color: ${DefaultTheme.colors.text};
`;

export default Card;
