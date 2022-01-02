import React, { useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiUserMinus } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <nav>
      <header>
        <h2>
          <span className="logo-color">c</span>rypto
        </h2>
        <div>
          <Link className="login" to="/">
            {loggedIn ? (
              <p>
                <BiUserMinus />
                <span>logout</span>
              </p>
            ) : (
              <p>
                <BiUserPlus />
                <span>login</span>
              </p>
            )}
          </Link>
          <button className="nav-btn" onClick={() => setShowNav(!showNav)}>
            <FaBars />
            <span>menu</span>
          </button>
          <button type="button" className="get-started-btn">
            Get started
          </button>
        </div>
      </header>
      <div className="divider"></div>
      <div className={`${showNav ? "nav-menu show-nav" : "nav-menu"}`}>
        <ul>
          <li>
            <Link to="/pricecrypto" onClick={() => setShowNav(!showNav)}>
              Price
            </Link>
          </li>
          <li>
            <Link to="/currencies" onClick={() => setShowNav(!showNav)}>
              Currencies
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
