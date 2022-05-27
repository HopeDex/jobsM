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
app.listen(5000, () => {
  console.log("running on port 5000");
});
