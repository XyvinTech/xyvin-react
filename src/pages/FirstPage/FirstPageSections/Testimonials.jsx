import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img2/nitha_test.png"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img2/anzari.png"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img2/raj.png"),
    altText: "Slide 3",
    caption: "",
  },
];

export default function Testimonials() {
  return (
    <div className="section section-nucleo-icons">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="12">
          <hr className="line-success " style={{margin: 'auto'}} />
            <h2 className="title">What our clients say about us</h2>
            <hr className="line-success " style={{margin: 'auto'}} />

            <h4 className="description py-5">
              Discover the experiences of businesses that have partnered with us
              to navigate the ever-evolving landscape of technology. In the
              words of our clients, explore the transformative impact our IT
              solutions have had on their operations, growth, and success. These
              testimonials reflect our commitment to excellence, innovation, and
              the seamless delivery of tailored solutions. We take pride in
              turning our clients' challenges into success stories. Hear
              firsthand what sets us apart and how we've become the trusted IT
              partner for a diverse range of businesses.
            </h4>
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="mx-auto">
            <UncontrolledCarousel
              items={carouselItems}
              indicators={false}
              autoPlay={false}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
