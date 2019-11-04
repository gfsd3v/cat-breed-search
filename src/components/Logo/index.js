import React from "react";
import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

const LogoWrapper = styled.div`
  height: 8vh;
  border-bottom: 2px dotted ${DefaultTheme.colors.lightPrimary};
  border-spacing: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media all and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    height: 4vh;
    border-bottom: none;
    margin: 0;
    height: 30%;
  }
`;

const ImgWrapper = styled.img`
  color: white;
  position: relative;
  margin-left: -15px;
  width: 200px;
  height: auto;

  @media all and (max-width: 800px) {
    width: 115px;
  }
`;

const Logo = ({ img, alt, ...props }) => {
  return (
    <LogoWrapper>
      <ImgWrapper src={img} alt={alt} />
    </LogoWrapper>
  );
};

export default Logo;
