import React, { Component } from 'react';
import { Container, Row, Col, Media, Alert, Badge, Button, Breadcrumb } from "react-bootstrap"

class App extends Component {
  render(){
    return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item ahref="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item ahref="/page">Page</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          <Media>
            <img 
            width={64}
            height={64}
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" 
            alt="Sate Klatak"
            className="mr-3"></img>
            <Media.Body>
              <h5>Sate Klatak</h5>
              <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.
              </p>
            </Media.Body>
          </Media>
        </Col>
        <Col>
        <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Sate Klatak Juga</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            </p>
        </Media.Body>
        </Media>
        </Col>
      </Row>
      <Row>
      <Col>
        <Alert variant="primary">Anda Telah Berhasil Login</Alert>
      </Col>
      <Col>
        <h3>
        Login Anda Telah <Badge variant="secondary">Success</Badge>
        </h3>
        <Button variant="primary">Profile <Badge variant="light-8">8</Badge></Button>
      </Col>
      <Col>
        <Button variant="danger">Expired</Button>
      </Col>
      </Row>
    </Container>
  );
}}

export default App;