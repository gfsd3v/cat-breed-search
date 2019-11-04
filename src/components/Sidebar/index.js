import React from "react";
import styled from "styled-components";
import DefaultTheme from "themes/defaultTheme";

const Wrapper = styled.div`
  grid-area: sidebar;
  background: ${DefaultTheme.colors.primary};
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media all and (max-width: 800px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const MenuList = styled.div`
  padding: 0 20px;
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
    li {
      cursor: pointer;
      svg {
        margin-right: 10px;
      }
      margin: 20px 0;
    }
  }

  @media all and (max-width: 800px) {
    flex: 1;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 0 1 auto;
      margin: 0;
      padding: 0;
      li {
        display: block;
        list-style-type: none;
        margin: 10px;
        cursor: pointer;
        svg {
          margin-right: 10px;
        }
        margin: 20px 0;
      }
    }
  }
`;

const Sidebar = ({ Logo, children }) => {
  return (
    <Wrapper>
      <MenuList>
        <ul>{children}</ul>
      </MenuList>
    </Wrapper>
  );
};

export default Sidebar;
