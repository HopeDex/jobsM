import React from "react";
import "./nav.css";
import { BiUser, BiBuilding } from "react-icons/bi";
const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navcontainer">
          <ul className="navmenu">
            <li className="navlink">
              <BiBuilding />
              TrollZor
            </li>
          </ul>
          <ul className="navmenu">
            <li className="navlink">Find Job</li>
            <li className="navlink">Company Review</li>
            <li className="navlink">Find Salaries</li>
          </ul>{" "}
          <ul className="navmenu">
            <li className="navlink">
              <BiUser />
              User
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
