import React from "react";
import { useEffect, useRef } from "react";
import "../navbar/Navbar.scss";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import homeIcon from "../../assets/svgs/home.svg";
import aboutUsIcon from "../../assets/svgs/about.svg";
import productsIcon from "../../assets/svgs/product.svg";
import roadMap from "../../assets/svgs/Roadmap.svg";

function Navbar() {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const test = () => {
      const tabsNewAnim = document.querySelector("#navbarSupportedContent");
      const activeItemNewAnim = tabsNewAnim.querySelector(".active");

      if (activeItemNewAnim) {
        const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
        const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
        const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
        const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

        const horiSelector = document.querySelector(".hori-selector");
        if (horiSelector) {
          horiSelector.style.top = itemPosNewAnimTop + "px";
          horiSelector.style.left = itemPosNewAnimLeft + "px";
          horiSelector.style.height = activeWidthNewAnimHeight + "px";
          horiSelector.style.width = activeWidthNewAnimWidth + "px";
        }
      }

      const lis = tabsNewAnim.querySelectorAll("li");

      if (lis) {
        lis.forEach((li) => {
          li.addEventListener("click", (e) => {
            lis.forEach((item) => item.classList.remove("active"));
            li.classList.add("active");
            const activeWidthNewAnimHeight = li.clientHeight;
            const activeWidthNewAnimWidth = li.clientWidth;
            const itemPosNewAnimTop = li.offsetTop;
            const itemPosNewAnimLeft = li.offsetLeft;

            const horiSelector = document.querySelector(".hori-selector");
            if (horiSelector) {
              horiSelector.style.top = itemPosNewAnimTop + "px";
              horiSelector.style.left = itemPosNewAnimLeft + "px";
              horiSelector.style.height = activeWidthNewAnimHeight + "px";
              // horiSelector.style.width = activeWidthNewAnimWidth + "px";
            }
          });
        });
      }
    };

    const onResize = () => {
      setTimeout(() => {
        test();
      }, 300);
    };

    const onNavbarTogglerClick = () => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      } else {
        navbarCollapse.classList.add("show");
      }

      setTimeout(() => {
        test();
      });
    };
    const handleClickOutside = (event) => {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      const isNavbarToggler = event.target.classList.contains("navbar-toggler");
      const isNavbarCollapse =
        event.target.classList.contains("navbar-collapse");

      if (!isNavbarToggler && !isNavbarCollapse) {
        navbarCollapse.classList.remove("show");
      }
    };
    // Initial test on page load
    test();

    // Attach event listeners
    window.addEventListener("resize", onResize);
    window.addEventListener("click", handleClickOutside);

    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler) {
      navbarToggler.addEventListener("click", onNavbarTogglerClick);
    }

    return () => {
      // Clean up event listeners on unmount if necessary
      window.removeEventListener("resize", onResize);
      window.removeEventListener("click", handleClickOutside);
      if (navbarToggler) {
        navbarToggler.removeEventListener("click", onNavbarTogglerClick);
      }
    };
  }, []);

  useEffect(() => {
    // Add active class to target link
    const path = window.location.pathname.split("/").pop() || "index.html";
    const target = document.querySelector(
      `#navbarSupportedContent ul li a[href="${path}"]`
    );
    if (target) {
      target.parentElement.classList.add("active");
    }
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="/">
          <img src={logo} className="logo-img" />
        </a>
        <button
          type="button"
          className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
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
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          // ref={dropdownRef}
        >
          <ul class="navbar-nav ml-auto">
            <div class="hori-selector">
              <div class="left"></div>
              <div class="right"></div>
            </div>
            <li class="nav-item">
              <NavLink class="nav-link" to="/">
                {/* <img src={homeIcon} width={20} className="navbar-icon" /> */}
                HOME
              </NavLink>
            </li>
            <li class="nav-item ">
              <NavLink class="nav-link" to="/about-us">
                {/* <img src={aboutUsIcon} width={20} className="navbar-icon" /> */}
                ABOUT US
              </NavLink>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/programs/hackathon"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PROGRAMS
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="dropdown-list">
                  <NavLink class="dropdown-item" to="/programs/hackathon">
                    HACKATHON
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
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
