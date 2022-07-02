import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Platform from "../components/Platform";
import Review from "../components/Review";
import UploadCV from "../components/UploadCV";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Platform />
      <Feature />
      <Review />
      <UploadCV />
    </div>
  );
};

export default Home;
