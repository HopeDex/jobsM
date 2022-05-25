import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import "./sidebar.css";
const SideBar = () => {
  return (
    <>
      <div className="sidecontainer">
        <div className="jobalert">
          <h3>create Job Alert</h3>
          <p>Create a job alert and never miss a job</p>
          <InputGroup>
            <input placeholder="Enter Job Keyword" />
          </InputGroup>
          <Button>Create Job Alerts</Button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
