import React from 'react';
import pic from './Media/my-pic.svg';
import obm from './Media/obm_logo.svg';
import wou from './Media/wou_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './App.css';

function App() {
  document.title = "Ethan Black";
  return (
    <Container>
      <br></br>
      <Row>
        <Col sm={4}>
          <Row>
            <img src={pic} className="pic" alt="picture of myself" />
          </Row>
          <Row>
            <SocialIcon url="mailto:ethanblaq@gmail.com" bgColor="#c71610" />
            <p className="social-tag">ethanblaq@gmail.com</p>
          </Row>
          <Row>
            <SocialIcon url="http://www.linkedin.com/in/blaq" />
            <p className="social-tag">linkedin.com/in/blaq</p>
          </Row>
          <Row>
            <SocialIcon url="http://www.github.com/blaq" bgColor="#03c04a" />
            <p className="social-tag">github.com/blaq</p>
          </Row>
          <Row>
            <SocialIcon url="http://www.twitter.com/buddy_blaq" />
            <p className="social-tag">@buddy_blaq</p>
          </Row>
        </Col>
        <Col sm={8}>
          <Container>
            <Row>
              <Col>
                <h1>Ethan Black</h1>
              </Col>
            </Row>
          </Container>
          <br></br>

          <Container>
            <Row>
              <Col>
                <h2>About</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <p>
                  Professionally, I am a recent graduate that is preparing for an exciting career in technology. My near future goal is to work as a software engineer to learn how to work with others in a professional environment. My far reaching goals are to work with expanding tech such as blockchain, cloud computing, or something that hasn't arrived yet.
                </p>
                <p>
                  Casually, I like to run 5ks and play video games. My fastest 5k time is 16:23 and my favorite video game is Halo Reach. The artists I listen to the most are Radiohead, Portishead, and Bjork. When I have the time, I also programming on my own time. I will learn new languages and software to pride myself with creating something interesting.
                </p>
              </Col>
              <Col sm={2}>
                <p className="title"><span>Descriptors</span></p>
                <ul>
                  <li>Adaptive</li>
                  <li>Decisive</li>
                  <li>Experimental</li>
                  <li>Humility</li>
                  <li>Minimal</li>
                  <li>Passionate</li>
                  <li>Respectful</li>
                </ul>
              </Col>
            </Row>
          </Container>
          <br></br>
          
          <Container>
            <Row>
              <Col>
                <h2>Skills</h2>
              </Col>
            </Row>
            <Row>
              <Col>
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
              <Col>
                <h3 className="title"><span>Software</span></h3>
                <ul>
                  <li>GitHub</li>
                  <li>.Net - ASP.NET MVC</li>
                  <li>Microsoft Azure</li>
                  <li>Amazon Web Services</li>
                  <li>Microsoft SQL Server Management</li>
                  <li>Linux - Ubuntu 18</li>
                  <li>Adobe - Premiere</li>
                </ul>
              </Col>
              <Col>
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
          </Container>
          <br></br>

          <Container>
            <Row>
              <Col>
                <h2>Projects</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                <Col sm={8}>
                  <h3>Ok Bracket Manager</h3>
                  <h5>Western Oregon University - 2020</h5>
                </Col>
                <Col sm={2}>
                  <img src={obm} className="obm-logo" alt="OBM Logo" />
                </Col>
                </Row>
                <Row>
                  <Col sm={8}>
                    <p>
                      A collaborative web application designed to manage multiple tournament brackets for a gaming event. Integrated with the Challonge.com API offering additional functionality including match starting, scoring, and algorithmic scheduling. Built with the ASP.NET web framework, using jQuery for responsive pages, and deployed on Microsoft Azure.
                    </p>
                    <a href="http://www.github.com/blaq/Ok_Computer">Github Repo</a>
                  </Col>
                  <Col sm={2}>
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
                <h3>Personal Website</h3>
                <h5>For Myself - 2020</h5>
                <Row>
                  <Col sm={8}>
                    <p>
                      A personal project inteneded to represent my character and technical skills for the professional world as well as learn relevant software tools. This user interface was built with React.js and is deployed using Amazon Web Services Amplify.
                    </p>
                    <a href="http://www.github.com/blaq/Pablo_Honey">Github Repo</a>
                  </Col>
                  <Col sm={2}>
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
          </Container>
          <br></br>

          <Container>
            <Row>
              <Col>
                <h2>Education</h2>
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <h3>Western Oregon Univesity</h3>
                <h5>Bachelor of Science in Computer Science</h5>
                <h5>Minor in Mathematics</h5>
                <h5>Graduated June 2020</h5>
              </Col>
              <Col sm={2}>
                <img src={wou} className="wou-logo" alt="WOU Logo" />
              </Col>
            </Row>
            <br></br>
            <Row>
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
          </Container>
          <br></br>

          <Container>
            <Row>
              <Col>
                <h2>Experience</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>IT Technician Intern</h3>
                <h5>Miller Technologies - McMinnville, Oregon</h5>
                <Row>
                  <Col sm={8}>
                    <ul>
                      <li>Monitored and maintained IT infrastructure for multiple businesses</li>
                      <li>Collaborated to develop and improve upon proprietary software</li>
                    </ul>  
                  </Col>
                  <Col sm={2}>
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
                  <Col sm={8}>
                    <ul>
                      <li>Tutored students and professors with Adobe and other digital media tools</li>
                      <li>Gave expert solutions on a diverse range of digital media formats</li>
                    </ul>  
                  </Col>
                  <Col sm={2}>
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
                  <Col sm={8}>
                    <ul>
                      <li>Assisted in the opening of a new store and training new employees</li>
                      <li>Routed deliveries and exceeded customer expectations</li>
                    </ul>  
                  </Col>
                  <Col sm={2}>
                    <ul>
                      <li>Sept 2016</li>
                      <li>Jan 2020</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

        </Col>
      </Row>
    </Container>
  );
}

export default App;
