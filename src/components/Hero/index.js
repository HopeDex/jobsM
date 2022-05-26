import React from "react";
import { InputGroup, Button } from "react-bootstrap";
import "./hero.css";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
const Hero = () => {
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
              <input className="first" type="text" placeholder="search"></input>
            </li>
            <li className="list">
              <BiCurrentLocation />
              <input type="text" placeholder="location" />
            </li>
            <Button style={{ width: "30%", borderradius: "10px" }}>
              Find Job
            </Button>
          </InputGroup>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
