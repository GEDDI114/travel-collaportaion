import NavContainer from './Nav.module.css' ; 
import React from "react";
const Nav = () => {
  return (
    <>
      <nav className={NavContainer.ContainerNav}>
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Popular Destinations </li>
          <li>Our Pagkages</li>
          <li>Help</li>
          <button>Sign in </button>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
