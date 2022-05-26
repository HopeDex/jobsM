import React from "react";
import Content from "../components/Content";
import Nav from "../components/Nav";
import SearchBar from "../components/searchBar";
import SideBar from "../components/SideBar";
const Main = () => {
  return (
    <div>
      <Nav />
      <SearchBar />
      <SideBar />
      <Content />
    </div>
  );
};

export default Main;
