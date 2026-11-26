import { useState } from "react";

export function useShopState() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Add to Wishlist
  const addToWishlist = (product) => {
    const exists = wishlistItems.some(
      (item) => item.id === product.id
    );

    if (exists) {
      return false;
    }

    setWishlistItems((prevItems) => [...prevItems, product]);
    return true;
  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Add to Cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find(
        (item) => item.id === product.id
      );

      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return {
    wishlistItems,
    setWishlistItems,
    cartItems,
    setCartItems,
    addToWishlist,
    removeFromWishlist,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartCount,
  };
}
