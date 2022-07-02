import React, { useEffect, useState } from "react";
import axios from "axios";
import "./feature.css";
import logo from "../../images/logo2.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  const [details, setDetails] = useState([]);
  const [id, setId] = useState();
  let navigate = useNavigate();
  const url = "http://localhost:5000/retrieve/featured";

  const meh = () => {
    let category = "Customer";
    navigate("/search", { replace: false });
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setDetails(res.data);
        console.log(details);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="feature">
      <h1>
        <span>Featured</span> Jobs
      </h1>
      <div className="featured">
        {details.map((value, key) => {
          return (
            <div className="job">
              <div style={{ display: "flex" }}>
                <p>
                  <img src={logo} alt="logo" style={{ width: "50px" }} />{" "}
                </p>
                <div style={{ display: "block" }}>
                  <strong>{value.Companyname}</strong>
                  <br />
                  <small>{value.Location}</small>
                </div>
              </div>
              <h5>{value.Position}</h5>
              <p className="type">{value.type}</p>
              <p className="descr">{value.overview}</p>
              <div className="apply">
                <label>{value.salary}</label>
                <Button
                  onClick={() => {
                    console.log(value.vacancyID);
                    navigate(`/single/${value.vacancyID}`);
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="but">
        <Button onClick={meh}>Find More Jobs</Button>
      </div>
    </div>
  );
};

export default Feature;
