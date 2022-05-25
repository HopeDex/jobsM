import React from "react";
import Content from "./components/Content";
import Nav from "./components/Nav";
import SearchBar from "./components/searchBar";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <Nav />
      <SearchBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
