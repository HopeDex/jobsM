import Content from "../components/Content";
import Nav from "../components/Nav";
import SearchBar from "../components/searchBar";
import SideBar from "../components/SideBar";

const Main = () => {
  return (
    <div>
      <div className="topHolder">
        <Nav />
        <SearchBar />
      </div>

      <SideBar />
      <Content />
    </div>
  );
};

export default Main;
