import React from "react";
import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.li`
  color: ${props =>
    props.active ? DefaultTheme.colors.text : DefaultTheme.colors.lightWhite};
  font-family: ${DefaultTheme.font.primary};
  margin: 20px 0;
`;

const MenuButton = ({ icon, text, active }) => {
  return (
    <Wrapper active={active}>
      <FontAwesomeIcon size="lg" icon={icon} />
      {text}
    </Wrapper>
  );
};

export default MenuButton;
