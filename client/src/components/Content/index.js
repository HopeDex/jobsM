import React, { useState, useEffect } from "react";
import axios from "axios";
import "./content.css";
import { BiDotsHorizontalRounded, BiSortUp } from "react-icons/bi";
import { Button } from "react-bootstrap";
import logo2 from "../../images/logo2.png";
import SinglePage from "../SinglePage";
const Content = () => {
  const url = "http://localhost:5000/all";
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="maincontent">
      <p className="headline">
        Showing {details.length} Jobs{" "}
        <p style={{ float: "right" }}>
          <span>sort by:</span>{" "}
          <strong>
            date posted <BiSortUp />{" "}
          </strong>
        </p>
      </p>

      <div className="grid-container">
        {details.map((value, key) => {
          return (
            <div className="alert">
              <img src={logo2} alt="logo" />
              <BiDotsHorizontalRounded style={{ float: "right" }} />
              <h5>{value.Position}</h5>
              <p>
                The user experience position exists to create compelling and
                elegant digital user experiences through ...
              </p>
              <div style={{ display: "flex" }}>
                <label>{value.type}</label>
                <label>{value.salary}</label>
                <label>{value.Location}</label>
              </div>
              <div className="button-wrap">
                <Button style={{ width: "50%" }}>Apply Now</Button>
                <Button
                  style={{ background: "grey", border: "none", width: "48%" }}
                >
                  Messages
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
