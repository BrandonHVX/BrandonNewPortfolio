import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Projects from "./Projects.js";
import Content from "./Content.js";
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
import Headroom from "react-headroom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: ""
  }
};

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

function App() {
  return (
    <Router>
      <div className="App wrapper">
        <Content />
      </div>
    </Router>
  );
}

export default App;
