import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const today = new Date().toISOString().split("T")[0];

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  age: yup.number().transform((v, o) => o === "" ? undefined : v)
    .typeError("Age is required").required("Age is required")
    .min(18, "Minimum age is 18").max(40, "Maximum age is 40"),
  password: yup.string().required("Password is required")
    .min(6, "Minimum 6 characters").max(10, "Maximum 10 characters")
    .matches(/^\S+$/, "Spaces are not allowed"),
  phone: yup.string().required("Phone is required")
    .matches(/^\d{10}$/, "Enter 10 digit phone number"),
  email: yup.string()               
    .trim()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(\.[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)*\.[a-zA-Z]{2,}$/,
      "Enter a valid email (e.g. name@example.com)"
    ),
  country: yup.string().required("Select country"),
  state: yup.string().required("Select state"),
  cities: yup.string().required("Select one city"),
  address: yup.string().required("Address is required"),
  zip: yup.string().required("Pin code is required")
    .matches(/^\d{5,6}$/, "Enter valid pin code"),
  joiningDate: yup.string().required("Joining date is required")
    .test("before-today", "Date must be before today", (v) => !!v && v < today),
  gender: yup.string().required("Select gender"),
  hobbies: yup.array().min(2, "Select at least 2 hobbies").required(),
  profilePicture: yup.mixed().test("required", "Profile picture is required",
    (v) => v instanceof FileList && v.length > 0)
    .test("type", "Only JPG, PNG or GIF allowed", (v) =>
      !v?.length || ["image/jpeg", "image/png", "image/gif"].includes(v[0].type))
    .test("size", "Maximum file size is 6MB", (v) =>
      !v?.length || v[0].size <= 6 * 1024 * 1024),
  resume: yup.mixed().test("required", "Resume is required",
    (v) => v instanceof FileList && v.length > 0)
    .test("type", "Only PDF or Word files allowed", (v) =>
      !v?.length || /\.(pdf|doc|docx)$/i.test(v[0].name))
    .test("size", "Maximum file size is 8MB", (v) =>
      !v?.length || v[0].size <= 8 * 1024 * 1024),
  terms: yup.boolean().oneOf([true], "You must agree to terms"),
});


const defaults = {
  firstName: "Babita",
  lastName: "Danu",
  age: 24,
  password: "Babita@12",
  phone: "9876543210",
  email: "babita.danu@gmail.com",
  country: "India",
  state: "Uttarakhand",
  cities: "Bageshwar",
  address: "Near Bus Stand, Bageshwar, Uttarakhand",
  zip: "263642",
  joiningDate: "2026-01-15",
  gender: "Female",
  hobbies: ["Drawing", "Singing"],
  terms: true,
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
};

const cities = ["Ahmedabad", "Delhi", "Somnath", "Mumbai", "Bageshwar"];
const states = {
  India: ["Uttarakhand", "Uttar Pradesh", "Delhi", "Maharashtra"],
  Nepal: ["Bagmati", "Gandaki"],
  USA: ["California", "Texas"],
};

function RHFFormYup() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaults,
  });

  const country = watch("country");

  const submitForm = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Yup Form Data:", data);
      toast.success("Form submitted successfully!");
      setLoading(false);
      reset(emptyValues);
    }, 1500);
  };

  return (
    <Container className="my-4">
      <h3 className="mb-4">Registration Details (Yup Validation)</h3>

      <Form onSubmit={handleSubmit(submitForm)} noValidate>
        <fieldset disabled={loading} className="border-0 p-0">
          <Row>
            {[
              ["firstName", "First Name"],
              ["lastName", "Last Name"],
              ["phone", "Phone Number"],
              ["email", "Email Address"],
              ["zip", "Zip/Pin Code"],
            ].map(([name, label]) => (
              <Col md={6} key={name}>
                <Form.Group className="mb-3">
                  <Form.Label>{label}</Form.Label>
                  <Form.Control
                    type={name === "email" ? "email" : "text"}
                    {...register(name)}
                    isInvalid={!!errors[name]}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors[name]?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            ))}

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" {...register("age")} isInvalid={!!errors.age} />
                <Form.Control.Feedback type="invalid">{errors.age?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" {...register("password")} isInvalid={!!errors.password} />
                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Label>Country</Form.Label>
              <Form.Select {...register("country")} isInvalid={!!errors.country}>
                <option value="">Select country</option>
                {Object.keys(states).map((item) => <option key={item}>{item}</option>)}
              </Form.Select>
              <div className="text-danger small">{errors.country?.message}</div>
            </Col>

            <Col md={6}>
              <Form.Label>State</Form.Label>
              <Form.Select {...register("state")} isInvalid={!!errors.state}>
                <option value="">Select state</option>
                {(states[country] || []).map((item) => <option key={item}>{item}</option>)}
              </Form.Select>
              <div className="text-danger small">{errors.state?.message}</div>
            </Col>

            <Col md={6} className="mt-3">
              <Form.Label>Preferred City</Form.Label>
              <Form.Select {...register("cities")} isInvalid={!!errors.cities}>
                <option value="">Select city</option>
                {cities.map((item) => <option key={item}>{item}</option>)}
              </Form.Select>
              <div className="text-danger small">{errors.cities?.message}</div>
            </Col>

            <Col md={6} className="mt-3">
              <Form.Label>Complete Address</Form.Label>
              <Form.Control as="textarea" rows={3} {...register("address")} isInvalid={!!errors.address} />
              <div className="text-danger small">{errors.address?.message}</div>
            </Col>

            <Col md={6} className="mt-3">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control type="date" max={new Date(Date.now() - 86400000).toISOString().split("T")[0]} {...register("joiningDate")} isInvalid={!!errors.joiningDate} />
              <div className="text-danger small">{errors.joiningDate?.message}</div>
            </Col>

            <Col md={6} className="mt-3">
              <Form.Label className="d-block">Gender</Form.Label>
              {["Male", "Female", "Other"].map((item) => (
                <Form.Check inline type="radio" key={item} label={item} value={item} {...register("gender")} />
              ))}
              <div className="text-danger small">{errors.gender?.message}</div>
            </Col>

            <Col md={6} className="mt-3">
              <Form.Label className="d-block">Hobbies (minimum 2)</Form.Label>
              {["Drawing", "Singing", "Dancing"].map((item) => (
                <Form.Check inline type="checkbox" key={item} label={item} value={item} {...register("hobbies")} />
              ))}
              <div className="text-danger small">{errors.hobbies?.message}</div>
            </Col>

            <Col md={6} className="mt-3">
              <Form.Label>Profile Picture (JPG, PNG, GIF; max 6MB)</Form.Label>
              <Form.Control type="file" accept=".jpg,.jpeg,.png,.gif" {...register("profilePicture")} isInvalid={!!errors.profilePicture} />
              <div className="text-danger small">{errors.profilePicture?.message}</div>
            </Col>

            <Col md={6} className="mt-3">
              <Form.Label>Resume (PDF/Word; max 8MB)</Form.Label>
              <Form.Control type="file" accept=".pdf,.doc,.docx" {...register("resume")} isInvalid={!!errors.resume} />
              <div className="text-danger small">{errors.resume?.message}</div>
            </Col>
          </Row>

          <Form.Check
            type="checkbox"
            label="Agree to terms and conditions"
            {...register("terms")}
            isInvalid={!!errors.terms}
            className="mt-3 mb-1"
          />
          <div className="text-danger small mb-3">{errors.terms?.message}</div>

          <Button type="submit">
            {loading ? "Submitting..." : "Submit Form"}
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}

export default RHFFormYup;