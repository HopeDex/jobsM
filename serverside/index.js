const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "jobs",
});
//retrieving 8 featured jobs
app.get("/retrieve/featured", (req, res) => {
  console.log("all");
  const sqlget = "Select * FROM vacancy  LIMIT 8";
  db.query(sqlget, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log(result);
  });
});
//
app.get("/all", (req, res) => {
  const sqlget = "SELECT * FROM vacancy";
  db.query(sqlget, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
    console.log(result);
  });
});
//retrieving current number of job listsing for each catergory
app.get("/retrieve/cat", (req, res) => {
  let results = [];
  const business =
    "Select count(*) as dev FROM vacancy WHERE category='Design and development'";
  db.query(business, (err, result) => {
    if (err) {
      console.log(err);
    }
    results.concat(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
    console.log(results);
  });
  const business1 =
    "Select count(*) as dev FROM vacancy WHERE category='Business and Consultation'";
  db.query(business1, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
  });
  const business3 =
    "Select count(*) as dev FROM vacancy WHERE category='Marketing and communication'";
  db.query(business3, (err, result) => {
    if (err) {
      console.log(err);
    }
    results.concat(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
  });
  const business4 =
    "Select count(*) as dev FROM vacancy WHERE category='Human Research and Development'";
  db.query(business4, (err, result) => {
    if (err) {
      console.log(err);
    }
    results.concat(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
  });
  const business5 =
    "Select count(*) as dev FROM vacancy WHERE category='Finance and Management'";
  db.query(business5, (err, result) => {
    if (err) {
      console.log(err);
    }
    results.concat(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
  });
  const business6 =
    "Select count(*) as dev FROM vacancy WHERE category='Security'";
  db.query(business6, (err, result) => {
    if (err) {
      console.log(err);
    }
    results.concat(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
  });
  const business7 =
    "Select count(*) as dev FROM vacancy WHERE category='Project'";
  db.query(business7, (err, result) => {
    if (err) {
      console.log(err);
    }
    results.concat(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
  });
  const business2 =
    "Select count(*) as dev FROM vacancy WHERE category='Customer'";
  db.query(business2, (err, result) => {
    if (err) {
      console.log(err);
    }
    results.concat(result);
    result.map((value, key) => {
      results.push(value.dev.toString());
    });
    console.log(results);
    res.send(results);
  });
});
/*    DOne DOne DOne      */

app.listen(5000, () => {
  console.log("running on port 5000");
});
