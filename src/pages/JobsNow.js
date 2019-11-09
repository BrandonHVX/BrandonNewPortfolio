import React from 'react';

import '../App.css';
import { Card,Nav, Navbar,NavDropdown, Row, Col, Container, Jumbotron, Button, ProgressBar } from 'react-bootstrap'
import Lottie from 'react-lottie'
import animationData from '../images/greeting.json'
import imacscreen from '../images/imac-screen.jpg'
import iphone from '../images/portrait_black.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Headroom from "react-headroom";
import NavBar from '../Navbar.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: '',
   
  }
}




function JobsNow() {
  return (
 

	  <div>
   
      <div className="App wrapper">
      <Headroom disableInlineStyles={true} >
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">B</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"> BACK</Nav.Link>

  
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</Headroom>
      
      </div>


 <body>


    <div id="login" tabindex="-1" role="dialog" aria-hidden="true" class="modal fade bd-example-modal-lg">
      <div role="document" class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
          </div>
          <div class="modal-body p-4 p-lg-5">
            <form action="#" class="login-form text-left">
              <div class="form-group mb-4">
                <label>Email address</label>
                <input type="email" name="email" placeholder="name@company.com" class="form-control"/>
              </div>
              <div class="form-group mb-4">
                <label>Password</label>
                <input type="password" name="password" placeholder="Min 8 characters" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="submit" value="Login" class="btn btn-primary"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="page-holder">
      <section class="hero shape-1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h2 class="hero-heading">Track your shows automatically</h2>
              <p class="lead mt-5 font-weight-light">With ShowTrackr you can track your favorite TV shows automatically, so you never loose track of your TV shows ever again. 🍿</p>
           
            </div>
            <div class="col-lg-6 d-flex d-lg-block">
              <div class="device-wrapper mx-auto">
                <div data-device="imac" data-orientation="portrait" data-color="black" class="device">
                  <div class="screen"><img src={imacscreen} alt="..." class="img-fluid"/></div>
                </div>
              </div>
            </div>
          </div>



          <div id="page-3" class= "page three">
					  	<h2 class="heading">Features</h2>
           
    
					  	<div class="row">
					  		<div class="col-md-6 mb-2">
									<div>
										<h4>   <FontAwesomeIcon icon={faCheckCircle} /> {""}Sign Up/ Login In</h4>
                  
									</div>
								</div>
              	<div class="col-md-6 mb-2 ">
									<div>
										<h4>   <FontAwesomeIcon icon={faCheckCircle} /> {""}Create and Update Profile</h4>
                  
									</div>
								</div>
                <div class="col-md-6 mb-2">
									<div>
										<h4>   <FontAwesomeIcon icon={faCheckCircle} /> {""}Make a Post</h4>
                  
									</div>
								</div>
                <div class="col-md-6 mb-2">
									<div>
										<h4>   <FontAwesomeIcon icon={faCheckCircle} /> {""}View all users profile</h4>
                  
									</div>
								</div>
                <div class="col-md-6 mb-2">
									<div>
										<h4>   <FontAwesomeIcon icon={faCheckCircle} /> {""}Sign Up/ Login In</h4>
                  
									</div>
								</div>
            
					  	</div>
					  </div>

        </div>
      </section>



  <section class="gallery" style={{backgroundColor: "red"}}>
        <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-lg-6">
              <h2 class="hero-heading">Track your shows automatically</h2>
              <p class="lead mt-5 font-weight-light">With ShowTrackr you can track your favorite TV shows automatically, so you never loose track of your TV shows ever again. 🍿</p>
           
            </div>
            <div class="col-lg-6 d-flex d-lg-block">
              <div class="device-wrapper mx-auto">
                <div data-device="iPhone7" data-orientation="portrait" data-color="black" class="device">
                  <div class="screen"><img  alt="..." class="img-fluid"/></div>
                </div>
              </div>
            </div>
          </div>


           
        </div>
      </section>





      <section class="features">  
      
             
        <div class="container">
      
        <div id="page-3" class= "page three">
					  	<h2 class="heading" style={{textAlign: 'center'}}>Technology</h2>
          
          <div class="row mt-5 text-center">
            <div class="col-lg-4">
              <div class="features-item mb-5 mb-lg-0">
                <div class="gradient-icon gradient-1"><i class="icon ion-ios-play"></i></div>
                <h3 class="h5">MongoDB</h3>
                <p>Track your favorite shows automatically without switching between apps.</p><a href="#" class="features-link">Learn more<i class="icon ion-ios-arrow-forward ml-2"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-item mb-5 mb-lg-0">
                <div class="gradient-icon gradient-2"><i class="icon ion-ios-cog"></i></div>
                <h3 class="h5">Express.Js</h3>
                <p>Get recommendations like never before, which are truly customized for your taste.</p><a href="#" class="features-link">Learn more<i class="icon ion-ios-arrow-forward ml-2"></i></a>
              </div>
            </div>
            <div class="col-lg-4 mb-5">
              <div class="features-item mb-5 mb-lg-0">
                <div class="gradient-icon gradient-3"><i class="icon ion-ios-notifications"></i></div>
                <h3 class="h5">React.Js</h3>
                <p>Receive smart notifications exactly at the right moments when you need them.</p><a href="#" class="features-link">Learn more<i class="icon ion-ios-arrow-forward ml-2"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-item mb-5 mb-lg-0">
                <div class="gradient-icon gradient-3"><i class="icon ion-ios-notifications"></i></div>
                <h3 class="h5">Node.Js</h3>
                <p>Receive smart notifications exactly at the right moments when you need them.</p><a href="#" class="features-link">Learn more<i class="icon ion-ios-arrow-forward ml-2"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-item mb-5 mb-lg-0">
                <div class="gradient-icon gradient-3"><i class="icon ion-ios-notifications"></i></div>
                <h3 class="h5">Bootstrap</h3>
                <p>Receive smart notifications exactly at the right moments when you need them.</p><a href="#" class="features-link">Learn more<i class="icon ion-ios-arrow-forward ml-2"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="features-item mb-5 mb-lg-0">
                <div class="gradient-icon gradient-3"><i class="icon ion-ios-notifications"></i></div>
                <h3 class="h5">Node.Js</h3>
                <p>Receive smart notifications exactly at the right moments when you need them.</p><a href="#" class="features-link">Learn more<i class="icon ion-ios-arrow-forward ml-2"></i></a>
              </div>
            </div>
          </div>


</div>
</div>


      </section>
     
      <section class="gallery" style={{backgroundColor: "red"}}>
        <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-lg-6">
              <h2 class="hero-heading">Track your shows automatically</h2>
              <p class="lead mt-5 font-weight-light">With ShowTrackr you can track your favorite TV shows automatically, so you never loose track of your TV shows ever again. 🍿</p>
           
            </div>
            <div class="col-lg-6 d-flex d-lg-block">
              <div class="device-wrapper mx-auto">
                <div data-device="iPhone7-2" data-orientation="portrait" data-color="black" class="device">
                  <div class="screen"><img  alt="..." class="img-fluid"/></div>
                </div>
                <div data-device="imac-2" data-orientation="portrait" data-color="black" class="device">
                  <div class="screen"><img  alt="..." class="img-fluid"/></div>
                </div>
              </div>
            </div>
          </div>


           
        </div>
      </section>



    </div>
   
    <footer class="ftco-footer ftco-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Projects</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Services</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Design</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Web Development</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Business Strategy</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Data Analysis</a></li>
                <li><a href="#"><span class="icon-long-arrow-right mr-2"></span>Graphic Design</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">

            <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
          </div>
        </div>
      </div>
    </footer>
    

  
  </body>
 
  </div>

  );
}

export default JobsNow;