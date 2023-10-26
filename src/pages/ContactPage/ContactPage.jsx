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
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import IndexNavbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

export default function ContactPage() {
  const Submit = async (e) => {
    e.preventDefault();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formData = {
      Email: email,
      Phone: phone,
      Message: message,
    };

    console.log("Form data collected:", formData);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwRA7TnUIdMVUBB6HMMxwildKD_7wnDhsKz6Y6XOzbNmBNNxw7dn1FFV7ySAJ-uJaID/exec",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);
      alert("Message sent successfully!");
    } catch (error) {
      console.log(error);
      alert("An error occurred while sending the message.");
    }
  };

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
                            <Input
                              placeholder="username@email.com"
                              id="email"
                              name="Email"
                              type="email"
                            />
                          </FormGroup>
                        </Col>

                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input
                              placeholder="000 000 0000"
                              id="phone"
                              name="Phone"
                              type="phone"
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input
                              placeholder="Write Here!"
                              id="message"
                              name="Message"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="submit"
                        onClick={(e) => Submit(e)}
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
