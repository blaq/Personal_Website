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
            <h5><a href="http://www.linkedin.com/in/blaq">linkedin.com/in/blaq</a></h5>
          </Row>
          <Row>
            <h5><a href="http://www.github.com/blaq">github.com/blaq</a></h5>
          </Row>
          <Row>
            <h5><a href="http://www.twitter.com/buddy_blaq">twitter.com/buddy_blaq</a></h5>
          </Row>
        </Col>
        <Col sm={8}>
          <Row>
            <Row>
              <h1>Ethan Black</h1>
            </Row>
          </Row>
          <Row>
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
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
