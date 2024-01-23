import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import HomeLeftSideDetails from "./HomeLeftSideDetails";

const Home = () => {
  return (
    <div className="home__component">
      <nav className="home__navbar">
        <div className="logo">
          <h1>ChatterBox</h1>
        </div>
      </nav>
      <HomeLeftSideDetails />
      <div className="right-side"></div>
    </div>
  );
};

export default Home;
