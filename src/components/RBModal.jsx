import { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CloseButton from "react-bootstrap/CloseButton";

import { FaEnvelope } from "react-icons/fa";

function RBModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (email.trim() !== "") {
      alert("Thank you for subscribing!");
      setEmail("");
      setShow(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">
        React Bootstrap{" "}
        <span className="text-primary">Modal</span>
      </h2>

      {/* Subscribe Button */}
      <div className="py-2">
        <Button
          variant="primary"
          size="sm"
          onClick={handleShow}
        >
          <FaEnvelope className="me-2" />
          Subscribe
        </Button>
      </div>

      {/* Subscribe Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        keyboard
      >
        <Modal.Header className="py-2 px-3 border-bottom">
          <Modal.Title className="fs-4 fw-semibold">
            Don't miss out
          </Modal.Title>

          <CloseButton onClick={handleClose} />
        </Modal.Header>

        <Modal.Body className="px-3 py-3">
          <p className="small mb-3">
            Signup for our newsletter to stay up to date.
          </p>

          <Form onSubmit={handleSubscribe}>
            <InputGroup>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />

              <Button
                variant="outline-secondary"
                type="submit"
              >
                Subscribe
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RBModal;
