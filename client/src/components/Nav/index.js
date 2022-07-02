import React from "react";
import "./nav.css";
import { BiUser, BiBuilding } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navcontainer">
        <ul className="navmenu">
          <li className="navlink">
            <Link to="/home">
              <BiBuilding />
              TrollZor
            </Link>
          </li>
        </ul>
        <ul className="navmenu">
          <li className="navlink">Home</li>
          <li className="navlink">Find Job</li>
          <li className="navlink">Job Alerts</li>
          <li className="navlink">Find Candidates</li>
          <li className="navlink">Career Advice</li>
        </ul>{" "}
        <ul className="navmenu">
          <li className="navlink">
            <Link to="/user">
              <BiUser />
              user
            </Link>
          </li>
          <li className="navlink">
            <button>Register</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
