import React from "react";
import "./home.css";
// import { Link } from "react-router-dom";
import HomeLeftSideDetails from "./HomeLeftSideDetails";

const Home = () => {
  return (
    <div className="home__component">
      <nav className="home__navbar">
        <div className="nav__left__header">
          <div className="logo">
            <h1>ChatterBox</h1>
          </div>
          <div className="profile-details">
            <div className="profile-photo"></div>
            <p>Haritha</p>
            <button>Logout</button>
          </div>
        </div>
      </nav>
      <HomeLeftSideDetails />
      <div className="right-side"></div>
    </div>
  );
};

export default Home;
