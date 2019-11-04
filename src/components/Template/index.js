import styled from "styled-components";

const Template = styled.div`
  display: grid;
  grid-template-areas:
    "sidebar header header"
    "sidebar content content"
    "sidebar content content";
  grid-template-rows: 55px auto 70px;
  grid-template-columns: 300px 1fr 15%;
  height: 100vh;
  width: 100%;
  margin: 0;

  @media all and (max-width: 800px) {
    grid-template-areas:
      "header"
      "sidebar"
      "content"
      "content";
    grid-template-rows: 80px 80px auto 70px;
    grid-template-columns: 1fr;
  }
`;

export default Template;
