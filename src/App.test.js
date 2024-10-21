import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "./Cart";

const cart = [
  { id: 1, title: "Product 1", price: 10, quantity: 1 },
  { id: 2, title: "Product 2", price: 20, quantity: 2 },
];

test("renders cart with products and total", () => {
  render(
    <Cart cart={cart} updateQuantity={() => {}} removeFromCart={() => {}} />
  );
  expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
  expect(screen.getByText("Total: $50.00")).toBeInTheDocument();
});

test("increments and decrements item quantity", () => {
  const updateQuantity = jest.fn();
  render(
    <Cart
      cart={cart}
      updateQuantity={updateQuantity}
      removeFromCart={() => {}}
    />
  );
  const incrementButton = screen.getAllByText("+")[0];
  fireEvent.click(incrementButton);
  expect(updateQuantity).toHaveBeenCalledWith(cart[0], 2);

  const decrementButton = screen.getAllByText("-")[0];
  fireEvent.click(decrementButton);
  expect(updateQuantity).toHaveBeenCalledWith(cart[0], 1);
});
