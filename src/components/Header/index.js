import React from "react";
import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderWrapper = styled.div`
  grid-area: header;
  background: ${DefaultTheme.colors.lightPrimary};
  display: flex;
  padding: 1.2em;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  flex: 1;
  font-family: ${DefaultTheme.font.primary};
  font-weight: 500;
  color: ${DefaultTheme.colors.text};
`;

const UserImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  flex: 1;
  img,
  svg {
    cursor: pointer;
  }
  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    padding: 10px;
  }
`;

const Header = ({ title, userImage }) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <UserImageWrapper>
        <img src={userImage} alt="avatar do usuario" />
        <FontAwesomeIcon
          color={DefaultTheme.colors.lightWhite}
          icon={faAngleDown}
        />
      </UserImageWrapper>
    </HeaderWrapper>
  );
};

export default Header;
