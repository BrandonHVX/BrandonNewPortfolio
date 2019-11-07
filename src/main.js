import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects.js'
import ae from './images/ae.svg'
import ps from './images/ps.svg'
import ai from './images/ai.svg'
import xd from './images/xd.svg'
import pr from './images/Pr.svg'
import rails from './images/rails.svg'
import sass from './images/sass.svg'
import node from './images/node.svg'
import slack from './images/slack.svg'
import git from './images/git.svg'
import npm from './images/npm.png'
import vue from './images/vuejs.svg'
import js from './images/js.svg'
import ruby from './images/ruby.png'
import reactsvg from './images/react.svg'
import html5 from './images/html5.svg'
import projectpic from './images/work-1.jpg'
import bootstrap from './images/bootstrap.svg'
import about from './images/about.jpg'
import brandonpic from './images/BrandonPic.jpg'
import nyxlogo from './images/nyx-logo.png'
import Lottie from 'react-lottie'
import animationData from './images/greeting.json'
import Scrollspy from 'react-scrollspy'
import { Card,Nav, Navbar,NavDropdown, Row, Col, Container, Jumbotron, Button, ProgressBar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {  faCode } from '@fortawesome/free-solid-svg-icons'
import {  faFilm } from '@fortawesome/free-solid-svg-icons'
import {  faPalette } from '@fortawesome/free-solid-svg-icons'
import {  faPhotoVideo } from '@fortawesome/free-solid-svg-icons'
import {  faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Headroom from 'react-headroom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import JobsNow from './JobsNow.js'


const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: '',
   
  }
}



const lottietitle = {
  backgroundColor: 'transparent '
}

const text = {
  fontSize: '12px',
  marginTop: '20px'
}

const col = {
  marginTop: '20px'
}

const jumbo = {
  backgroundColor: 'transparent '
}


function Main() {
  return (
 

	  <div>





  <body >	  

  <Headroom disableInlineStyles={true} >
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">B</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home-section">Home</Nav.Link>
      <Nav.Link href="#about-section">About</Nav.Link>
      <Nav.Link href="#resume-section">Resume</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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
</Headroom>

      <header id="first">
      <section class="hero-wrap js-fullheight">
      <div class="overlay"></div>
        <div class="header-content"> <Lottie options={defaultOptions} width={'80vmin'} />
            <div class="inner">
            
       
          <p>
            I'm a software engineer in frontend and backend development for
            complex scalable web apps. I write about software development on my
            blog. Want to know how I may help your project? Check out my project
            portfolio and online resume.
          </p>
          <p>
            <Button href="#about-section" variant="primary">Learn more</Button>
          </p>
       
            </div>
        </div>
      </section>
    </header>


    <section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
    	<div class="container">
    		<div class="row d-flex no-gutters">
    			<div class="col-md-6 col-lg-6 d-flex">
    				<div class="img-about img d-flex align-items-stretch">
    					<div class="overlay"></div>
              <div class="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${brandonpic})`,borderRadius: "90%", width: "300px", height: "300px", marginTop:"90px"
            }}>
	    				</div>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-6 pl-md-2">
    				<div class="row justify-content-start pb-3">
		          <div class="col-md-12 heading-section ">
		          	<h1 class="big">About</h1>
		            <h2 class="mb-4">About Me</h2>
		            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
		            <ul class="about-info mt-4 px-md-0 px-2">
		            	<li class="d-flex"><span>Name:</span> <span>Brandon Gines</span></li>
		            	<li class="d-flex"><span>Address:</span> <span>San Francisco CA 97987 USA</span></li>
                  <li class="d-flex"><span>Email:</span> <span>ronaldo@gmail.com</span></li>
		            	<li class="d-flex"><span>Phone: </span> <span>+1-2234-5678-9-0</span></li>
		            	<li class="d-flex"><span>Email:</span> <span>ronaldo@gmail.com</span></li>
		            	<li class="d-flex"><span>Phone: </span> <span>+1-2234-5678-9-0</span></li>
		            </ul>
		          </div>
		        </div>
	          <div class="counter-wrap  d-flex mt-md-3">
              <div class="text">
              	<p class="mb-4">
	                <span class="number" data-number="120">0</span>
	                <span>Project complete</span>
                </p>
                <p><a href="#" class="btn btn-primary py-3 px-3">Download CV</a></p>
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
		<section class="ftco-section" id="services-section">
    	<div class="container-fluid px-md-5">
    		<div class="row justify-content-center py-5 mt-5">
          <div class="col-md-12 heading-section text-center ">
          	<h1 class="big big-2">Skills & Technologies</h1>
            <h2 class="mb-4">Skills & Technologies</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
    		<div class="row">
					<div class="col-md-4 text-center d-flex ">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-analysis"></i>
							</span>
			
							<div class="desc">
								<h3 class="mb-5">Web Development</h3>
								
				
   
    <div class="row bg-faded">
        <div class="row-4 mx-auto text-center">
        <p>
				<span>
              <img src={js} width={40} alt="" />
            </span>
            <span>
              <img src={reactsvg} width={40} alt="" />
            </span>
      
						<span>
              <img src={node} width={40} alt="" />
            </span>
            <span>
              <img src={npm} width={40} alt="" />
            </span>
						<span>
              <img src={ruby} width={35} alt="" />
            </span>
            <span>
              <img src={rails} width={35} alt="" />
            </span>
</p>


        </div>
    </div>



	
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-flasks"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Video Production</h3>
								   
    <div class="row bg-faded">
        <div class="row-4 mx-auto text-center">
        <p>
				<span>
              <img src={pr} width={40} alt="" />
            </span>
   

</p>

        </div>
    </div>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-ideas"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Web Design</h3>

    <div class="row bg-faded">
        <div class="row-4 mx-auto text-center">
        <p>
				<span>
              <img src={html5} width={40} alt="" />
            </span>
            <span>
              <img src={reactsvg} width={40} alt="" />
            </span>
            <span>
              <img src={bootstrap} width={40} alt="" />
            </span>
            <span>
              <img src={sass} width={40} alt="" />
            </span>

</p>

        </div>
    </div>


			




								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</a>
					</div>

					<div class="col-md-4 text-center d-flex ">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-innovation"></i>
							</span>
							<div class="desc">
								<h3 class="mb-5">Graphic Design</h3>
								<div class="row bg-faded">
        <div class="row-4 mx-auto text-center">
        <p>
				<span>
              <img src={ps} width={40} alt="" />
            </span>
            <span>
              <img src={ai} width={40} alt="" />
            </span>
            <span>
              <img src={xd} width={40} alt="" />
            </span>
</p>


        </div>
    </div>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-ux-design"></i>
							</span>
							<div class="desc">
							<h3 class="mb-5">Motion Graphics</h3>
							<div class="row bg-faded">
        <div class="row-4 mx-auto text-center">
        <p>
				<span>
              <img src={ps} width={40} alt="" />
            </span>
						<span>
              <img src={ai} width={40} alt="" />
            </span>
			  <span>
              <img src={ae} width={40} alt="" />
            </span>

</p>
        </div>
    </div>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</a>
					</div>
					<div class="col-md-4 text-center d-flex ">
						<a href="#" class="services-1 shadow">
							<span class="icon">
								<i class="flaticon-idea"></i>
							</span>
							<div class="desc">
								<h3 class="mb-4">Photography</h3>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
							</div>
						</a>
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
					      <li><a href="#page-1">Education</a></li>
					      <li><a href="#page-2">Experience</a></li>
					      <li><a href="#page-3">Skills</a></li>
					      <li><a href="#page-4">Awards</a></li>
					    </ul>
					  </nav>
					</div>
					<div class="col-md-9">
					  <div id="page-1" class= "page">
					  	<h2 class="heading">Education</h2>
					    <div class="resume-wrap d-flex ">
					    	<div class="icon d-flex align-items-center justify-content-center">
					    		<span class="flaticon-ideas"><FontAwesomeIcon icon={faGraduationCap} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">AUG 2018 - OCT 2018</span>
		    					<h2>Full Stack Web Development Program</h2>
		    					<span class="position">Wyncode Academy</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	    					</div>
	    				</div>
	    				<div class="resume-wrap d-flex">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faGraduationCap} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2002-2004</span>
		    					<h2>Video Production Internship</h2>
		    					<span class="position">Stepstone Productions</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
              <div class="resume-wrap d-flex">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faGraduationCap} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2002-2004</span>
		    					<h2>A.S. Graphic Design</h2>
		    					<span class="position">St. Louis Community College</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    		
					  </div>

					  <div id="page-2" class= "page two">
					  	<h2 class="heading">Experience</h2>
					    <div class="resume-wrap d-flex">
					    	<div class="icon d-flex align-items-center justify-content-center">
					    	<span class="flaticon-ideas"><FontAwesomeIcon icon={faCode} /></span>
					    	
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">AUG 2019 - PRESENT</span>
		    					<h2>Web Developer</h2>
		    					<span class="position">1st Take Youth Film Program</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    				<div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faPhotoVideo} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">OCT 2017- AUG 2019</span>
		    					<h2>Media Producer</h2>
		    					<span class="position">Florida Film House</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    				<div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faFilm} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">SEPT 2010-2016</span>
		    					<h2>Vidographer & Editor</h2>
		    					<span class="position">Rum Bum Film and HD Studios</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    				<div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faPalette} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2007-2012</span>
		    					<h2>Freelance Graphic Artist</h2>
		    					<span class="position">Gines Multimedia Services</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    				<div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faBriefcase} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2004-2006</span>
		    					<h2>Marketing Assistant</h2>
		    					<span class="position">The Palace Family and Entertainment Center</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
              <div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faBriefcase} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2003-2004</span>
		    					<h2>Video Production Intership</h2>
		    					<span class="position">Stepstone Productions</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
              <div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
                <span class="flaticon-ideas"><FontAwesomeIcon icon={faBriefcase} /></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2003-2004</span>
		    					<h2>Promotions Internship</h2>
		    					<span class="position">100.3 The Beat</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    			
					  </div>




					  <div id="page-3" class= "page three">
					  	<h2 class="heading">Expertise</h2>
      
    
					  	<div class="row">
					  		<div class="col-md-6 ">
									<div class="progress-wrap">
										<h3>Photoshop</h3>
                    <ProgressBar now={60} label={'60%'}  />
									</div>
								</div>
                <div class="col-md-6 ">
									<div class="progress-wrap">
										<h3>Photoshop</h3>
                    <ProgressBar now={60} label={'60%'}  />
									</div>
								</div>
                <div class="col-md-6 ">
									<div class="progress-wrap">
										<h3>Photoshop</h3>
                    <ProgressBar now={60} label={'60%'}  />
									</div>
								</div>
                <div class="col-md-6 ">
									<div class="progress-wrap">
										<h3>Photoshop</h3>
                    <ProgressBar now={60} label={'60%'}  />
									</div>
								</div>
                <div class="col-md-6 ">
									<div class="progress-wrap">
										<h3>Photoshop</h3>
                    <ProgressBar now={60} label={'60%'}  />
									</div>
								</div>
                <div class="col-md-6 ">
									<div class="progress-wrap">
										<h3>Photoshop</h3>
                    <ProgressBar now={60} label={'60%'}  />
									</div>
								</div>
                <div class="col-md-6 ">
							

  <div class="resume-wrap d-flex ">
					   
					    	<div class="text ">
		    					<span class="date">2014-2015</span>
		    					<h2>Top 10 Web Developer</h2>
		    					<span class="position">Cambridge University</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	    					</div>
	    				</div>



              
								</div>
							
					  	</div>
					  </div>
					  <div id="page-4" class= "page four">
					    <h2 class="heading">Awards</h2>
					    <div class="resume-wrap d-flex ">
					    	<div class="icon d-flex align-items-center justify-content-center">
					    		<span class="flaticon-ideas"></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2014-2015</span>
		    					<h2>Top 10 Web Developer</h2>
		    					<span class="position">Cambridge University</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
	    					</div>
	    				</div>
	    				<div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
					    		<span class="flaticon-ideas"></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2014-2015</span>
		    					<h2>Top 5 LeaderShip Exellence Winner</h2>
		    					<span class="position">Cambridge University</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    				<div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
					    		<span class="flaticon-ideas"></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2014-2015</span>
		    					<h2>Top 4 Web Tester</h2>
		    					<span class="position">Cambridge University</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		    				</div>
	    				</div>
	    				<div class="resume-wrap d-flex ">
	    					<div class="icon d-flex align-items-center justify-content-center">
					    		<span class="flaticon-ideas"></span>
					    	</div>
					    	<div class="text pl-3">
		    					<span class="date">2014-2015</span>
		    					<h2>Art &amp; Creative Director</h2>
		    					<span class="position">Cambridge University</span>
		    					<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <Projects />
    	
			</div>
		</section>

    <section class="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div class="container">
      	<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h1 class="big big-2">Contact</h1>
            <h2 class="mb-4">Contact Me</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div class="row d-flex contact-info mb-5">
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-map-signs"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Address</h3>
		            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
		          </div>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-phone2"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Contact Number</h3>
		            <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
	            </div>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-paper-plane"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Email Address</h3>
		            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
		          </div>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate">
          	<div class="align-self-stretch box text-center p-4 shadow">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-globe"></span>
          		</div>
          		<div>
	          		<h3 class="mb-4">Website</h3>
		            <p><a href="#">yoursite.com</a></p>
	            </div>
	          </div>
          </div>
        </div>

        <div class="row no-gutters block-9">
          <div class="col-md-6 order-md-last d-flex">
            <form action="#" class="bg-light p-4 p-md-5 contact-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject"/>
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"/>
              </div>
            </form>
          
          </div>

          <div class="col-md-6 d-flex">
          	<div class="img" ></div>
          </div>
        </div>
      </div>
    </section>
		

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

export default Main;