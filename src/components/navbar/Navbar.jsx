import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
          <div className="container wrapper">
            <div>
              <h1>Lesson 4</h1>
            </div>
            <ul>
              <NavLink to="/">
                <li>Home</li>
              </NavLink>
              <NavLink to="/user">
                <li>Create user</li>
              </NavLink>
            </ul>
          </div>
      </header>
    </>
  );
};

export default Navbar;
