import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className=" container nav__container">
        <Link className="logo" to="/">
          <img
            src={Logo}
            onClick={() => setIsNavShowing(false)}
            alt="Nav logo"
          />
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show-nav" : "hide-nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  onClick={() => setIsNavShowing((prev) => !prev)}
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {" "}
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setIsNavShowing((prev) => !prev)}
          className="nav__toggle__btn"
        >
          {isNavShowing ? <MdOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
