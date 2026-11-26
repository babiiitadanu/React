
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

function Cart({ cartItems, setCartItems }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping =
    subtotal === 0 ? 0 : subtotal >= 999 ? 0 : 50;

  const grandTotal = subtotal + shipping;

  const handleRemove = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== item.id)
    );

    toast.success(`${item.title} removed from cart!`);
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <Card className="mb-3 shadow-sm" key={item.id}>
                <Card.Body>
                  <div className="row align-items-center g-3">
                    <div className="col-4 col-md-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid rounded"
                      />
                    </div>

                    <div className="col-8 col-md-9">
                      <h5>{item.title}</h5>

                      <p className="fw-bold mb-2">
                        ₹{item.price}
                      </p>

                      <div className="d-flex align-items-center gap-2 mb-2">
                        <Button
                          size="sm"
                          variant="outline-dark"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </Button>

                        <span>{item.quantity}</span>

                        <Button
                          size="sm"
                          variant="outline-dark"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </Button>
                      </div>

                      <p className="mb-2">
                        Item Total: ₹{item.price * item.quantity}
                      </p>

                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => handleRemove(item)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className="col-lg-4">
            <Card className="shadow-sm">
              <Card.Body>
                <h4 className="mb-3">Price Details</h4>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping Charges</span>
                  <span>
                    {shipping === 0 ? "Free" : `₹${shipping}`}
                  </span>
                </div>

                {shipping === 0 && subtotal > 0 && (
                  <p className="text-success small">
                    Congratulations! You got free shipping.
                  </p>
                )}

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                  <span>Grand Total</span>
                  <span>₹{grandTotal}</span>
                </div>

                <Button variant="dark" className="w-100 mt-3">
                  Proceed To Checkout
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
