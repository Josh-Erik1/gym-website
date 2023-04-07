import "./notfound.css";
import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
  return (
    <section className="container notfound__container">
      <h2>Page Not Found </h2>
      <Link to="/" className="btn">
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
