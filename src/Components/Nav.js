import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../Styles/nav.css"

const Nav = () => {
  return (
    <div className="nav">
        <Link to="./">
            <p>Home</p>
        </Link>
        <Link to="./shop">
            <p>Shop</p>
        </Link>
    </div>
  );
};

export default Nav;