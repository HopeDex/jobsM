import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./single.css";
const SinglePage = () => {
  let { vacancyID } = useParams();
  const [details, setDetails] = useState();
  const url = `http://localhost:5000/retrieve/single/${vacancyID}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="single">
      <h1>sujkhkj</h1>
    </div>
  );
};

export default SinglePage;
