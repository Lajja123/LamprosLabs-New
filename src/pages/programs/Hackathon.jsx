import React from "react";
import "../programs/Hackathon.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import sec1bg from "../../assets/images/hackimg.png";
import arrow from "../../assets/images/right-arrow.png";
import ScrollBtn from "../../components/ScrollBtn";
import { useRef } from "react";
import { Fade } from "react-reveal";

function Hackathon() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <div className="inheri-main-bg">
      {/* <div className="blob11"></div>
      <div className="blob12"></div>
      <div className="blob13"></div>
      <div className="blob14"></div>
      <div className="blob15"></div> */}

      <Navbar />
      <ScrollBtn
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
      />
      <div
        className="hack-section1"
        ref={section1Ref}
        smooth={true}
        duration={200}
      >
        <div className="hack-sec1-bg col-8  ">
          <img src={sec1bg}></img>
        </div>

        <Fade bottom duration={1000} distance="50px">
          <div className="sec1-box col-xl-9 col-8 col-sm-9">
            <div className="sec1-box-title">
              Unleash Your Blockchain Potential
            </div>
            <div className="sec1-box-pera">
              Dive into the realm of blockchain innovation with Lampros Labs’
              exclusive hackathons! These events are meticulously crafted to
              offer participants a platform to ideate, innovate, and showcase
              their groundbreaking solutions. Whether you're a seasoned
              developer or a Web3 newbie, our hackathons are the perfect stage
              to challenge yourself and push boundaries.
            </div>
          </div>
        </Fade>
        <div className="col-xl-9 col-10 col-sm-9 sec1-box-ml-flex">
          <div className="sec1-box-title d-sm-none">
            Unleash Your Blockchain Potential
          </div>
          <div className=" sec1-box-ml sec1-box-pera sec1-box-ml">
            Dive into the realm of blockchain innovation with Lampros Labs’
            exclusive hackathons! These events are meticulously crafted to offer
            participants a platform to ideate, innovate, and showcase their
            groundbreaking solutions. Whether you're a seasoned developer or a
            Web3 newbie, our hackathons are the perfect stage to challenge
            yourself and push boundaries.
          </div>
        </div>
      </div>

      <div
        className="hack-section2"
        ref={section2Ref}
        smooth={true}
        duration={200}
      >
        <div>
          {" "}
          <Fade bottom duration={2000} distance="50px">
            <div className="sec2-heading">Why Join?</div>
          </Fade>
        </div>

        <div class=" col-11  mx-auto">
          <div class="row align-items-stretch">
            <div class="col-md-6 col-lg-3  my-2">
              <Fade duration={1000} delay={500}>
                <div className=" sec2-box">
                  <div class="sec2box-title">Networking</div>
                  <div class="sec2box-pera">
                    Engage with a vibrant community of blockchain enthusiasts,
                    industry veterans, and budding innovators.
                  </div>
                </div>
              </Fade>
            </div>
            <div class="col-md-6 col-lg-3 my-2">
              <Fade duration={1000} delay={700}>
                <div className=" sec2-box">
                  <div class="sec2box-title">Learn</div>
                  <div class="sec2box-pera">
                    Benefit from expert-led sessions, workshops, and hands-on
                    coding challenges.
                  </div>
                </div>
              </Fade>
            </div>
            <div class="col-md-6 col-lg-3 my-2">
              <Fade duration={1000} delay={900}>
                <div className=" sec2-box">
                  <div class="sec2box-title">Innovate</div>
                  <div class="sec2box-pera">
                    Bring your groundbreaking ideas to life and contribute to
                    real-world blockchain solutions.
                  </div>
                </div>
              </Fade>
            </div>

            <div class="col-md-6 col-lg-3 my-2">
              <Fade duration={1000} delay={1200}>
                <div className=" sec2-box">
                  <div class="sec2box-title">Rewards</div>
                  <div class="sec2box-pera">
                    Win exciting prizes, gain recognition, and potentially land
                    collaborations or partnerships!
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hack-section3"
        ref={section3Ref}
        smooth={true}
        duration={200}
      >
        <div>
          <Fade bottom duration={2000} distance="5px">
            <div className="sec3-heading">Upcoming Hackathons</div>
          </Fade>
        </div>

        <div style={{ margin: "50px 0px" }}>
          <div className="sec3-box1 col-10">
            <div className="sec3-box-heading">Lampros Web3 Vision 2023</div>
          </div>
          <div className="sec3-box2 col-10">
            <div className="sec3-hack-flex">
              <div className="sec3-flex1">
                <div className="s3-date col-3">Date:</div>
                <input type="text" id="username" name="username" />
              </div>
              <div className="sec3-flex1">
                <div className="s3-date col-3">Theme:</div>
                <input type="text" id="username" name="username" />
              </div>
              <div>
                <button id="button-7" className="sec3-btn">
                  <div id="dub-arrow-register">
                    <img src={arrow} />
                  </div>
                  Register Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hack-section4 col-9  mx-auto "
        style={{ margin: "15% 0px" }}
      >
        <div className="s4-heading ">Hackathon Resources</div>

        <div className="sec4-hack-res">
          <div className="sec4-flex1 ">
            <div className="s4-res col-4">Workshops</div>

            <div className="s4-pera col-6">
              Pre-hackathon webinars and tutorials to gear up your skills.
            </div>
          </div>
          <div className="sec4-flex1 ">
            <div className="s4-res col-4">Mentorship</div>

            <div className="s4-pera col-6">
              On-hand expert guidance throughout the event.
            </div>
          </div>
          <div className="sec4-flex1">
            <div className="s4-res col-4">Toolkits</div>

            <div className="s4-pera col-6">
              Access to premium tools, APIs, and datasets to aid your
              development process.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hackathon;
