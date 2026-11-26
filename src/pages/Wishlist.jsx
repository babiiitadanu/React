import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

function Wishlist({
  wishlistItems,
  setWishlistItems,
  cartItems,
  setCartItems,
}) {
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 },
      ]);
    }

    toast.success(`${item.title} added to cart successfully!`);
  };

  const handleRemove = (item) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((wishItem) => wishItem.id !== item.id)
    );

    toast.success(`${item.title} removed from wishlist!`);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row g-4">
          {wishlistItems.map((item) => (
            <div className="col-md-4 col-lg-3" key={item.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  height="200"
                  className="object-fit-cover"
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.title}</Card.Title>

                  <Card.Text className="fw-bold">
                    ₹{item.price}
                  </Card.Text>

                  <div className="mt-auto d-grid gap-2">
                    <Button
                      variant="dark"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add To Cart
                    </Button>

                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemove(item)}
                    >
                      Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
