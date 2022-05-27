import React from "react";
import { Button } from "react-bootstrap";
import "./cv.css";
import { BiUpload } from "react-icons/bi";
import logo from "../../images/svg-1.svg";
const UploadCV = () => {
  return (
    <div className="maincv">
      <div className="cv">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="upload">
          <h3>
            Get Matched The Most Valuable Jobs, Just <span>Drop Your CV</span>{" "}
            here
          </h3>{" "}
          <p>
            In the subject line of your email, write your name, the description
            of the position and its reference number. If you did not find the
            vacancy on the employer's website, it's helpful to state where you
            found it.
          </p>
          <Button>
            <BiUpload />
            Upload Your CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadCV;
