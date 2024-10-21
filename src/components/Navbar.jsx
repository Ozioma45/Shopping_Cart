import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIcon = styled.div`
  color: white;
`;

const Navbar = ({ cartItems }) => {
  return (
    <Nav>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/shop" style={{ color: "white", textDecoration: "none" }}>
        Shop
      </Link>
      <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
        Cart: {cartItems}
      </Link>
    </Nav>
  );
};

export default Navbar;
