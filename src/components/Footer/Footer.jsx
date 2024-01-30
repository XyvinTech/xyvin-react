import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import logo from '../../assets/img2/logo.png'
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="6" className="d-flex align-items-center justify-content-center ">
            <img src={logo} alt="logo" className="logo-footer"/>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Career
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register-page" tag={Link}>
                  Trainings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  Internships
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="/">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          {/* <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-twitter" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Follow us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-facebook-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Like us
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-dribbble" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}
