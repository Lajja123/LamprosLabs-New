import React from "react";
import { useRef, useState, useEffect } from "react";
import "../aboutUs/AboutUs.scss";
import aboutImg from "../../assets/images/aboutUsImg.webp";
import vision from "../../assets/images/Vision.jpg";
import mission from "../../assets/images/Mission.jpg";
import Navbar from "../navbar/Navbar";
import blockchain from "../../assets/images/blockchain.png";
import blockchainImg from "../../assets/images/blockchain-img.png";
import idea from "../../assets/images/idea.png";
import technology from "../../assets/images/technology.png";
import website from "../../assets/images/website.png";
import Footer from "../footer/Footer";
import aboutImg2 from "../../assets/images/about-img2.webp";
import journey from "../../assets/images/journey-img.png";
import journey1 from "../../assets/images/journey1.png";
import ScrollBtn from "../../components/ScrollBtn";
import Slide from "react-reveal/Slide";
import { Fade } from "react-reveal";
import { Helmet } from "react-helmet";

function AboutUs() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <div>
      {" "}
      <Helmet>
        <meta property="og:title" content="About Us Page" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="http://localhost:3000/about-us" />
        <meta
          property="og:image"
          content="https://www.kasandbox.org/programming-images/avatars/old-spice-man.png"
        />
        <meta property="og:description" content="hello..." />
      </Helmet>
      <div className="aboutUs-main-bg">
        <Navbar />
        <ScrollBtn
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
        />
        <div
          className="aboutUs-main"
          ref={section1Ref}
          smooth={true}
          duration={600}
        >
          <section className="section1-aboutUs py-sm-5 py-3">
            <div className="aboutImg-main-div">
              <img src={aboutImg} alt="" className="aboutImg" />
            </div>

            <div className="aboutUs-section1-card px-sm-5 px-3">
              <div className="aboutUs-title pb-3">About Us</div>

              <Fade duration={1500} delay={100}>
                <div className="about-sec1-box">
                  <p className="aboutUs-section1-card-desc">
                    In the vibrant world of blockchain, Lampros Labs stands as a
                    beacon, illuminating the path for innovators, dreamers, and
                    builders. Founded with a profound vision to seamlessly merge
                    blockchain technology with mainstream applications, we've
                    steadily grown into a robust community hub.
                  </p>
                  <p className="aboutUs-section1-card-desc">
                    Our ethos is rooted in fostering growth – both of the
                    individual and the collective. With each project we support,
                    every developer we guide, and each event we host, we inch
                    closer to a future where blockchain isn't just a buzzword,
                    but an integral part of our digital tapestry.
                  </p>
                  <p className="aboutUs-section1-card-desc">
                    At Lampros Labs, it's not just about code and technology.
                    It's about the humans behind it. We prioritize well-being,
                    ensuring that our members thrive in an environment that
                    values creativity, innovation, and collaboration.
                  </p>
                  <p className="aboutUs-section1-card-desc">
                    Through the Lampros Labs Collective, we’re championing a
                    unique movement. A movement where public goods take center
                    stage, where developers receive unparalleled support, and
                    where blockchain technology finds its rightful place in
                    mainstream use.
                  </p>
                  <p className="aboutUs-section1-card-desc">
                    Join us in this monumental journey as we reshape the
                    contours of the digital realm, making Web3 more accessible,
                    inclusive, and influential.
                  </p>
                </div>
              </Fade>
            </div>
          </section>

          <section className="section2-aboutUs">
            <div className="aboutsec-flex-main justify-content-around py-lg-2 pb-lg-5">
              <div className="aboutsec-flex col-lg-5 col-10">
                <Fade bottom duration={1000} distance="50px">
                  <div className="aboutsec-vision-div">
                    <div className="aboutsec-vision">Vision</div>
                  </div>
                  <div className="aboutsec-pera-box">
                    <div className="sec2-about-pera-vision">
                      To be the global nexus where blockchain technology
                      seamlessly integrates into everyday life, creating a
                      decentralized and empowered future for all.
                    </div>
                  </div>
                </Fade>
              </div>
              <Fade bottom duration={1000} distance="50px">
                {" "}
                <div className="vision-img col-5 d-none d-lg-block">
                  <img src={vision}></img>
                </div>
              </Fade>
            </div>

            <div className="aboutsec-flex-main justify-content-around py-lg-2">
              <Fade bottom duration={1000} distance="50px">
                <div className="vision-img  col-lg-5 d-none d-lg-block">
                  <img src={mission}></img>
                </div>
              </Fade>

              <div className="aboutsec-flex col-lg-5 col-10">
                <Fade bottom duration={1000} distance="50px">
                  <div className="aboutsec-vision-div">
                    <div className="aboutsec-mission">Mission</div>
                  </div>
                  <div className="aboutsec-pera-box">
                    <div className="sec2-about-pera-mission">
                      Lampros Labs is dedicated to cultivating trailblazing web3
                      leaders, amplifying open-source breakthroughs across
                      multiple blockchain terrains, and building a community
                      bound by shared growth and decentralized principles.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>

          <section
            className="section3-aboutUs pb-5 d-none d-lg-block"
            ref={section2Ref}
            smooth={true}
            duration={600}
          >
            <div className="about-sec3-flex1">
              <div className="sec3-about-img1-div">
                <img className="sec3-about-img1" src={blockchain}></img>
              </div>

              <div className="sec3-about-blockflex">
                <p className="sec3-about-heading">
                  The Blockchain Mainstream Movement
                </p>
                <p className="sec3-about-pera">
                  Lampros Labs stands at the frontier of innovation. Our
                  mission? To propel all projects harnessing blockchain
                  technology to mainstream consciousness. When we talk about
                  blockchain, we're talking about the future, and we're here to
                  lead the charge.
                </p>
              </div>
            </div>

            <div className="about-img-flex py-2">
              <div className="about-sec3-hero col-6">
                <img src={aboutImg2} className="about-img2"></img>
                <div className="sec3-img-heading">Our Ethos</div>
              </div>
              <div className="py-3">
                <div className="about-sec3-flex2 py-2">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={idea}></img>
                  </div>

                  <div className="sec3-about-blockflex">
                    <div className="sec3-about-heading">
                      Opportunities Await
                    </div>
                    <p className="sec3-about-pera">
                      We're constantly on the lookout. Each day, established
                      blockchains present new chances to contribute, and we
                      ensure we're first in line to seize them.
                    </p>
                  </div>
                </div>

                <div className="about-sec3-flex3 py-5">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={blockchainImg}></img>
                  </div>
                  <div className="sec3-about-blockflex">
                    <div className="sec3-about-heading">
                      Public Goods for a Shared Future
                    </div>
                    <p className="sec3-about-pera">
                      In our pursuit of advancing the blockchain community,
                      we're dedicated to offering public goods. Together, we'll
                      build bridges and fill gaps, ensuring a flourishing
                      ecosystem.
                    </p>
                  </div>
                </div>

                <div className="about-sec3-flex4 py-3">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={technology}></img>
                  </div>
                  <div className="sec3-about-blockflex">
                    <div className="sec3-about-heading">
                      Sustainability Meets Innovation
                    </div>
                    <p className="sec3-about-pera">
                      Novel ideas need nurturing. Lampros Labs recognizes this
                      and is committed to pooling the necessary resources,
                      ensuring groundbreaking projects aren't just dreams, but
                      tangible realities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-sec3-flex1">
              <div className="sec3-about-img1-div">
                <img className="sec3-about-img1" src={website}></img>
              </div>
              <div className="sec3-about-blockflex">
                <div className="sec3-about-heading">
                  Your Web3 Journey, Amplified
                </div>
                <p className="sec3-about-pera">
                  Web3 can be uncharted territory for many. That's why we're
                  committed to supporting developers on this transformative
                  journey. With comprehensive training, enticing monetary
                  incentives, and an uplifting community, we ensure your passion
                  remains ignited.
                </p>
              </div>
            </div>
          </section>

          <section
            className="section3-aboutUs pb-5 d-lg-none"
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Fade bottom duration={2000} distance="20px">
              <div className="sec3-img-heading">Our Ethos</div>
            </Fade>

            <div style={{ position: "relative" }}>
              <img src={aboutImg2} className="about-img2"></img>
            </div>
            <div className="py-5">
              <div className="about-sec3-flex1-res">
                <div className="sec3-about-blockflex">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={blockchain}></img>
                  </div>

                  <div className="px-4">
                    <div className="sec3-about-heading">
                      The Blockchain Mainstream Movement
                    </div>
                    <div className="sec3-about-pera">
                      Lampros Labs stands at the frontier of innovation. Our
                      mission? To propel all projects harnessing blockchain
                      technology to mainstream consciousness. When we talk about
                      blockchain, we're talking about the future, and we're here
                      to lead the charge.
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-sec3-flex1-res">
                <div className="sec3-about-blockflex">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={idea}></img>
                  </div>

                  <div className="px-4">
                    <div className="sec3-about-heading">
                      Opportunities Await
                    </div>
                    <div className="sec3-about-pera">
                      We're constantly on the lookout. Each day, established
                      blockchains present new chances to contribute, and we
                      ensure we're first in line to seize them.
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-sec3-flex1-res">
                <div className="sec3-about-blockflex">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={blockchainImg}></img>
                  </div>

                  <div className="px-4">
                    <div className="sec3-about-heading">
                      Public Goods for a Shared Future
                    </div>
                    <div className="sec3-about-pera sec3-about-pera2">
                      In our pursuit of advancing the blockchain community,
                      we're dedicated to offering public goods. Together, we'll
                      build bridges and fill gaps, ensuring a flourishing
                      ecosystem.
                    </div>
                  </div>
                </div>
              </div>

              <div className="about-sec3-flex1-res">
                <div className="sec3-about-blockflex">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={technology}></img>
                  </div>

                  <div className="px-4">
                    <div className="sec3-about-heading">
                      Sustainability Meets Innovation
                    </div>
                    <div className="sec3-about-pera">
                      Novel ideas need nurturing. Lampros Labs recognizes this
                      and is committed to pooling the necessary resources,
                      ensuring groundbreaking projects aren't just dreams, but
                      tangible realities.
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-sec3-flex1-res">
                <div className="sec3-about-blockflex">
                  <div className="sec3-about-img1-div">
                    <img className="sec3-about-img1" src={website}></img>
                  </div>

                  <div className="px-4">
                    <div className="sec3-about-heading">
                      Your Web3 Journey, Amplified
                    </div>
                    <div className="sec3-about-pera">
                      Web3 can be uncharted territory for many. That's why we're
                      committed to supporting developers on this transformative
                      journey. With comprehensive training, enticing monetary
                      incentives, and an uplifting community, we ensure your
                      passion remains ignited.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section4-aboutUs pb-sm-5"
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Fade bottom duration={2000} distance="20px">
              <h1 className="sec4-about-heading pb-4">Our Web3 Journey</h1>
            </Fade>

            <div className="d-flex d-lg-inline">
              <div className="d-none d-lg-inline">
                <img className="hackathon union" src={journey}></img>
              </div>

              <div className="col-2 d-lg-none journey-image-div">
                <img className="hackathon union1" src={journey1}></img>
              </div>

              <div className="about-sec4-main-box-flex">
                <Fade duration={1000} delay={500}>
                  <div className="about-box-sec4">
                    <div className="about-sec4-box-heading">
                      Hackathon Highlights
                    </div>
                    <div className="about-sec4-box-pera">
                      Lampros Labs stands tall in global hackathons, leaving
                      imprints across diverse blockchains.
                    </div>
                  </div>
                </Fade>
                <Fade duration={1000} delay={600}>
                  <div className="about-box-sec4">
                    <div className="about-sec4-box-heading">
                      Journey from Web2 to Web3
                    </div>
                    <div className="about-sec4-box-pera">
                      We've guided 30+ developers through the transformation,
                      turning passion into web3 expertise.
                    </div>
                  </div>
                </Fade>
                <Fade duration={1000} delay={700}>
                  <div className="about-box-sec4">
                    <div className="about-sec4-box-heading">
                      Opportunities at Lampros
                    </div>
                    <div className="about-sec4-box-pera">
                      For the new and the curious, Lampros is a beacon. Learn
                      and earn in the world of web3.
                    </div>
                  </div>
                </Fade>
                <Fade duration={1000} delay={800}>
                  <div className="about-box-sec4">
                    <div className="about-sec4-box-heading">
                      Global Workshops
                    </div>
                    <div className="about-sec4-box-pera">
                      Broaden your horizons. Our sessions offer both global
                      exposure and skill refinement.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default AboutUs;
