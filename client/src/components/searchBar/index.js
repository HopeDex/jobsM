import React from "react";
import { FaBars } from "react-icons/fa";
import { InputGroup, Button } from "react-bootstrap";
import "./search.css";
const SearchBar = () => {
  return (
    <div className="main">
      <div className="search">
        <ul className="filter">
          <InputGroup>
            <li className="lists">
              <input className="first" type="text" placeholder="search"></input>
            </li>

            <li className="lists">
              <input type="text" placeholder="location" />
            </li>
            <li className="lists">
              <input type="text" placeholder="job type" />
            </li>
            <li className="lists">
              <input type="text" placeholder="salary range" />
            </li>
            <Button>Find Job</Button>
          </InputGroup>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
