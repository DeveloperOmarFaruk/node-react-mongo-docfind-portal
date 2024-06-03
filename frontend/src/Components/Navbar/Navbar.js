import React from "react";
import $ from "jquery";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import LightLogo from "../../Images/Assets/logo-light.png";
import useFirebase from "../../Hooks/useFirebase";
import useFunction from "../../Hooks/useFunction";

const Navbar = () => {
  const { userInfo, handleSignOut } = useFirebase();
  const { admin } = useFunction();

  // JQuery for Navbar
  $(window).scroll(function () {
    if ($(document).scrollTop() < 1) {
      $(".header").removeClass("fixed");
      $(".header").removeClass("active");
    } else if ($(document).scrollTop() > 40) {
      $(".header").removeClass("fixed");
      $(".header").addClass("active");
    } else {
      $(".header").addClass("fixed");
    }
  });
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="logo">
              <NavLink to="/">
                <img src={LightLogo} alt="logo" />
              </NavLink>
            </div>

            <input type="checkbox" id="click" />
            <label for="click" className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
            <ul>
              <li>
                <NavLink to="/" className="nav-links" activeClass="active">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/appoinment" className="nav-links">
                  Appoinment
                </NavLink>
              </li>

              {userInfo.email ? (
                <>
                  <li>
                    <NavLink to="/my-appoinment" className="nav-links">
                      My Appoinment
                    </NavLink>
                  </li>

                  <li onClick={handleSignOut}>
                    <NavLink to="/login" className="nav-links">
                      Logout
                    </NavLink>
                  </li>

                  {/* <li>
                    <NavLink to="/dashboard" className="nav-links">
                      <i className="fa-solid fa-chart-line"></i>
                    </NavLink>
                  </li> */}

                  <li>
                    <NavLink to="/user-profile" className="nav-links">
                      <i className="fa-solid fa-user"></i>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login" className="nav-links">
                      Login
                    </NavLink>
                  </li>
                </>
              )}

              {userInfo.email && admin ? (
                <li>
                  <NavLink to="/dashboard" className="nav-links">
                    <i className="fa-solid fa-chart-line"></i>
                  </NavLink>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
