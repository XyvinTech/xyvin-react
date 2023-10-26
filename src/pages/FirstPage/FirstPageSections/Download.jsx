
import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

export default function Download() {
  return (
    <div
      className="section section-download"
      data-background-color="black"
      id="download-section"
    >
      <img alt="..." className="path" src={require("assets/img/path1.png")} />
      <Container>
        <Row className="justify-content-md-center">
          <Col className="text-center" lg="8" md="12">
            <h2 className="title">
            Innovate. Integrate. Initiate.
            </h2>
            <h4 className="description">
            Revolutionize the way you do business. Our cutting-edge IT solutions are crafted to propel your enterprise into the future. Act now to unlock a new era of efficiency, innovation, and success.
            </h4>
          </Col>
          <Col className="text-center" lg="8" md="12">
          <Link to={"contact"} >
          <Button
              className="btn-round"
              color="info"
             
              role="button"
              size="lg"
            >
              Connect Now!
            </Button>
          </Link>  
          </Col>
        </Row>
        <br />
        <br />
       
      </Container>
    </div>
  );
}
