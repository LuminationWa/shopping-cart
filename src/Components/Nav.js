import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/nav.css";
import logoImg from "./NavComponents/Images/default-monochrome-white.svg"

const Nav = () => {
  return (
    <div className="nav">
      <img src={logoImg} class="logo-img"></img>
      <div class="nav-buttons">
        <Link to="./">
          <p class="link">Home</p>
        </Link>
        <Link to="./shop">
          <p class="link">Shop</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
