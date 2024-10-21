import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
`;

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <Card>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="100" />
      <p>Price: ${product.price}</p>
      <div>
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          style={{ width: "40px" }}
        />
        <button onClick={increment}>+</button>
      </div>
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
