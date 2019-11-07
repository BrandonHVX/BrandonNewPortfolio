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
import nyxlogo from "./images/nyx-logo.png";
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

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <div>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
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
                      backgroundColor: "blue"
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
                    style={{ backgroundImage: `url(${nyxlogo})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <span>
                        <h3>
                          <Link to="/jobsnow">
                            <img src={jobsnow} width={90} />
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

                <div class="col-md-6 lg-4 p-1">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `url(${projectpic})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="project img ftco-animate d-flex justify-content-center align-items-center">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="project img ftco-animate d-flex justify-content-center align-items-center">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="project img ftco-animate d-flex justify-content-center align-items-center">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div class="row no-gutters py-4">
                <div class="col-md-4">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `url(${bta})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Bands by Taylor Alexandria</a>
                      </h3>
                      <span>
                        Business Profile for Fashion Designer Taylor Alexandria
                      </span>
                      <ButtonToolbar>
                        <Button
                          variant="primary"
                          onClick={() => setModalShow(true)}
                        >
                          Launch vertically centered modal
                        </Button>

                        <MyVerticallyCenteredModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </ButtonToolbar>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `url(${salon})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div
                    class="project img d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: `url(${projectpic})` }}
                  >
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="project img ftco-animate d-flex justify-content-center align-items-center">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="project img ftco-animate d-flex justify-content-center align-items-center">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="project img ftco-animate d-flex justify-content-center align-items-center">
                    <div class="overlay"></div>
                    <div class="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
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
