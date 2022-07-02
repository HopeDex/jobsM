import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./platform.css";

import business from "../../images/business.svg";
import customer from "../../images/customer.svg";
import marketting from "../../images/marketting.svg";
import security from "../../images/security.svg";
import design from "../../images/design.svg";
import project from "../../images/project.svg";
import human from "../../images/human.svg";
import finance from "../../images/finance.svg";
const Platform = () => {
  const [counts, setCount] = useState([]);
  const url = "http://localhost:5000/retrieve/cat";
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/search");
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCount(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="wrapper">
      <h1>
        One Platform
        <br />
        Many <span>Solutions</span>
      </h1>
      <div className="cardwrapper">
        <div
          className="cards"
          onClick={() => {
            navigation();
          }}
        >
          <img src={marketting} alt="marketing and communication" />
          <h4>Marketing and communication</h4>
          <p>{counts[2]} jobs available</p>
        </div>
        <div
          className="cards"
          onClick={() => {
            navigation();
          }}
        >
          <img src={design} alt="dsign and dev" />
          <h4>Design and Development</h4>
          <p> {counts[0]} jobs available</p>
        </div>
        <div
          className="cards"
          onClick={() => {
            navigation();
          }}
        >
          <img src={human} alt="Human research and Dev" />
          <h4>Human Research and Development</h4>
          <p>{counts[3]} jobs available</p>
        </div>
        <div className="cards">
          <img src={finance} alt="Finance and managemenet" />
          <h4>Finance and Management</h4>
          <p>{counts[4]} jobs available</p>
        </div>
        <div
          className="cards"
          onClick={() => {
            navigation();
          }}
        >
          <img src={security} alt="Armforce and security" />
          <h4>Arm Force Guide and Security</h4>
          <p>{counts[5]} jobs available</p>
        </div>
        <div
          className="cards"
          onClick={() => {
            navigation();
          }}
        >
          <img src={business} alt="business and consultation" />
          <h4>Business and Consultation</h4>
          <p>{counts[1]} jobs available</p>
        </div>
        <div
          className="cards"
          onClick={() => {
            navigation();
          }}
        >
          <img src={customer} alt="Customer Supportn" />
          <h4>Customer Support Care </h4>
          <p>{counts[7]} jobs available</p>
        </div>

        <div
          className="cards"
          onClick={() => {
            navigation();
          }}
        >
          <img src={project} alt="Project Management" />
          <h4>Project Management</h4>
          <p>{counts[6]} jobs available</p>
        </div>
      </div>
    </div>
  );
};

export default Platform;
