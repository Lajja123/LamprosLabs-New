import { useRef } from "react";
import "../footer/Footer.scss";
import discord from "../../assets/images/discord.png";
import twitter from "../../assets/images/twitter.png";
import linkln from "../../assets/images/linkln.png";
import call from "../../assets/images/call.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/lampros-labs-logo.png";

function Footer() {
  const navRef = useRef();
  let activeStyle = {
    color: "#00ffff",
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for an instant scroll
    });
  };
  return (
    <div className="footer-main">
      {" "}
      <div className="footer-flex1">
        {" "}
        <div className="footer-logo-main">
          <Link to="/">
            <img src={logo} className="footer-logo" onClick={scrollToTop}></img>
          </Link>
        </div>
        <footer ref={navRef} className="footer-navbar">
          <NavLink
            to="/about-us"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={scrollToTop}
          >
            <span>About Us</span>
          </NavLink>{" "}
          <NavLink
            to="/programs/hackathon"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={scrollToTop}
          >
            {" "}
            Hackathon
          </NavLink>
          <NavLink
            to="/dao-roadmap"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={scrollToTop}
          >
            DAO Roadmap
          </NavLink>
        </footer>
      </div>
      {/* <div className="footer-border"></div> */}
      <div className="footer-icon-main">
        <img src={twitter} className="footer-icon"></img>
        <img src={discord} className="footer-icon"></img>
        <img src={call} className="footer-icon"></img>
        <img src={linkln} className="footer-icon"></img>
      </div>
      <p className="footer-copyright">
        Copyright © 2023 Lampros labs | All rights reserved
      </p>
    </div>
  );
}

export default Footer;
