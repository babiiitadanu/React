import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  Alert,
} from "react-bootstrap";


const defaultValues = {
  firstName: "Babita",
  lastName: "Danu",
  username: "babita_danu",
  city: "Bageshwar",
  state: "Uttarakhand",
  zip: "263642",
  file: null,
  agree: true,
};


const emptyValues = {
  firstName: "",
  lastName: "",
  username: "",
  city: "",
  state: "",
  zip: "",
  file: null,
  agree: false,
};

function FormikForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [fileKey, setFileKey] = useState(0);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    zip: Yup.string().required("Required"),
    agree: Yup.boolean().oneOf(
      [true],
      "Please agree to the terms"
    ),
  });

  return (
    <div className="container-fluid p-4">
      <h5 className="fw-bold mb-2">
        Formik Form Validation
      </h5>

      {showSuccess && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setShowSuccess(false)}
        >
          Form submitted successfully!
        </Alert>
      )}

      <Formik
        initialValues={defaultValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Values:", values);
          console.log("First Name:", values.firstName);
          console.log("Last Name:", values.lastName);
          console.log("Username:", values.username);
          console.log("City:", values.city);
          console.log("State:", values.state);
          console.log("Zip:", values.zip);
          console.log("File:", values.file);
          console.log("Agree:", values.agree);

          // success message 
          setShowSuccess(true);

         
          resetForm({ values: emptyValues });

          
          setFileKey((prev) => prev + 1);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
          setFieldValue,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="g-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.firstName && !!errors.firstName
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.lastName && !!errors.lastName
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      name="username"
                      placeholder="Username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={
                        touched.username && !!errors.username
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    name="city"
                    placeholder="City"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.city && !!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    name="state"
                    placeholder="State"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.state && !!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    name="zip"
                    placeholder="Zip"
                    value={values.zip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={touched.zip && !!errors.zip}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Group>
                  <Form.Label>File / Resume</Form.Label>
                  <Form.Control
                    key={fileKey}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(event) =>
                      setFieldValue(
                        "file",
                        event.currentTarget.files[0] || null
                      )
                    }
                  />
                </Form.Group>
              </Col>

              <Col xs={12}>
                <Form.Check
                  type="checkbox"
                  name="agree"
                  label="Agree to terms and conditions"
                  checked={values.agree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.agree && !!errors.agree}
                  feedback={errors.agree}
                  feedbackType="invalid"
                />
              </Col>

              <Col xs={12}>
                <Button type="submit" variant="primary">
                  Submit form
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;