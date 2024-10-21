import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CartItem = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const handleIncrement = (product) => {
    updateQuantity(product, product.quantity + 1);
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      updateQuantity(product, product.quantity - 1);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <CartItem key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <div>
                <button onClick={() => handleDecrement(product)}>-</button>
                <input type="number" value={product.quantity} readOnly />
                <button onClick={() => handleIncrement(product)}>+</button>
              </div>
            </div>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </CartItem>
        ))
      )}
      {cart.length > 0 && (
        <h2>
          Total: $
          {cart
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </h2>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
