
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import BlogSearch from "./BlogSearch";
import products from "../data/blogs";

function BlogListing() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const navigate = useNavigate();

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
  }, [searchParams]);

  // Real Time Search
  const filteredBlogs = products.filter((item) =>
    `${item.title} ${item.category} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleSearch = () => {
    setSearchParams(search ? { search } : {});
  };

  return (
    <Container className="py-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Our Blogs</h2>
        <p className="text-secondary">
          Explore our latest blogs
        </p>
      </div>

      <Row className="justify-content-center mb-4">
        <Col md={6}>
          <BlogSearch
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </Col>
      </Row>

      <div className="d-flex justify-content-between mb-3">
        <h5 className="fw-semibold">All Blogs</h5>

        <span className="text-secondary">
          {filteredBlogs.length} Blogs
        </span>
      </div>

      <Row>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((item) => (
            <Col
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              className="mb-4"
              key={item.id}
            >
              <Card className="h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold">
                    {item.title}
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    {item.description}
                  </Card.Text>

                  <Button
                    variant="dark"
                    className="w-100 mt-auto"
                    onClick={() =>
                      navigate(`/product-details/${item.id}`)
                    }
                  >
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <h5 className="text-center py-5 text-secondary">
              No Blogs Found!
            </h5>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default BlogListing;
