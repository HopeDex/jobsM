import React from "react";
import { Button, Badge } from "react-bootstrap";
import { BiChevronUp } from "react-icons/bi";
import "./sidebar.css";
const SideBar = () => {
  return (
    <>
      <div className="sidecontainer">
        <div className="jobalert">
          <h3>create Job Alert</h3>
          <p>Create a job alert and never miss a job</p>

          <input placeholder="Enter Job Keyword" />

          <Button>Create Job Alerts</Button>
        </div>
        <div className="aside">
          <h6>
            Type of employement <BiChevronUp style={{ float: "right" }} />
          </h6>
          <ul>
            <li>
              <input type="radio" />
              Full time{" "}
              <Badge bg-grey style={{ float: "right" }}>
                3
              </Badge>
            </li>
            <li>
              <input type="radio" />
              Part time <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input type="radio" />
              Remote <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input type="radio" />
              Internship <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input type="radio" />
              Contract <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input type="radio" />
              Training <Badge style={{ float: "right" }}>3</Badge>
            </li>
          </ul>
        </div>
        <div className="aside">
          <h6>
            Seniority Level <BiChevronUp style={{ float: "right" }} />
          </h6>
          <ul>
            <li>
              <input type="radio" />
              Senior level <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input type="radio" />
              Entry level <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input type="radio" />
              Mid level <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input type="radio" />
              Directors <Badge style={{ float: "right" }}>3</Badge>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
