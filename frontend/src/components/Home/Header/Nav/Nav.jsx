import NavContainer from "./Nav.module.css";
import React from "react";
const Nav = () => {
  return (
    <>
      <nav className={NavContainer.ContainerNav}>
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Popular Destinations </li>
          <button>Sign in </button>
          <button>Login </button>
          <i className="fa-solid fa-home"></i>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
