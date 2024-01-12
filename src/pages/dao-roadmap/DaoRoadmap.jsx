import React from "react";
import "../dao-roadmap/DaoRoadmap.scss";
import { useRef, useEffect, useState } from "react";
import daoimg1 from "../../assets/images/daoimg1.webp";
import daoimg2 from "../../assets/images/daoimg2.png";
import daoimg3 from "../../assets/images/daoimg3.png";
import daoimg4 from "../../assets/images/daoimg4.png";
import daoimg5 from "../../assets/images/daoimg5.png";
import daoimg6 from "../../assets/images/daoimg6.png";
import daoimg7 from "../../assets/images/daoimg7.png";
import daoimg8 from "../../assets/images/daoimg8.png";
import daoFooterImg from "../../assets/images/dao-page-footer-img.png";
import Navbar from "../navbar/Navbar";
import daoline from "../../assets/images/daoline.png";
import Footer from "../footer/Footer";
import ScrollBtn from "../../components/ScrollBtn";
import Slide from "react-reveal/Slide";
import { Fade } from "react-reveal";
import Roll from "react-reveal/Roll";
import { Helmet } from "react-helmet";

function DaoRoadmap() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 1000; // Adjust 500 based on when you want the opacity change to occur

      if (newOpacity >= 0) {
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dao-main-bg">
      <Navbar />
      <ScrollBtn
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
      />
      <div className="dao-roadmap">
        <Helmet>
          <meta property="og:title" content="The Rock" />
          <meta property="og:type" content="video.movie" />

          <meta
            property="og:image"
            content="https://ia.media-imdb.com/images/rock.jpg"
          />
        </Helmet>
        <div
          className="dao-sec1-main d-none d-md-flex"
          ref={section1Ref}
          smooth={true}
          duration={600}
        >
          <Fade bottom duration={1000} distance="20px">
            <div className="dao-sec1-flex1">
              <div className="dao-roadmap2">DAO Roadmap</div>
              <div className="we-envision-a">
                We envision a future where Lampros Labs transforms into a
                decentralized autonomous organization (DAO), a nexus where
                collective intelligence drives innovation and growth. Our
                roadmap sketches the pathway to this transformation,
                highlighting the pivotal milestones that will shape our
                decentralized future. Here, we outline the structured phases
                that will lead us to become a more collaborative, autonomous,
                and community-driven entity.
              </div>
            </div>
          </Fade>

          <div className="dao-sec1-flex2">
            <img
              className="illustration-14-1"
              alt=""
              src={daoimg1}
              style={{ opacity }}
            />
            <img
              className="mobile-img7"
              alt=""
              src={daoimg7}
              style={{ opacity }}
            />
          </div>
        </div>

        <Fade bottom duration={1000} distance="20px">
          <div className="lampros-labs-roadmap-container for-laptops d-none d-md-block">
            <div ref={section2Ref} smooth={true} duration={200}>
              Lampros Labs <span className="roadmap">Roadmap</span>
            </div>
            <div>to Becoming a DAO</div>
          </div>
        </Fade>
        <div className="d-md-none">
          <div className="dao-sec1-flex1">
            <Fade bottom duration={1000} distance="20px">
              <div className="dao-roadmap2">DAO Roadmap</div>
              <div className="we-envision-a">
                We envision a future where Lampros Labs transforms into a
                decentralized autonomous organization (DAO), a nexus where
                collective intelligence drives innovation and growth. Our
                roadmap sketches the pathway to this transformation,
                highlighting the pivotal milestones that will shape our
                decentralized future. Here, we outline the structured phases
                that will lead us to become a more collaborative, autonomous,
                and community-driven entity.
              </div>
            </Fade>
            <img className="mobile-dao-img" alt="" src={daoimg7} />
          </div>
        </div>

        <div className="for-mobiles d-md-none">
          <Fade bottom duration={1000} distance="50px">
            <div className="lampros-labs-roadmap-container  ">
              <div>
                Lampros Labs <br />
                <span className="roadmap">Roadmap</span> TO <br /> Becoming a
                dao
              </div>
              <div className="d-md-none">
                <img
                  className="mobile-heading-left-image "
                  alt=""
                  src={daoimg8}
                />
              </div>
            </div>
          </Fade>
        </div>

        <div
          className="dao-sec2-main"
          ref={section3Ref}
          smooth={true}
          duration={600}
        >
          <img className="dao-roadmap-inner" alt="" src={daoline} />
          <div className="dao-sec2-first">
            <Fade left duration={1000} distance="50px">
              <img className="design-31-1" alt="" src={daoimg2} />
              <img
                className="design-32-1 d-none d-md-block"
                alt=""
                src={daoimg3}
              />
            </Fade>

            <div className="dao-box1-main dao-box-style-left">
              <div className="dao-box-heading">Foundation Phase</div>
              <div>
                <ul className="dao-box-pera custom-list ">
                  <li>DAO Concept Introduction</li>
                  <li>Community Brainstorming</li>
                  <li>Feasibility Analysis</li>
                </ul>
              </div>
            </div>

            <div className="dao-box2-main dao-box-style-left">
              <div className="dao-box-heading">Development & Design Phase</div>
              <div>
                <ul className="dao-box-pera custom-list ">
                  <li>DAO Framework Formulation</li>
                  <li>Technical Architecture Design</li>
                  <li>Pilot DAO Launch</li>
                </ul>
              </div>
            </div>

            <div className="dao-box3-main custom-list dao-box-style-left">
              <div className="dao-box-heading">Implementation Phase</div>
              <div>
                <ul className="dao-box-pera custom-list ">
                  <li>Governance Token Issuance</li>
                  <li>Infrastructure Integration</li>
                  <li>Community Education</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dao-sec2-second">
            <div className="dao-box4-main dao-box-style-right">
              <div className="dao-box-heading">
                Iteration & Enhancement Phase
              </div>
              <div>
                <ul className="dao-box-pera1  ">
                  <li>Community Feedback and Adjustments</li>
                  <li>Continuous Learning Modules</li>
                  <li>Proposal Mechanisms Initiated</li>
                </ul>
              </div>
            </div>

            <div className="dao-box5-main dao-box-style-right">
              <div className="dao-box-heading">Full Decentralization Phase</div>
              <div>
                <ul className="dao-box-pera1  ">
                  <li>Complete Operational Transition to DAO</li>
                  <li>Decentralized Revenue Distribution</li>
                  <li>Community-Led Growth and Innovation</li>
                </ul>
              </div>
            </div>

            <div className="dao-box6-main dao-box-style-right">
              <div className="dao-box-heading">
                Review & Future Prospects Phase
              </div>
              <div>
                <ul className="dao-box-pera1 ">
                  <li>Periodic Operational Review</li>
                  <li>Future Goal Outlining</li>
                  <li>Staying Ahead in the Web3 Evolution</li>
                </ul>
              </div>
            </div>

            <div>
              <Fade bottom duration={1000} distance="20px">
                <img
                  className="dao-right-img-1 d-none d-md-block"
                  alt=""
                  src={daoimg4}
                />
              </Fade>
            </div>
            <div>
              <img
                className="dao-right-img-2 d-none d-md-block"
                alt=""
                src={daoimg5}
              />
            </div>
            <div>
              <img
                className="dao-right-img-3 d-none d-md-block"
                alt=""
                src={daoimg6}
              />
            </div>
            <div className="d-md-none">
              <img className="dao-footer-img" alt="" src={daoFooterImg} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DaoRoadmap;
