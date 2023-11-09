import React, { useRef } from "react";
import "../home/Home.scss";
import section1Img from "../../assets/images/section1-img.png";
import section2Img from "../../assets/images/section2-img.png";
import arrow from "../../assets/images/right-arrow.png";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import FAQ from "../../components/Faq";
import { question } from "../../components/FaqApi";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <div className="lmplab-homepage-main-bg">
        <Navbar />
        <div className="scroll-top">
          <section
            className="homepage-secion1-main"
            smooth={true}
            duration={200}
          >
            <div className="section1-bgImg-main">
              <img className="section1-bgImg" src={section1Img}></img>

              <div className="section1-position-main">
                <h1 className="section1-heading">The Beacon</h1>
                <h1 className="section1-heading">
                  of <span className="color-change-text">Blockchain </span>
                </h1>

                <div className="home-subtitle">
                  Driving Mainstream Adoption, Empowering Developers, and
                  Cultivating the Future of Web3
                </div>
              </div>
            </div>
          </section>

          <section
            className="homepage-secion2-main "
            smooth={true}
            duration={200}
          >
            <img className="section2-Img" src={section2Img}></img>
            <div className="section2-flex">
              <div className="hide-for-mobile">
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
                  closer to a future where blockchain isn't just a buzzword, but
                  an integral part of our digital tapestry.
                </p>
              </div>
              <div className="hide-for-web">
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
                  closer to a future where blockchain isn't just a buzzword, but
                  an integral part of our digital tapestry.
                </p>
              </div>

              <Link to="/about-Us">
                <button id="button-7" className="section2-button">
                  <div id="dub-arrow">
                    <img src={arrow} />
                  </div>
                  Know more
                </button>
              </Link>
            </div>
          </section>

          <section
            className="homepage-secion3-main-template"
            smooth={true}
            duration={200}
          >
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="section3-card">
                    <h1 className="section3-card-title">Hack, Build, Learn</h1>

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
                    <h1 className="section3-card-title">Hack, Build, Learn</h1>

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
                    <h1 className="section3-card-title">Hack, Build, Learn</h1>

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
            </div>
          </section>

          <section
            className="homepage-secion4-main "
            smooth={true}
            duration={200}
          >
            <h1 className="sectio4-title">FAQS</h1>
            <div className="faq-accordion-main">
              {question.map((faq) => (
                <FAQ
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
