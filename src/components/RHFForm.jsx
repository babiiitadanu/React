import { useState } from "react";
import { useForm } from "react-hook-form";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

const today = new Date().toISOString().split("T")[0];

const yesterday = new Date(Date.now() - 86400000)
  .toISOString()
  .split("T")[0];

 
const initialValues = {
  firstName: "Babita",
  lastName: "Danu",
  age: "22",
  password: "Babita123",
  phone: "9876543210",
  email: "babita.danu@example.com",
  country: "India",
  state: "Uttarakhand",
  cities: "Bageshwar",
  address: "Kathayatbara, Bageshwar, Uttarakhand",
  zip: "263642",
  joiningDate: yesterday,
  gender: "Female",
  hobbies: ["Drawing", "Singing"],
  terms: true,
  profilePicture: undefined,
  resume: undefined,
};


const emptyValues = {
  firstName: "",
  lastName: "",
  age: "",
  password: "",
  phone: "",
  email: "",
  country: "",
  state: "",
  cities: "",
  address: "",
  zip: "",
  joiningDate: "",
  gender: "",
  hobbies: [],
  terms: false,
  profilePicture: undefined,
  resume: undefined,
};

const cities = [
  "Ahmedabad",
  "Delhi",
  "Somnath",
  "Mumbai",
  "Bageshwar",
];

const states = {
  India: ["Uttarakhand", "Uttar Pradesh", "Delhi", "Maharashtra"],
  Nepal: ["Bagmati", "Gandaki"],
  USA: ["California", "Texas"],
};

function RHFForm() {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    criteriaMode: "all",
  });

  const country = watch("country");

  const submitForm = (data) => {
    setLoading(true);
    setShowSuccess(false);

    setTimeout(() => {
      console.log("Form Data:", data);
      console.log("Profile Picture:", data.profilePicture?.[0] || null);
      console.log("Resume:", data.resume?.[0] || null);

      setLoading(false);

      // form ko blank karo
      reset(emptyValues);

      // success message dikhao
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <Container className="my-4">
      <h3 className="mb-4">Registration Details</h3>

      {showSuccess && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setShowSuccess(false)}
        >
          Form submitted successfully!
        </Alert>
      )}

      <Form onSubmit={handleSubmit(submitForm)} noValidate>
        <fieldset disabled={loading} className="border-0 p-0">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  {...register("age", {
                    required: "Age is required",
                    valueAsNumber: true,
                    min: { value: 18, message: "Minimum age is 18" },
                    max: { value: 40, message: "Maximum age is 40" },
                  })}
                  isInvalid={!!errors.age}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.age?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Maximum 10 characters",
                    },
                    pattern: {
                      value: /^\S+$/,
                      message: "Spaces are not allowed",
                    },
                  })}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Enter 10 digit phone number",
                    },
                  })}
                  isInvalid={!!errors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phone?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter valid email",
                    },
                  })}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select Country</Form.Label>
                <Form.Select
                  {...register("country", {
                    required: "Select country",
                    onChange: () => {
                      // country badalne par sirf state clear karo
                      setValue("state", "");
                    },
                  })}
                  isInvalid={!!errors.country}
                >
                  <option value="">Select country</option>
                  {Object.keys(states).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.country?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Select State</Form.Label>
                <Form.Select
                  {...register("state", {
                    required: "Select state",
                  })}
                  isInvalid={!!errors.state}
                >
                  <option value="">Select state</option>
                  {(states[country] || []).map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.state?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Preferred City</Form.Label>
                <Form.Select
                  {...register("cities", {
                    required: "Select one city",
                  })}
                  isInvalid={!!errors.cities}
                >
                  <option value="">Select city</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.cities?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Complete Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register("address", {
                    required: "Address is required",
                  })}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Zip/Pin Code</Form.Label>
                <Form.Control
                  {...register("zip", {
                    required: "Pin code is required",
                    pattern: {
                      value: /^\d{5,6}$/,
                      message: "Enter valid pin code",
                    },
                  })}
                  isInvalid={!!errors.zip}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Joining Date</Form.Label>
                <Form.Control
                  type="date"
                  max={yesterday}
                  {...register("joiningDate", {
                    required: "Joining date is required",
                    validate: (value) =>
                      value < today || "Date must be before today",
                  })}
                  isInvalid={!!errors.joiningDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.joiningDate?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Label className="d-block">Gender</Form.Label>
              {["Male", "Female", "Other"].map((item) => (
                <Form.Check
                  inline
                  type="radio"
                  key={item}
                  label={item}
                  value={item}
                  {...register("gender", {
                    required: "Select gender",
                  })}
                  isInvalid={!!errors.gender}
                />
              ))}
              <div className="text-danger small">
                {errors.gender?.message}
              </div>
            </Col>

            <Col md={6}>
              <Form.Label className="d-block">Hobbies</Form.Label>
              {["Drawing", "Singing", "Dancing"].map((item) => (
                <Form.Check
                  inline
                  type="checkbox"
                  key={item}
                  label={item}
                  value={item}
                  {...register("hobbies", {
                    validate: (value) =>
                      value.length >= 2 || "Select at least 2 hobbies",
                  })}
                  isInvalid={!!errors.hobbies}
                />
              ))}
              <div className="text-danger small">
                {errors.hobbies?.message}
              </div>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Profile Picture (JPG, PNG, GIF; max 6MB)
                </Form.Label>
                <Form.Control
                  type="file"
                  accept=".jpg,.jpeg,.png,.gif"
                  {...register("profilePicture", {
                    required: "Profile picture is required",
                    validate: {
                      type: (files) =>
                        !files[0] ||
                        ["image/jpeg", "image/png", "image/gif"].includes(
                          files[0].type
                        ) ||
                        "Only JPG, PNG or GIF allowed",
                      size: (files) =>
                        !files[0] ||
                        files[0].size <= 6 * 1024 * 1024 ||
                        "Maximum file size is 6MB",
                    },
                  })}
                  isInvalid={!!errors.profilePicture}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.profilePicture?.message ||
                    errors.profilePicture?.types?.type ||
                    errors.profilePicture?.types?.size}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Resume (PDF/Word; max 8MB)</Form.Label>
                <Form.Control
                  type="file"
                  accept=".pdf,.doc,.docx"
                  {...register("resume", {
                    required: "Resume is required",
                    validate: {
                      type: (files) =>
                        !files[0] ||
                        /\.(pdf|doc|docx)$/i.test(files[0].name) ||
                        "Only PDF or Word files allowed",
                      size: (files) =>
                        !files[0] ||
                        files[0].size <= 8 * 1024 * 1024 ||
                        "Maximum file size is 8MB",
                    },
                  })}
                  isInvalid={!!errors.resume}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.resume?.message ||
                    errors.resume?.types?.type ||
                    errors.resume?.types?.size}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Form.Check
            type="checkbox"
            label="Agree to terms and conditions"
            {...register("terms", {
              required: "You must agree to terms",
            })}
            isInvalid={!!errors.terms}
            className="mb-3"
          />

          <div className="text-danger small mb-2">
            {errors.terms?.message}
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Form"}
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default RHFForm;