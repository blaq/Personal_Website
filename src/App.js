import React from 'react';
import pic from './Media/my_pic.jpg';
import obm from './Media/obm_logo.jpg';
import tb from './Media/tb_logo.png';
import wou from './Media/wou_logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './App.css';


function App() {
  return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <Row>
        <Col>
          <Row>
            <img src={pic} className="pic" alt="picture of myself" />
          </Row>
          <Row>
            <Col className="align-self-baseline item">
            <Row>
              <SocialIcon url="mailto:ethanblaq@gmail.com" bgColor="#c71610" fgColor="#f8f9fb" />
              <p className="social-tag text-truncate">ethanblaq@gmail.com</p>
            </Row>
            <Row>
              <SocialIcon url="http://www.linkedin.com/in/blaq" fgColor="#f8f9fb" />
              <p className="social-tag">linkedin.com/in/blaq</p>
            </Row>
            <Row>
              <SocialIcon url="http://www.github.com/blaq" bgColor="#03c04a" fgColor="#f8f9fb" />
              <p className="social-tag">github.com/blaq</p>
            </Row>
            <Row>
              <SocialIcon url="http://www.twitter.com/buddy_blaq" fgColor="#f8f9fb" />
              <p className="social-tag">@buddy_blaq</p>
            </Row></Col>
          </Row>
        </Col>
        <Col sm={8} id="tabs">
          <Container>
            <Row className="d-inline-flex">
              <Col className="item item-name">
                <h1>Ethan Black</h1>
              </Col>
            </Row>
          </Container>
          <div className="item item-tabs">
            <Container>
              <Row>
                <Col>
                  <h2 data-toggle="collapse" href="#about" role="button" aria-expanded="false" aria-controls="tabs">
                    About
                  </h2>
                </Col>
              </Row>
              <div id="about" className="collapse" data-parent="#tabs">
                <Row className="content">
                  <Col>
                    <p>
                      Professionally, I am a recent graduate that is preparing for an exciting career in technology. My near future goal is to work as a software engineer to learn how to work with others in a professional environment. My far reaching goals are to work with expanding tech such as blockchain, cloud computing, or something that hasn't arrived yet.
                    </p>
                    <p>
                      Casually, I like to run 5ks and play video games. My fastest 5k time is 16:23 and my favorite video game is Halo Reach. The artists I listen to the most are Radiohead, Portishead, and Bjork. When I have the time, I also programming on my own time. I will learn new languages and software to pride myself with creating something interesting.
                    </p>
                  </Col>
                  <Col lg={2}>
                    <p className="title"><span>Aspirations</span></p>
                    <ul>
                      <li>Adaptive</li>
                      <li>Decisive</li>
                      <li>Experimental</li>
                      <li>Initiative</li>
                      <li>Minimalist</li>
                      <li>Passionate</li>
                      <li>Respectful</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Container>
            <br></br>
            
            <Container>
              <Row>
                <Col>
                  <h2 data-toggle="collapse" href="#skills" role="button" aria-expanded="false" aria-controls="tabs">
                    Skills
                  </h2>
                </Col>
              </Row>
              <div id="skills" className="collapse" data-parent="#tabs">
                <Row className="content">
                  <Col lg={4}>
                    <h3 className="title"><span>Languages</span></h3>
                    <ul>
                      <li>C#</li>
                      <li>Python</li>
                      <li>Javascript - jQuery, Ajax</li>
                      <li>C++</li>
                      <li>C</li>
                      <li>HTML/CSS - Bootstrap</li>
                      <li>SQL</li>
                      <li>Json</li>
                    </ul>
                  </Col>
                  <Col lg={4}>
                    <h3 className="title"><span>Software</span></h3>
                    <ul>
                      <li>GitHub</li>
                      <li>.Net - ASP.NET MVC</li>
                      <li>Microsoft Azure</li>
                      <li>Amazon Web Services</li>
                      <li>Microsoft SQL Server</li>
                      <li>Linux - Ubuntu 18</li>
                      <li>Adobe - Premiere</li>
                    </ul>
                  </Col>
                  <Col lg={4}>
                    <h3 className="title"><span>Techniques</span></h3>
                    <ul>
                      <li>Agile - SCRUM</li>
                      <li>Version Control</li>
                      <li>Cloud Deployment</li>
                      <li>Network Monitoring</li>
                      <li>Harware - Installation, Servicing</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Container>
            <br></br>

            <Container>
              <Row>
                <Col>
                  <h2 data-toggle="collapse" href="#projects" role="button" aria-expanded="false" aria-controls="tabs">
                    Projects
                  </h2>
                </Col>
              </Row>
              <div id="projects" className="collapse" data-parent="#tabs">
                <Row className="content">
                  <Col>
                    <Row>
                    <Col>
                      <h3>Ok Bracket Manager</h3>
                      <h5>Western Oregon University - 2020</h5>
                    </Col>
                    <Col lg={2}>
                      <img src={obm} className="project-logo" alt="OBM Logo" />
                    </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>
                          A collaborative web application designed to manage multiple tournament brackets for a gaming event. Integrated with the Challonge.com API offering additional functionality including match starting, scoring, and algorithmic scheduling. Built with the ASP.NET web framework, using jQuery for responsive pages, and deployed on Microsoft Azure.
                        </p>
                        <a href="http://www.github.com/blaq/Ok_Computer">Github Repo</a>
                      </Col>
                      <Col lg={2}>
                        <p className="title"><span>Technology</span></p>
                        <ul>
                          <li>ASP.NET</li>
                          <li>Azure</li>
                          <li>C#</li>
                          <li>Javascript</li>
                          <li>HTML/CSS</li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>                
                    <Row>
                      <Col>
                    <h3>Personal Website</h3>
                    <h5>For Myself - 2020</h5>
                      </Col>
                      <Col lg={2}>
                        <img src={tb} className="project-logo" alt="TB Logo" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>
                          A personal project inteneded to represent my character and technical skills for the professional world as well as learn relevant software tools. This user interface was built with React.js and is deployed using Amazon Web Services Amplify.
                        </p>
                        <a href="http://www.github.com/blaq/Pablo_Honey">Github Repo</a>
                      </Col>
                      <Col lg={2}>
                        <p className="title"><span>Technology</span></p>
                        <ul>
                          <li>React.js</li>
                          <li>AWS</li>
                          <li>Javascript</li>
                          <li>HTML/CSS</li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
            <br></br>

            <Container>
              <Row>
                <Col>
                  <h2 data-toggle="collapse" href="#education" role="button" aria-expanded="false" aria-controls="tabs">
                    Education
                  </h2>
                </Col>
              </Row>
              <div id="education" className="collapse" data-parent="#tabs">
                <Row className="content">
                  <Col>
                    <h3>Western Oregon Univesity</h3>
                    <h5>Bachelor of Science in Computer Science</h5>
                    <h5>Minor in Mathematics</h5>
                    <h5>Graduated June 2020</h5>
                  </Col>
                  <Col md={4}>
                    <img src={wou} className="wou-logo" alt="WOU Logo" />
                  </Col>
                </Row>
                <br></br>
                <Row className="content">
                    <Col>
                      <h5 className="title"><span>Notable Coursework</span></h5>
                      <Row>
                        <Col sm={6}>
                          <ul>
                            <li>Blockchain Tech and Cryptocurrency</li>
                            <li>Concurrent Systems</li>
                            <li>Data Mining and Data Warehouse</li>

                            <li>Information Management</li>
                            <li>Microservice Architecture</li>
                            <li>Number Theory</li>
                          </ul>
                        </Col>
                      </Row>
                    </Col>
                </Row>
              </div>
            </Container>
            <br></br>

            <Container>
              <Row>
                <Col>
                  <h2 data-toggle="collapse" href="#experience" role="button" aria-expanded="false" aria-controls="tabs">
                    Experience
                  </h2>
                </Col>
              </Row>
              <div id="experience" className="collapse" data-parent="#tabs">
                <Row className="content">
                  <Col>
                    <h3>IT Technician Intern</h3>
                    <h5>Miller Technologies - McMinnville, Oregon</h5>
                    <Row>
                      <Col>
                        <ul>
                          <li>Monitored and maintained IT infrastructure for multiple businesses</li>
                          <li>Collaborated to develop and improve upon proprietary software</li>
                        </ul>  
                      </Col>
                      <Col md={2}>
                        <ul>
                          <li>May 2019</li>
                          <li>March 2020</li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <h3>Digital Media Center Tutor</h3>
                    <h5>Western Oregon University - Monmouth, Oregon</h5>
                    <Row>
                      <Col>
                        <ul>
                          <li>Tutored students and professors with Adobe and other digital media tools</li>
                          <li>Gave expert solutions on a diverse range of digital media formats</li>
                        </ul>  
                      </Col>
                      <Col md={2}>
                        <ul>
                          <li>April 2019</li>
                          <li>June 2020</li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <h3>Domino’s Delivery Driver</h3>
                    <h5>Talen Pizza - Albany, Oregon</h5>
                    <Row>
                      <Col>
                        <ul>
                          <li>Assisted in the opening of a new store and training new employees</li>
                          <li>Routed deliveries and exceeded customer expectations</li>
                        </ul>  
                      </Col>
                      <Col md={2}>
                        <ul>
                          <li>Sept 2016</li>
                          <li>Jan 2020</li>
                        </ul>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
    </Container>
  );
}

export default App;
