import React from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Platform from "../components/Platform";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Platform />
      <Feature />
    </div>
  );
};

export default Home;
