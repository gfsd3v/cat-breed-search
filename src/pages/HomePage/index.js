import * as React from "react";
import Template from "components/Template";
import Header from "components/Header";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import Logo from "components/Logo";
import MenuButton from "components/MenuButton";
import HostgatosLogo from "assets/images/marca-hostgatos.svg";
import Avatar from "assets/images/avatar.png";
import Card from "components/Card";
import Search from "components/Search";
import { faPaw, faCommentAlt } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <Template>
      <Header title="Breeds" userImage={Avatar} />
      <Content>
        <Card>
          <Search />
        </Card>
      </Content>
      <Sidebar>
        <Logo img={HostgatosLogo} />
        <MenuButton active icon={faPaw} text="Breeds" />
        <MenuButton icon={faCommentAlt} text="Feedback" />
      </Sidebar>
    </Template>
  );
};

export default HomePage;
