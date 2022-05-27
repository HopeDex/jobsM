import React, { useEffect, useState } from "react";
import axios from "axios";
import "./feature.css";
import logo from "../../images/logo2.png";
import { Button } from "react-bootstrap";
const Feature = () => {
  const [details, setDetails] = useState([]);
  // let history = useHistory();
  const url = "http://localhost:5000/retrieve/featured";

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
              <p>
                <img src={logo} alt="logo" style={{ width: "50px" }} />{" "}
                <p style={{ float: "right" }}>
                  {value.Companyname}
                  <br />
                  {value.Location}
                </p>
              </p>
              <h5>{value.Position}</h5>
              <p className="type">{value.type}</p>
              <p className="descr">{value.overview}</p>
              <label>
                {value.salary}
                <Button>Apply Now</Button>
              </label>
            </div>
          );
        })}
      </div>
      <div className="but">
        <Button>Find More Jobs</Button>
      </div>
    </div>
  );
};

export default Feature;
