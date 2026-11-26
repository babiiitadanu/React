
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

function ProductCard({
  product,
  wishlistItems,
  setWishlistItems,
  cartItems,
  setCartItems,
}) {
  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, quantity: 1 },
      ]);
    }

    toast.success("Added to Cart Successfully!");
  };

  const handleAddToWishlist = () => {
    if (isWishlisted) {
      toast.info("This Product is Already in Your Wishlist!");
      return;
    }

    setWishlistItems((prevItems) => [
      ...prevItems,
      product,
    ]);

    toast.success("Added to Wishlist Successfully!");
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="object-fit-cover"
        height="220"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>

        <Card.Text className="text-muted">
          {product.category}
        </Card.Text>

        <Card.Text className="fw-bold">
          ₹{product.price}
        </Card.Text>

        <div className="mt-auto d-grid gap-2">
          <Button variant="dark" onClick={handleAddToCart}>
            Add To Cart
          </Button>

          <Button
            variant="outline-danger"
            onClick={handleAddToWishlist}
          >
            {isWishlisted ? "Added to Wishlist" : "Add To Wishlist"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
