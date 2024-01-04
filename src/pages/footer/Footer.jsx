import { useRef } from "react";
import "../footer/Footer.scss";
import discord from "../../assets/images/discord.png";
import twitter from "../../assets/images/twitter.png";
import mirror from "../../assets/images/mirror.png";
import telegram from "../../assets/images/telegram.png";
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
        <Link to="https://twitter.com/lamproslabsdao" target="blank">
          <img src={twitter} className="footer-icon"></img>
        </Link>

        <Link to="https://discord.gg/5jxNq8bDt2" target="blank">
          <img src={discord} className="footer-icon"></img>
        </Link>

        <Link to="https://t.me/lamproslabsdao" target="blank">
          <img src={telegram} className="footer-icon"></img>
        </Link>

        <Link>
          <img src={mirror} className="footer-icon"></img>
        </Link>
      </div>
      <p className="footer-copyright">
        Copyright © 2024 Lampros labs | All rights reserved
      </p>
    </div>
  );
}

export default Footer;
