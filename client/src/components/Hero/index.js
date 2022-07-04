import React, { useState } from "react";
import { InputGroup, Button } from "react-bootstrap";
import "./hero.css";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const getSearch = () => {
    console.log(search + " " + location);
    navigate(`search/${search} ${location}`);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const onLocation = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="hero">
      <h1>
        Get The <span>Right Job</span> <br /> You Deserve
      </h1>
      <p>1,880,765 jobs listed here! Your dream job is waiting</p>
      <div className="inputsection">
        <ul className="searchh">
          <InputGroup>
            <li className="list">
              <BiSearch />
              <input
                className="first"
                type="text"
                placeholder="search"
                onChange={onSearch}
              ></input>
            </li>
            <li className="list">
              <BiCurrentLocation />
              <input type="text" placeholder="location" onChange={onLocation} />
            </li>
            <Button
              style={{ width: "30%", borderradius: "10px" }}
              onClick={getSearch}
            >
              Find Job
            </Button>
          </InputGroup>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
