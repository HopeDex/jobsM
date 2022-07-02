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
              <input className="form-check-input" type="checkbox" />
              Full time <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              Part time <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              Remote <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              Internship{" "}
              <Badge
                style={{
                  float: "right",
                }}
              >
                3
              </Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              Contract <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
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
              <input className="form-check-input" type="checkbox" />
              Senior level <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              Entry level <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              Mid level <Badge style={{ float: "right" }}>3</Badge>
            </li>
            <li>
              <input className="form-check-input" type="checkbox" />
              Directors <Badge style={{ float: "right" }}>3</Badge>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
