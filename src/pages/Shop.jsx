import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop({
  wishlistItems,
  setWishlistItems,
  cartItems,
  setCartItems,
}) {
  return (
    <Container className="py-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Our Products</h2>
        <p className="text-secondary">Explore Our Products</p>
      </div>

      <Row>
        {products.map((product) => (
          <Col
            xs={12}
            sm={6}
            lg={3}
            className="mb-4"
            key={product.id}
          >
            <ProductCard
              product={product}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Shop;
