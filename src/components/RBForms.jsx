import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function RBForms() {
  const initialData = {
    firstName: "Babita",
    lastName: "Danu",
    phone: "9876543210",
    email: "babita.danu@example.com",
    country: "India",
    state: "Uttarakhand",
    city: "Bageshwar",
    zip: "263642",
    address: "Kathayatbara, Bageshwar, Uttarakhand",
    favoriteColor: "#000000",
    joiningDate: "2026-10-01",
    age: "21",
    sex: "Female",
    hobbies: ["Drawing", "Singing"],
    resume: null,
    agree: true,
  };

  const [formData, setFormData] = useState(initialData);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked, type, files } = e.target;

    if (name === "hobbies") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((item) => item !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      ...formData,
      resume: formData.resume
        ? {
            fileName: formData.resume.name,
            fileType: formData.resume.type,
            fileSize: `${(formData.resume.size / 1024).toFixed(2)} KB`,
          }
        : null,
    });
  };

  const handleReset = () => {
    setFormData({ ...initialData });
    setSubmittedData(null);
  };

  return (
    <Container fluid className="bg-white min-vh-100 py-3">
      <Row className="justify-content-center">
        <Col xs={12}>
          <h4 className="fw-semibold mb-3">
            Registration Details (RB Basic Form Controls)
          </h4>

          <Card className="border-0">
            <Card.Body className="p-0">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Select Country</Form.Label>
                      <Form.Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select country</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Select State</Form.Label>
                      <Form.Select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select state</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Rajasthan">Rajasthan</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Select City</Form.Label>
                      <Form.Select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select city</option>
                        <option value="Bageshwar">Bageshwar</option>
                        <option value="Dehradun">Dehradun</option>
                        <option value="Haldwani">Haldwani</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lucknow">Lucknow</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Zip/Pin Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Favourite Color</Form.Label>
                      <Form.Control
                        type="color"
                        name="favoriteColor"
                        value={formData.favoriteColor}
                        onChange={handleChange}
                        title="Choose your favourite color"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Joining Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="joiningDate"
                        value={formData.joiningDate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Age: {formData.age}</Form.Label>
                      <Form.Range
                        name="age"
                        min="18"
                        max="60"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="d-block">Gender</Form.Label>

                      <div className="d-flex flex-wrap gap-3">
                        {["Male", "Female", "Other"].map((item) => (
                          <Form.Check
                            key={item}
                            type="radio"
                            label={item}
                            name="sex"
                            value={item}
                            checked={formData.sex === item}
                            onChange={handleChange}
                            required
                          />
                        ))}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="d-block">Hobbies</Form.Label>

                      <div className="d-flex flex-wrap gap-3">
                        {["Drawing", "Singing", "Dancing"].map((item) => (
                          <Form.Check
                            key={item}
                            type="checkbox"
                            label={item}
                            name="hobbies"
                            value={item}
                            checked={formData.hobbies.includes(item)}
                            onChange={handleChange}
                          />
                        ))}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Resume Upload</Form.Label>
                      <Form.Control
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                      />
                      <Form.Text className="text-muted">
                        Accepted formats: PDF, DOC, DOCX.
                      </Form.Text>

                      {formData.resume && (
                        <div className="mt-2">
                          Selected file: {formData.resume.name}
                        </div>
                      )}
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="agree"
                        label="Agree to terms and conditions"
                        checked={formData.agree}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button type="submit" variant="primary" className="me-2">
                      Submit form
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          {submittedData && (
            <Card className="mt-4 shadow-sm">
              <Card.Body>
                <h5 className="text-success mb-3">
                  Submitted Data (JSON)
                </h5>

                <pre className="bg-dark text-light p-3 rounded text-start text-break text-wrap">
                  {JSON.stringify(submittedData, null, 2)}
                </pre>

                <Button
                  variant="success"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      JSON.stringify(submittedData, null, 2)
                    )
                  }
                >
                  Copy JSON
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default RBForms;