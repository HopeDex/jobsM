import React from "react";
import "./nav.css";
import { BiUser, BiBuilding } from "react-icons/bi";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navcontainer">
          <ul className="navmenu">
            <li className="navlink">
              <Link to="/home">
                <BiBuilding />
                TrollZor
              </Link>
            </li>
          </ul>
          <ul className="navmenu">
            <li className="navlink">Find Job</li>
            <li className="navlink">Company Review</li>
            <li className="navlink">Find Salaries</li>
          </ul>{" "}
          <ul className="navmenu">
            <li className="navlink">
              <Link to="/user">
                <BiUser />
                user
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
