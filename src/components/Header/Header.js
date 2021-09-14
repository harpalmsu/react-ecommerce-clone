import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";
export default function Header() {
  const value = useContext(ThemeContext);
  return (
    <>
      <div className="mainHeader">
        <div className="heroWrapper">
          <div className="hero"></div>
        </div>
        <div className="nav">
          <div>
            <Link to="/" className="nav-link">
              <h2>Art Gallary - {value}</h2>
            </Link>
          </div>

          <div>
            <Link to="/signup" className="nav-link">
              Login/SignUp
            </Link>
          </div>
          <div>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </div>
          <div>
            <Link to="/todo" className="nav-link">
              Todo
            </Link>
          </div>
          <div>
            <Link to="/table" className="nav-link">
              Table
            </Link>
          </div>
          <div>
            <Link to="/reactTable" className="nav-link">
              React Table
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
