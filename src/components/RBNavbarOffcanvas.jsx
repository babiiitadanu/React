
import { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";

import {
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function RBNavbarOffcanvas() {
  const [showContact, setShowContact] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleContactClose = () => setShowContact(false);
  const handleLoginClose = () => setShowLogin(false);
  const handleSignupClose = () => setShowSignup(false);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="border rounded px-2">
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="bg-dark text-white px-2 py-1 fw-bold"
          >
            RB
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>

              <NavDropdown title="Company" id="company-dropdown">
                <NavDropdown.Item href="#about">
                  About Us
                </NavDropdown.Item>

                <NavDropdown.Item href="#team">
                  Our Team
                </NavDropdown.Item>

                <NavDropdown.Item href="#infrastructure">
                  Infrastructure
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#testimonials">
                  Testimonials
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div className="d-flex flex-wrap gap-2 mt-3 mt-lg-0">
              <Button
                variant="primary"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>

              <Button
                variant="outline-primary"
                onClick={() => setShowSignup(true)}
              >
                Sign Up
              </Button>

              <Button
                variant="dark"
                onClick={() => setShowContact(true)}
              >
                Contact
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Offcanvas */}
      <Offcanvas
        show={showContact}
        onHide={handleContactClose}
        placement="end"
        backdrop
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Contact Us</Offcanvas.Title>
          <CloseButton onClick={handleContactClose} />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <h5 className="fw-semibold">
            We are here to help you!
          </h5>

          <hr />

          <h6 className="fw-bold mb-3">Indixpert</h6>

          <div className="mb-4">
            <p className="black mb-2">
              <FaGlobe className="me-2" />
              Our Offices
            </p>

            <p className="mb-1">
              1: Hyderabad, Telangana, India
            </p>

            <p className="mb-0">
              2: Gurugram, Haryana, India
            </p>
          </div>

          <div className="mb-4">
            <p className="black mb-2">
              <FaEnvelope className="me-2" />
              Email
            </p>

            <p>contact@indixpert.com</p>
          </div>

          <div className="mb-4">
            <p className="black mb-2">
              <FaPhone className="me-2" />
              Phone
            </p>

            <p>(+91) 778 899 2897</p>
          </div>

        </Offcanvas.Body>
      </Offcanvas>

      {/* Login Offcanvas */}
      <Offcanvas
        show={showLogin}
        onHide={handleLoginClose}
        placement="end"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Login</Offcanvas.Title>
          <CloseButton onClick={handleLoginClose} />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              />
            </Form.Group>

            <Button variant="primary" type="button">
              Login
            </Button>

            <Button
              variant="secondary"
              className="ms-2"
              onClick={handleLoginClose}
            >
              Close
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sign Up Offcanvas */}
      <Offcanvas
        show={showSignup}
        onHide={handleSignupClose}
        placement="end"
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Sign Up</Offcanvas.Title>
          <CloseButton onClick={handleSignupClose} />
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create password"
              />
            </Form.Group>

            <Button variant="primary" type="button">
              Sign Up
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RBNavbarOffcanvas;