import React from "react";
import {
  FaBars,
  FaBriefcase,
  FaDollarSign,
  FaSearch,
  FaSearchLocation,
} from "react-icons/fa";
import { InputGroup, Button } from "react-bootstrap";
import "./search.css";
const SearchBar = () => {
  return (
    <div className="main">
      <div className="search">
        <ul className="filter">
          <li className="lists">
            <FaSearch />
            <input className="first" type="text" placeholder="search"></input>
          </li>

          <li className="lists">
            <FaSearchLocation />
            <input type="text" placeholder="location" />
          </li>
          <li className="lists">
            <FaBriefcase />
            <input type="text" placeholder="job type" />
          </li>
          <li className="lists">
            <FaDollarSign />
            <input type="text" placeholder="salary range" />
          </li>
          <button>Find Job</button>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
