
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function ShopNavbar({ wishlistItems = [], cartItems = [] }) {
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/shop">
          My Store
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="shop-navbar" />

        <Navbar.Collapse id="shop-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/wishlist">
              Wishlist ({wishlistItems.length})
            </Nav.Link>

            <Nav.Link as={Link} to="/cart">
              Cart ({cartCount})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ShopNavbar;
