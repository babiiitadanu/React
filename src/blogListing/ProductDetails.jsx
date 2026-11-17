
import { useParams, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import blogs from "../data/blogs";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <Container className="py-5 text-center">
        <h3>Blog Not Found!</h3>
        <Button variant="dark" onClick={() => navigate("/blog-listing")}>
          Back to Blogs
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6} className="mb-4">
          <Card className="border-0 shadow-sm overflow-hidden">
            <Card.Img
              src={blog.image}
              alt={blog.title}
              style={{
                height: "400px",
                objectFit: "cover",
              }}
            />
          </Card>
        </Col>

        <Col md={6}>
          <Badge bg="dark" className="mb-3">
            {blog.category}
          </Badge>

          <h2 className="fw-bold mb-3">{blog.title}</h2>

          <p className="text-secondary">
            <strong>Author:</strong> {blog.author}
          </p>

          <p className="text-secondary">
            <strong>Published Date:</strong> {blog.date}
          </p>

          <p className="text-secondary">
            <strong>Description:</strong> {blog.description}
          </p>

          <Button
            variant="dark"
            onClick={() => navigate("/blog-listing")}
          >
            Back to Blogs
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BlogDetails;
