import React, { useRef, useEffect, useState } from "react";
import "../home/Home.scss";
import section1Img from "../../assets/images/section1-img.webp";
import section2Img from "../../assets/images/section2-img.webp";
import arrow from "../../assets/images/right-arrow.png";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import FAQ from "../../components/Faq";
import { question } from "../../components/FaqApi";
import Footer from "../footer/Footer";
import ScrollBtn from "../../components/ScrollBtn";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBeforeChange = (current, next) => {
    setActiveIndex(next);
  };
  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: true,
    speed: 300,
    centerPadding: "20px",
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    beforeChange: handleBeforeChange,
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <>
      <div className="lmplab-homepage-main-bg">
        <Navbar />
        <div className="scroll-top">
          <section
            className="homepage-secion1-main"
            ref={section1Ref}
            smooth={true}
            duration={600}
          >
            <div className="section1-bgImg-main">
              <img className="section1-bgImg" src={section1Img}></img>

              <div className="section1-position-main">
                <Fade bottom duration={1000} distance="20px">
                  <h1 className="section1-heading">The Beacon</h1>
                  <h1 className="section1-heading">
                    of <span className="color-change-text">Blockchain </span>
                  </h1>
                  <div className="home-subtitle">
                    Driving Mainstream Adoption, Empowering Developers, and
                    Cultivating the Future of Web3
                  </div>
                </Fade>
              </div>
            </div>
          </section>

          <section
            className="homepage-secion2-main "
            ref={section2Ref}
            smooth={true}
            duration={600}
            infinite
          >
            <img className="section2-Img" src={section2Img}></img>

            <div className="section2-flex">
              <div className="hide-for-mobile">
                <Fade bottom duration={3000} distance="30px">
                  <p className="section2-pera">
                    In the vibrant world of blockchain, Lampros Labs stands as a
                    beacon, illuminating the path for innovators, dreamers, and
                    builders. Founded with a profound vision to seamlessly merge
                    blockchain technology with mainstream applications, we've
                    steadily grown into a robust community hub.
                  </p>
                  <p className=" home-ml-pera">
                    Our ethos is rooted in fostering growth – both of the
                    individual and the collective. With each project we support,
                    every developer we guide, and each event we host, we inch
                    closer to a future where blockchain isn't just a buzzword,
                    but an integral part of our digital tapestry.
                  </p>{" "}
                </Fade>
              </div>

              <div className="hide-for-web">
                <Fade bottom duration={3000} distance="30px">
                  <p className="section2-pera1">
                    In the vibrant world of blockchain, Lampros Labs stands as a
                    beacon, illuminating the path for innovators, dreamers, and
                    builders. Founded with a profound vision to seamlessly merge
                    blockchain technology with mainstream applications, we've
                    steadily grown into a robust community hub.
                  </p>
                  <p className=" home-ml-pera1">
                    Our ethos is rooted in fostering growth – both of the
                    individual and the collective. With each project we support,
                    every developer we guide, and each event we host, we inch
                    closer to a future where blockchain isn't just a buzzword,
                    but an integral part of our digital tapestry.
                  </p>
                </Fade>
              </div>

              <Fade bottom duration={2000} distance="20px">
                <Link to="/about-Us">
                  <button id="button-7" className="section2-button">
                    Know more
                    <div id="dub-arrow">
                      <img src={arrow} />
                    </div>
                  </button>
                </Link>
              </Fade>
            </div>
          </section>

          <section
            className="homepage-secion3-main-template"
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            {/* <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="section3-card">
                      <h1 className="section3-card-title">
                        Hack, Build, Learn
                      </h1>

                      <p className="section3-card-desc">
                        Sharpen your skills with us. From high-octane hackathons
                        to intensive bootcamps and enlightening cohorts, Lampros
                        Labs is your ticket to deepening your web3 proficiency.
                      </p>
                      <Link to="/programs/hackathon">
                        <button class="section3-card-button" id="button-7">
                          <div id="dub-arrow">
                            <img src={arrow} />
                          </div>
                          Know more
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <div className="section3-card">
                      <h1 className="section3-card-title">
                        Hack, Build, Learn
                      </h1>

                      <p className="section3-card-desc">
                        Sharpen your skills with us. From high-octane hackathons
                        to intensive bootcamps and enlightening cohorts, Lampros
                        Labs is your ticket to deepening your web3 proficiency.
                      </p>
                      <Link to="/programs/hackathon">
                        <button class="section3-card-button" id="button-7">
                          <div id="dub-arrow">
                            <img src={arrow} />
                          </div>
                          Know more
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="section3-card">
                      <h1 className="section3-card-title">
                        Hack, Build, Learn
                      </h1>

                      <p className="section3-card-desc">
                        Sharpen your skills with us. From high-octane hackathons
                        to intensive bootcamps and enlightening cohorts, Lampros
                        Labs is your ticket to deepening your web3 proficiency.
                      </p>

                      <Link to="/programs/hackathon">
                        <button class="section3-card-button" id="button-7">
                          <div id="dub-arrow">
                            <img src={arrow} />
                          </div>
                          Know more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div> */}

            <Slider {...slickSettings}>
              <div className={activeIndex === 0 ? "slick-active" : ""}>
                <div className="section3-card">
                  <h1 className="section3-card-title">Hack, Build, Learn</h1>

                  <p className="section3-card-desc">
                    Sharpen your skills with us. From high-octane hackathons to
                    intensive bootcamps and enlightening cohorts, Lampros Labs
                    is your ticket to deepening your web3 proficiency.
                  </p>
                  <Link to="/programs/hackathon">
                    <button class="section3-card-button" id="button-7">
                      <div id="dub-arrow">
                        <img src={arrow} />
                      </div>
                      Know more
                    </button>
                  </Link>
                </div>
              </div>
              <div className={activeIndex === 1 ? "slick-active" : ""}>
                <div className="section3-card">
                  <h1 className="section3-card-title">From Labs to DAO</h1>

                  <p className="section3-card-desc">
                    The Lampros vision isn't just here and now. We're laying the
                    groundwork for a future Lampros DAO, where decentralization
                    meets purposeful action.
                  </p>
                  <Link to="/programs/hackathon">
                    <button class="section3-card-button" id="button-7">
                      <div id="dub-arrow">
                        <img src={arrow} />
                      </div>
                      Join Us
                    </button>
                  </Link>
                </div>
              </div>
              <div className={activeIndex === 3 ? "slick-active" : ""}>
                <div className="section3-card">
                  <h1 className="section3-card-title">
                    Workshops, Activities & More
                  </h1>

                  <p className="section3-card-desc">
                    Web3 is vast, and its potential is limitless. Through our
                    curated sessions, workshops, and activities, we aim to draw
                    in fresh talent, providing a launchpad for their web3
                    ambitions.
                  </p>
                  <Link to="/programs/hackathon">
                    <button class="section3-card-button" id="button-7">
                      <div id="dub-arrow">
                        <img src={arrow} />
                      </div>
                      Know more
                    </button>
                  </Link>
                </div>
              </div>
            </Slider>
          </section>

          <ScrollBtn
            section1Ref={section1Ref}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
          />
          <section className="homepage-secion4-main ">
            <Fade bottom duration={2000} distance="2px">
              <h1 className="sectio4-title">FAQS</h1>
            </Fade>
            <div className="faq-accordion-main">
              <Fade bottom duration={2000} distance="30px">
                {question.map((faq) => (
                  <FAQ
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </Fade>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
