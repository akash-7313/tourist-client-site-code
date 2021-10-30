import React from "react";
import './Home.css';
import Destination from "../Destination/Destination";
import Gallery from "../Gallery/Gallery";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home-overflow">
      <Gallery></Gallery>
      <Destination></Destination>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
