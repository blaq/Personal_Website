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
              <h2>About</h2>
            </Row>
            <Row>
              <Col sm={8}>
                <p>
                  Hello this is a para
                </p>
              </Col>
              <Col sm={2}>
                <ul>
                  <li>Organized</li>
                  <li>Motivated</li>
                </ul>
              </Col>
            </Row>
          </Container>
          
          <Container>
            <Row>
              <h2>Skills</h2>
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
              <h2>Projects</h2>
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

          
        </Col>
      </Row>
    </Container>
  );
}

export default App;
