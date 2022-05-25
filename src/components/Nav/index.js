import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navcontainer">
          <ul className="navmenu">
            <li className="navlink">Find Job</li>
          </ul>
          <ul className="navmenu">
            <li className="navlink">Find Job</li>
            <li className="navlink">Company Review</li>
            <li className="navlink">Find Salaries</li>
          </ul>{" "}
          <ul className="navmenu">
            <li className="navlink">Company Review</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
