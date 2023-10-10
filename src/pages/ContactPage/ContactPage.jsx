import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";
import IndexNavbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

export default function ContactPage() {
  return (
    <>
      <IndexNavbar />
      <div className="wrapper contact-p">
        
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h5 className="text-on-back">Contact</h5>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <Row>
                    
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="username@email.com" type="email" />
                          </FormGroup>
                        </Col>

                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="000 000 0000"  type="phone" />
                          </FormGroup>
                        </Col>
                      </Row>
                   
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Write Here!" type="text" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="button"
                      >
                        Send text
                      </Button>
                   
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                     TC 4/2118 -5, KV Towers <br />
                     Pattom, Trivandrum <br />
                      695004
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title"> Shoot us an email</h4>
                    <p>
                     Ashin Amanulla <br />
                      contact@xyvin.com <br />
                      
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}
