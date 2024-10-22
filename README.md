# Online Shop

This is a simple online store built with React that allows users to browse products, add them to their cart, update quantities, and remove items from the cart.

- Live Preview [click here](https://shopping-cart-azure-nu.vercel.app/)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Products**: Displays a list of products fetched from an external API.
- **Add to Cart**: Users can add products to their cart with a specified quantity.
- **Cart Management**: View the cart, adjust quantities of products, and remove items from the cart.
- **Responsive Design**: The layout adjusts based on screen size for a better user experience.

## Technologies

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing between the Home, Shop, and Cart pages.
- **Styled Components**: For styling components with CSS.
- **Fake Store API**: External API for fetching products.
- **PropTypes**: For type-checking props used in components.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Ozioma45/Shopping_Cart
   ```

2. Navigate to the project directory:

   ```bash
   cd online-shop
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The app will be running at the localhost selecting.

## Usage

- **Home Page**: Contains a simple welcome message.
- **Shop Page**: Displays products fetched from the Fake Store API. Each product has options to increase or decrease quantity and add it to the cart.
- **Cart Page**: Shows the items in the cart with options to update quantities or remove products. The total price of the cart is also displayed.

### Add to Cart Logic

- The `addToCart` function adds products to the cart. If a product already exists, it increments the quantity. Otherwise, it adds the new product to the cart array.

### Cart Management

- The cart displays items with the ability to increase or decrease quantities. Users can also remove products from the cart entirely.

## Folder Structure

```plaintext
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Cart.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Shop.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── styles.css
└── package.json
```

## API

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data. The API returns product details such as the title, price, image, and description.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

```
