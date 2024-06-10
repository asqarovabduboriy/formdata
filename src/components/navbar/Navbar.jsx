import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
          <div className="container wrapper">
            <div>
             <NavLink to="/">
             <h1 >Lesson 4</h1>
             </NavLink>
            </div>
            <ul>
              <NavLink to="/">
                <li className="home">Home</li>
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
