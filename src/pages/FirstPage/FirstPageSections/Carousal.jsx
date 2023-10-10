import React from "react";
// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img2/ggera.jpg"),
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img2/ict.jpg"),
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img2/actio.jpg"),
    altText: "Slide 3",
    caption: "",
  },
  {
    src: require("assets/img2/sastha.jpg"),
    altText: "Slide 4",
    caption: "",
  },
  {
    src: require("assets/img2/nest.jpg"),
    altText: "Slide 5",
    caption: "",
  },
];
export default function Carousal() {
  return (
    <div>
      {" "}
      <div className="section">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
            <hr className="line-success" />
              <h1 className="text-white font-weight-light">Sector Expertise</h1>
              <p className="text-white mt-4"  style={{lineHeight:'1.7'}}>
                Our commitment to innovation extends across a spectrum of
                industries, where we have successfully delivered tailored IT
                solutions. From transforming edTech systems to optimizing
                financial operations and beyond.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Projects
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
