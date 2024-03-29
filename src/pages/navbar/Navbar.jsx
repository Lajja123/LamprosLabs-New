import React from "react";
import { useEffect, useRef } from "react";
import "../navbar/Navbar.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        // Clicked outside the navbar, close the menu
        const navbarToggler = document.getElementById("navbarNavDropdown");
        if (navbarToggler) {
          navbarToggler.classList.remove("show");
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-lg " ref={navbarRef}>
        <a class="navbar-brand navbar-logo" href="/">
          <img src={logo} className="logo-img" />
        </a>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto ">
            <div class="hori-selector">
              <div class="left"></div>
              <div class="right"></div>
            </div>
            <li class="nav-item three-d">
              <NavLink class="nav-link" to="/">
                HOME
              </NavLink>
            </li>
            <li class="nav-item three-d">
              <a class="nav-link" href="/about-us">
                ABOUT US
              </a>
            </li>

            <li class="nav-item dropdown three-d">
              <div
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PROGRAM
              </div>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-list three-d">
                  <NavLink class="dropdown-item" to="/programs/hackathon">
                    HACKATHON
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item three-d">
              <NavLink class="nav-link" to="/dao-roadmap">
                {/* <img src={roadMap} width={20} className="navbar-icon" /> */}
                DAO ROADMAP
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
