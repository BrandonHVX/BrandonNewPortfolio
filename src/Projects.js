import React, { useState } from "react";
import {
  Card,
  Row,
  Nav,
  Tab,
  Col,
  Container,
  Jumbotron,
  Button,
  Modal,
  ButtonToolbar
} from "react-bootstrap";
import projectpic from "./images/work-1.jpg";
import nyxlogo from "./images/nyx-news.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import salon from "./images/salon.svg";
import bta from "./images/bta.svg";
import jobsnow from "./images/JOBSNOW.png";
import ReactPlayer from "react-player";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const nav = {
  borderColor: "#00387d",

  textAlign: "center"
};

const text = {
  fontSize: "12px",
  marginTop: "20px",
  marginRight: "10px"
};

const play = {
  fontSize: "15px",
  marginTop: "10px",
  backgroundColor: "transparent",
  borderColor: "transparent",
  color: "white",
  textAlign: "center"
};

const title = {
  marginTop: "10px"
};

const jumbo = {
  backgroundColor: "transparent "
};

const navtabs = {
  display: "flex",
  borderColor: "black",
  justifyContent: "center"
};

const navlinks = {
  borderColor: "blue"
};

function Bands(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bands by Taylor Alexandria
        </Modal.Title>
      </Modal.Header>
      <div>
        <p>
          Company profile and Interview with Miami based fashion designer Taylor
          Alexandria.
        </p>
      </div>
      <Modal.Body>
        <div class="d-flex justify-content-center bg-secondary mb-3">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=FE5VhXSu3TU"
            playing
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Salon(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Bands by Taylor Alexandria
        </Modal.Title>
      </Modal.Header>
      <div>
        <p>
          Company profile and Interview with Miami based fashion designer Taylor
          Alexandria.
        </p>
      </div>
      <Modal.Body>
        <div class="d-flex justify-content-center bg-secondary mb-3">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=FE5VhXSu3TU"
            playing
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState("1");
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div style={text}>
        <Tab.Container defaultActiveKey="first">
          <Nav variant="pills" style={navtabs}>
            <Nav.Item>
              <Nav.Link eventKey="first">Web Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Video Production</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Digital Design</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Motion Graphics</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div class="row no-gutters py-4">
                <div class="col-md-6 lg-4 p-1">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage: `url(${jobsnow})`,
                      backgroundColor: "blue",
                      backgroundSize: "70%"
                    }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <span>
                        <h3>
                          <Link to="/jobsnow">
                            <img src={jobsnow} width={100} />
                          </Link>
                        </h3>
                      </span>
                      <p style={{ color: "white", fontSize: "15px" }}>
                        Career social networking site. Create job postings and
                        network with other users.
                      </p>{" "}
                      <span>Full Stack Web Development</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 lg-4 p-1">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage: `url(${nyxlogo})`,
                      backgroundSize: "100%",
                      backgroundColor: "black"
                    }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-2">
                      <span>
                        <h3>
                          <Link to="/nyxnews">
                            <img src={nyxlogo} width={200} />
                          </Link>
                        </h3>
                      </span>
                      <p style={{ color: "white", fontSize: "15px" }}>
                        Top Stories news blog site using the New York Times API
                      </p>{" "}
                      <span>Full Stack Web Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div class="row no-gutters py-4">
                <div class="col-md-4 p-1">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage: `url(${bta})`,
                      backgroundSize: "170%",
                      backgroundPosition: "cover"
                    }}
                  >
                    <div class="overlay-video"></div>
                    <div class="text text-center p-4">
                      <h3 style={{ color: "white" }}>
                        Bands by Taylor Alexandria
                      </h3>

                      <p>
                        <a onClick={() => setModalShow(true)}>
                          <FontAwesomeIcon
                            style={play}
                            icon={faPlayCircle}
                          ></FontAwesomeIcon>

                          <span style={play}> Play Video</span>
                        </a>
                      </p>

                      <div>
                        <Bands
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <p>
                        <span style={title}>Video Production</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4  p-1">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage: `url(${salon})`,
                      backgroundSize: "200%"
                    }}
                  >
                    <div class="overlay-video"></div>
                    <div class="text text-center p-4">
                      <h3 style={{ color: "white" }}>Solatto Salon</h3>

                      <a onClick={() => setModalShow(true)}>
                        <FontAwesomeIcon
                          style={play}
                          icon={faPlayCircle}
                        ></FontAwesomeIcon>

                        <span style={play}> Play Video</span>
                      </a>

                      <div>
                        <Bands
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <p>
                        <span style={title}>Video Production</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-md-4  p-1">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `url(${salon})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3 style={{ color: "white" }}>
                        Vibes & Views: Beat The Gym
                      </h3>

                      <p>
                        <a onClick={() => setModalShow(true)}>
                          <FontAwesomeIcon
                            style={play}
                            icon={faPlayCircle}
                          ></FontAwesomeIcon>

                          <span style={play}> Play Video</span>
                        </a>
                      </p>

                      <div>
                        <Bands
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </div>
                      <p>
                        <span style={title}>Video Production</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">Design</Tab.Pane>
            <Tab.Pane eventKey="fourth">Motion</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}
