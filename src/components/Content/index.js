import React from "react";
import "./content.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { Button } from "react-bootstrap";
import logo from "../../images/logooo.png";
import logo2 from "../../images/logo2.png";
const Content = () => {
  return (
    <div className="maincontent">
      <p className="headline">
        Showing 20 Jobs <p style={{ float: "right" }}>sort by: date posted</p>
      </p>

      <div className="grid-container">
        <div className="alert">
          <img src={logo2} alt="logo" />
          <BiDotsHorizontalRounded style={{ float: "right" }} />
          <h5>UX/UI Designer</h5>
          <p>
            The user experience position exists to create compelling and elegant
            digital user experiences through ...
          </p>
          <label>Full Time</label>
          <label>Full Time</label>
          <label>Full Time</label>
          <div className="button-wrap">
            <Button style={{ width: "50%" }}>Apply Now</Button>
            <Button
              style={{ background: "grey", border: "none", width: "40%" }}
            >
              Messages
            </Button>
          </div>
        </div>
        <div className="alert">
          <img src={logo} alt="logo" />
          <BiDotsHorizontalRounded style={{ float: "right" }} />
          <h5>UX/UI Designer</h5>
          <p>
            The user experience position exists to create compelling and elegant
            digital user experiences through ...
          </p>
          <label>Full Time</label>
          <label>Full Time</label>
          <label>Full Time</label>
          <div className="button-wrap">
            <Button style={{ width: "50%" }}>Apply Now</Button>
            <Button
              style={{ background: "grey", border: "none", width: "40%" }}
            >
              Messages
            </Button>
          </div>
        </div>
        <div className="alert">
          <img src={logo2} alt="logo2" />
          <BiDotsHorizontalRounded style={{ float: "right" }} />
          <h5>UX/UI Designer</h5>
          <p>
            The user experience position exists to create compelling and elegant
            digital user experiences through ...
          </p>
          <label>Full Time</label>
          <label>Full Time</label>
          <label>Full Time</label>
          <div className="button-wrap">
            <Button style={{ width: "50%" }}>Apply Now</Button>
            <Button
              style={{ background: "grey", border: "none", width: "40%" }}
            >
              Messages
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
