import React from 'react';
import pic from './my-pic.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <br></br>
      <Row>
        <Col sm={4}>
          <Row>
            <img src={pic} class="pic" alt="picture of myself" />
          </Row>
          <Row>
            <a href="http://www.linkedin.com/in/blaq">linkedin.com/in/blaq</a>
          </Row>
          <Row>
            <a href="http://www.github.com/blaq">github.com/blaq</a>
          </Row>
          <Row>
            <a href="http://www.twitter.com/buddy_blaq">twitter.com/buddy_blaq</a>
          </Row>
        </Col>
        <Col sm={8}>
          <Row>
            <h1>Ethan Black</h1>
          </Row>

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
                <p>Aspirations</p>
                <ul>
                  <li>Adaptive</li>
                  <li>Decisive</li>
                  <li>Experimental</li>
                  <li>Humble</li>
                  <li>Motivated</li>
                  <li>Respectful</li>
                  <li>Passionate</li>
                </ul>
              </Col>
            </Row>
          </Container>
          
          <Container>
            <Row>
              <Col>
                <h2>Skills</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Languages</h3>
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
                <h3>Software</h3>
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
                <h3>Techniques</h3>
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

          <Container>
            <Row>
              <Col>
                <h2>Projects</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Ok Bracket Manager</h3>
                <h5>Western Oregon University - 2020</h5>
                <Row>
                  <Col sm={8}>
                    <p>
                      A collaborative web application designed to manage multiple tournament brackets for a gaming event. Integrated with the Challonge.com API offering additional functionality including match starting, scoring, and algorithmic scheduling. Built with the ASP.NET web framework, using jQuery for responsive pages, and deployed on Microsoft Azure.
                    </p>
                    <a href="http://www.github.com/blaq/Ok_Computer">Github Repo</a>
                  </Col>
                  <Col sm={2}>
                    <p>Technology</p>
                    <ul>
                      <li>ASP.NET MVC</li>
                      <li>Microsoft Azure</li>
                      <li>C#</li>
                      <li>Javascript</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
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
                    <p>Technology</p>
                    <ul>
                      <li>React.js</li>
                      <li>Amazon Web Services</li>
                      <li>Javascript</li>
                      <li>HTML/CSS</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

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
              </Col>
              <Col sm={2}>
                <p>-WOU PIC-</p>
                <p>Graduated</p>
                <p>June 2020</p>
              </Col>
              <Row>
                <Col>
                  <h5 align="center">Notable Coursework</h5>
                  <Row>
                    <Col sm={6}>
                      <ul>
                        <li>Blockchain Tech and Cryptocurrency</li>
                        <li>Concurrent Systems</li>
                        <li>Data Mining and Data Warehouse</li>
                      </ul>
                    </Col>
                    <Col sm={6}>
                      <ul>
                        <li>Information Management</li>
                        <li>Microservice Architecture</li>
                        <li>Number Theory</li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row>
          </Container>

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
                    <p>Period</p>
                    <ul>
                      <li>May 2019</li>
                      <li>March 2020</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
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
                    <p>Period</p>
                    <ul>
                      <li>April 2019</li>
                      <li>June 2020</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
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
                    <p>Period</p>
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
