import React from "react";
// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

export default function Features() {

  
  return (
    <div>
      <section className="section section-lg section-safe">
        <img alt="..." className="path" src={require("assets/img/path5.png")} />
        <Container>
          <Row className="row-grid justify-content-between">
            <Col md="5">
              <img
                alt="..."
                className="img-res floating"
                src={require("assets/img2/programmer.jpg")}
              />
              <Card className="card-stats bg-danger">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">100%</CardTitle>
                      <p className="card-category text-white">Professional</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-info">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">500+</CardTitle>
                      <p className="card-category text-white">
                        Satisfied customers
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="card-stats bg-default">
                <CardBody>
                  <div className="justify-content-center">
                    <div className="numbers">
                      <CardTitle tag="p">20 +</CardTitle>
                      <p className="card-category text-white">Business</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <div className="px-md-5">
                <hr className="line-success" />
                <h1>What We Do</h1>
                <p className="fs-1" style={{lineHeight:'1.7'}}>
                  Empower your business with our comprehensive suite of
                  cutting-edge services. From strategic consulting to seamless
                  execution, we're committed to elevating your digital presence
                  and driving success. Discover a partnership that goes beyond
                  solutions — a partnership that transforms challenges into
                  opportunities. Explore our services and unlock the full
                  potential of innovation for your enterprise.
                </p>
                <Row>
                  <Col>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-laptop" />
                          </div>
                          <div className="ml-3">
                            <h6>Web Development</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-mobile" />
                          </div>
                          <div className="ml-3">
                            <h6>Mobile App Development</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>IT Consultation</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Col>

                  <Col>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-shape-star" />
                          </div>
                          <div className="ml-3">
                            <h6>Branding</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-cloud-upload-94" />
                          </div>
                          <div className="ml-3">
                            <h6>Cloud Engineering</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-refresh-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Dev Ops</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
