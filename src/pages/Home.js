import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Platform from "../components/Platform";
import UploadCV from "../components/UploadCV";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Platform />
      <Feature />
      <UploadCV />
    </div>
  );
};

export default Home;
