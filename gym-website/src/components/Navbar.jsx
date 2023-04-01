import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data";
import { AiOutlineMenu } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

const Navbar = () => {
  return (
    <nav>
      <div className=" container nav__container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className="nav__links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}> {name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav__toggle__btn">
          <AiOutlineMenu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
