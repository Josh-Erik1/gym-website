import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";
import "../pages/home/home.css";

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the Legends of the fitness world</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            similique obcaecati perspiciatis maxime qui repellendus error ipsum
            eligendi minus ratione?
          </p>

          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
