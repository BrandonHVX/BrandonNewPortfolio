import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./Projects.js";
import ae from "./images/ae.svg";
import ps from "./images/ps.svg";
import ai from "./images/ai.svg";
import xd from "./images/xd.svg";
import pr from "./images/Pr.svg";
import rails from "./images/rails.svg";
import sass from "./images/sass.svg";
import node from "./images/node.svg";
import slack from "./images/slack.svg";
import git from "./images/git.svg";
import npm from "./images/npm.png";
import vue from "./images/vuejs.svg";
import js from "./images/js.svg";
import ruby from "./images/ruby.png";
import reactsvg from "./images/react.svg";
import html5 from "./images/html5.svg";
import projectpic from "./images/work-1.jpg";
import bootstrap from "./images/bootstrap.svg";
import about from "./images/about.jpg";
import brandonpic from "./images/BrandonPic.jpg";
import nyxlogo from "./images/nyx-logo.png";
import Lottie from "react-lottie";
import animationData from "./images/greeting.json";
import Scrollspy from "react-scrollspy";
import {
  Card,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Container,
  Jumbotron,
  Button,
  ProgressBar
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Headroom from "react-headroom";
import NavBar from "./Navbar.js";
import bgheader from "./images/slide-4.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import JobsNow from "./pages/JobsNow.js";
import { Parallax, Background } from "react-parallax";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: ""
  }
};

const image1 = `${bgheader}`;

const lottietitle = {
  backgroundColor: "transparent "
};

const text = {
  fontSize: "12px",
  marginTop: "20px"
};

const col = {
  marginTop: "20px"
};

const jumbo = {
  backgroundColor: "transparent "
};

function Main() {
  return (
    <div>
      <body>
        <Parallax className="custom-bg" strength={400}>
          <header id="first">
            <section class="hero-wrap js-fullheight">
              <Headroom disableInlineStyles={true}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id="collasible-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Nav>
                      <Nav.Link href="#deets">More deets</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Headroom>{" "}
              <div class="overlay"></div>{" "}
              <div class="header-content">
                {" "}
                <Lottie options={defaultOptions} width={"80vmin"} />
                <div class="inner">
                  <p>
                    I'm a software engineer in frontend and backend development
                    for complex scalable web apps. I write about software
                    development on my blog. Want to know how I may help your
                    project? Check out my project portfolio and online resume.
                  </p>
                  <p>
                    <Button href="#about-section" variant="primary">
                      Learn more
                    </Button>
                  </p>
                </div>{" "}
              </div>{" "}
            </section>
          </header>{" "}
          <Background>
            <img src={bgheader} style={{ backgroundSize: "200%" }} />
          </Background>
        </Parallax>

        <section
          class="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
          id="about-section"
        >
          <div class="container">
            <div class="row d-flex no-gutters">
              <div class="col-md-6 col-lg-6 d-flex">
                <div class="img-about img d-flex align-items-stretch">
                  <div class="overlay"></div>
                  <div
                    class="img d-flex align-self-stretch align-items-center"
                    style={{
                      backgroundImage: `url(${brandonpic})`,
                      borderRadius: "90%",
                      width: "300px",
                      height: "300px",
                      margin: "30px"
                    }}
                  ></div>
                </div>
              </div>

              <div class="col-md-6 col-lg-6 pl-md-5 py-5">
                <div class="row justify-content-start pb-3">
                  <div class="col-md-12 heading-section">
                    <h1 class="big">About</h1>
                    <h2 class="mb-4">About Me</h2>
                    <p>
                      Creative self-motivated professional with cross-functional
                      skills including expertise in digital media, video
                      production, full stack web development, graphic design,
                      marketing, project management and client engagement.
                    </p>
                    <ul class="about-info mt-4 px-md-0 px-2">
                      <li class="d-flex">
                        <span>Name:</span> <span>Brandon Gines </span>
                      </li>
                      <li class="d-flex">
                        <span>Date of birth:</span>{" "}
                        <span>November 28, 1989</span>
                      </li>
                      <li class="d-flex">
                        <span>Address:</span> <span>Miami, FL 33138 USA</span>
                      </li>
                      <li class="d-flex">
                        <span>Email:</span>{" "}
                        <span>
                          <a href="mailto: brandongines@gmail.com">
                            brandongines@gmail.com
                          </a>
                        </span>
                      </li>
                      <li class="d-flex">
                        <span>Phone: </span>{" "}
                        <span>
                          <a href="tel:310-651-1330">310-651-1330</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="counter-wrap  d-flex mt-md-3">
                  <div class="text">
                    <p>
                      <a href="#" class="btn btn-primary py-3 px-3">
                        Download CV
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="ftco-section ftco-no-pb goto-here" id="resume-section">
          <div class="container">
            <div class="col-md-12 heading-section text-center ">
              <h1 class="big big-2">Resume</h1>
              <h2 class="mb-4">Resume</h2>
              <p> </p>
            </div>
            <div class="row">
              <div class="col-sm-3 md-3">
                <nav id="navi">
                  <ul>
                    <li>
                      <a href="#page-1">Education</a>
                    </li>
                    <li>
                      <a href="#page-2">Experience</a>
                    </li>
                    <li>
                      <a href="#page-3">Skills</a>
                    </li>
                    <li>
                      <a href="#page-4">Expertise</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-md-9">
                <div id="page-1" class="page">
                  <h2 class="heading">Education</h2>
                  <div class="resume-wrap d-flex ">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faGraduationCap} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">AUG 2018 - OCT 2018</span>
                      <h2>Full Stack Web Development Program</h2>
                      <span class="position">Wyncode Academy - Miami, FL</span>
                      <p>
                        Certificate of compeletion certified by Florida
                        Department of Education.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="resume-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faGraduationCap} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">2002-2004</span>
                      <h2>Video Production Internship</h2>
                      <span class="position">
                        Stepstone Productions - St. Louis, MO
                      </span>
                      <p>
                        Certificate of compeletion certified by St. Louis Agency
                        on Training and Employment.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="resume-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faGraduationCap} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">2002-2004</span>
                      <h2>A.S. Mass Communication</h2>
                      <span class="position">St. Louis Community College</span>
                    </div>
                  </div>
                </div>

                <div id="page-2" class="page two">
                  <h2 class="heading">Experience</h2>
                  <div class="resume-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faCode} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">AUG 2019 - PRESENT</span>
                      <h2>Web Developer</h2>
                      <span class="position">
                        1st Take Youth Film Program - Miami, Florida
                      </span>
                      <p>
                        Web Developer for non-profit organization dedicated to
                        teaching kids film production.
                      </p>
                      <li class="mt-2">
                        Responsibile for development of new full stack web
                        application using MongoDB, Express, React and Node to
                        register new applicants and share program related
                        information.{" "}
                      </li>
                      <li class="mt-2">
                        Designing and coding custom HTML emails for
                        clients/in-house newsletters and invitations for
                        distribution through mailchimp and campaign monitor.
                      </li>
                    </div>
                  </div>
                  <div class="resume-wrap d-flex">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faPhotoVideo} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">OCT 2017- AUG 2019</span>
                      <h2>Digital Media Producer</h2>
                      <span class="position">Florida Film House</span>
                      <p>
                        Digital Media Producer for commerical film production
                        company specializing in creating video content for
                        national businesses and brands.
                      </p>
                      <li class="mt-2">
                        Produced commericals and video interviews used for
                        social media advertisments and marketing campaigns for
                        the Urban Film Festival.{" "}
                      </li>
                      <li class="mt-2">
                        Performed audio and video editing services in order to
                        develop content from raw input into a polished,
                        professional, and compelling final product.
                      </li>
                    </div>
                  </div>
                  <div class="resume-wrap d-flex ">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faFilm} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">SEPT 2013-2016</span>
                      <h2>Videographer & Editor</h2>
                      <span class="position">Rum Bum Film and HD Studios</span>
                      <h6>Miami, Florida</h6>
                      <p>
                        Videographer & Editor for live shows, music videos,
                        independent films, sporting events and documentries on
                        over 500+ productions.
                      </p>

                      <li class="mt-2">
                        After Effects Editor for Fox Sports 3D experience at the
                        2016 Daytona 500
                      </li>
                      <li class="mt-2">
                        On-Stage videographer during live stream broadcast of
                        the 2016 Three Points Music Festival in Miami, FL.
                      </li>
                    </div>
                  </div>
                  <div class="resume-wrap d-flex ">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faPalette} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">2007-2012</span>
                      <h2>Freelance Multimedia Artist</h2>
                      <span class="position">Independent Contractor</span>
                      <h6>Atlanta, GA / Miami, FL</h6>

                      <p>
                        Freelance Media artist working with business
                        professionals, small businesses and local brands
                        including lawyers, real estate agents, event promoters,
                        restaurants and local radio stations.
                      </p>
                      <li class="mt-2">
                        Communicated effectively with clients to develop custom
                        print advertisements and visual marketing material.
                      </li>
                      <li class="mt-2">
                        Projects included logos, flyers, business cards,
                        brochures, website banners, page layouts and video
                        commericial and interviews for small amd local
                        businesses.
                      </li>
                      <li class="mt-2">
                        Maintained management skills coupled with my customer
                        service skills, for increased retention rate of clients.
                      </li>
                    </div>
                  </div>
                  <div class="resume-wrap d-flex ">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">2004-2006</span>
                      <h2>Marketing Assistant</h2>
                      <span class="position">
                        The Palace Skating Rink and Family Entertainment Center
                      </span>
                      <h6>St. Louis, MO</h6>
                      <p>
                        Marketing Assistant for popluar roller skating rink
                        known for hosting birthday parties, live events and
                        various family related activities.
                      </p>
                      <li class="mt-2">
                        Assisted in planning, designing and distribution of
                        marketing materials including flyers, posters and
                        brochures for all events and programs.
                      </li>
                      <li class="mt-2">
                        Created weekly database of attendees used for surveys
                        and marketing research.
                      </li>
                      <li class="mt-2">
                        Provided general administrative and organizational
                        support; such as faxing documents to clients, copying,
                        filing, responding to emails, answering directed calls
                        and ordering products and services related to specific
                        events.
                      </li>
                    </div>
                  </div>

                  <div class="resume-wrap d-flex ">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="flaticon-ideas">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </span>
                    </div>
                    <div class="text pl-3">
                      <span class="date">2003-2004</span>
                      <h2>Radio Broadcasting Internship</h2>
                      <span class="position">
                        Clear Channel Communications - 100.3 The Beat
                      </span>
                      <h6>St. Louis, MO</h6>
                      <p>
                        Fall internship with local radio station 100.3 The Beat.
                        Learned and gained experience in broadcasting, live
                        production, marketing and promotions.
                      </p>
                      <li class="mt-2">
                        Assited with planning of promotional campagins to
                        connect with listeners and promote contests throughout
                        the community.
                      </li>

                      <li class="mt-2">
                        Perfomed office and administrative duties including,
                        answers phones, copying and filing paperwork
                      </li>

                      <li class="mt-2">
                        Responsible preparing scripts for on-air talent for
                        advertisements and providing the radio host with reading
                        and research material.
                      </li>
                    </div>
                  </div>
                </div>
                <div id="page-3" class="page three">
                  <h2 class="heading">Skills</h2>
                  <div>
                    <h6 style={styles}>Coding</h6>
                    <div class="row">
                      {" "}
                      <div class="col-md-6 ">
                        {" "}
                        <div class="progress-wrap">
                          <h3>HTML/CSS</h3>
                          <ProgressBar now={80} label={"80%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>JavaScript</h3>
                          <ProgressBar now={73} label={"73%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>Bootstrap</h3>
                          <ProgressBar now={80} label={"80%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>React.Js</h3>
                          <ProgressBar now={70} label={"70%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>Gatsby.Js</h3>
                          <ProgressBar now={78} label={"78%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>Ruby on Rails</h3>
                          <ProgressBar now={67} label={"67%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>Node.Js</h3>
                          <ProgressBar now={70} label={"75%"} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <h6>Creative Skills</h6>
                    <div class="row">
                      {" "}
                      <div class="col-md-6 ">
                        {" "}
                        <div class="progress-wrap">
                          <h3> Video Production</h3>
                          <ProgressBar now={95} label={"95%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3> Graphic Design</h3>
                          <ProgressBar now={90} label={"95%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>Motion Graphics</h3>
                          <ProgressBar now={78} label={"78%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>Brochure & Page Layout</h3>
                          <ProgressBar now={90} label={"90%"} />
                        </div>
                      </div>
                      <div class="col-md-6 ">
                        <div class="progress-wrap">
                          <h3>Web Design</h3>
                          <ProgressBar now={88} label={"88%"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="page-4" class="page four">
                  <h2 class="heading">Expertise</h2>
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="resume-wrap d-flex ">
                        <div class="text ">
                          <p>
                            <span class="position"> Proven Ability</span> in
                            full stack web development, UX/UI design for web
                            applications, video production and graphic design
                            for marketing campaigns
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="resume-wrap d-flex ">
                        <div class="text ">
                          <p>
                            <span class="position"> In depth-knowledge</span> in
                            graphic design for creating visual idenity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="resume-wrap d-flex ">
                        <div class="text ">
                          <p>
                            <span class="position">
                              {" "}
                              Comprehensive understanding and experience{" "}
                            </span>{" "}
                            in full stack web development, UX/UI design for web
                            applications, video production and graphic design
                            for marketing campaigns
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="resume-wrap d-flex ">
                        <div class="text ">
                          <p>
                            <span class="position"> Excellent</span> of full
                            stack web development, UX/UI design for web
                            applications, video production and graphic design
                            for marketing campaigns
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="resume-wrap d-flex ">
                        <div class="text ">
                          <p>
                            <span class="position"> Exceptional</span> of full
                            stack web development, UX/UI design for web
                            applications, video production and graphic design
                            for marketing campaigns
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="ftco-section ftco-project" id="projects-section">
          <div class="container-fluid px-md-0">
            <div class="row no-gutters justify-content-center pb-5">
              <div class="col-md-12 heading-section text-center ">
                <h1 class="big big-2">Projects</h1>
                <h2 class="mb-4">Portfolio</h2>
              </div>
            </div>
            <Projects />
          </div>
        </section>

        <footer class="ftco-footer ftco-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <p>Copyright &copy; 2019</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Main;
