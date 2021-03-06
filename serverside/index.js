const express = require("express");
const multer = require("multer");
const cors = require("cors");
const mysql = require("mysql2");
// const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "jobs",
});

axios("https://www.malawijob.com/job-vacancies-search-malawi")
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const articles = [];
    $(".col-lg-5 col-md-5 col-sm-5 col-xs-12 job-title", html).each(
      // function () {
      //   const title = $(this).text();
      //   const texts = $(this).find("h5").text();
      //   articles.push({
      //     title,
      //     texts,
      //   });
      // }
    );
    console.log(articles);
  })
  .catch((err) => console.log(err));

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
//getting specific category
app.get("/retrieve/specific/:category", (req, res) => {
  const category = req.params.id;
  console.log(category);
  const sqlget = "SELECT * from vacancy WHERE category=? ";
  db.query(sqlget, category, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});

app.get("/retrieve/single/:id", (req, res) => {
  const vid = req.params.id;
  console.log(req.params.id);
  const sqlget = "SELECT * from vacancy WHERE vacancyID=?";
  db.query(sqlget, vid, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    res.send(result);
  });
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
