import React from "react";
import ReactDOM from "react-dom/client";

// high-level design of what swiggy clone would be having
/**
 * frontend {
 *     - React --- Components Required
 *          - Header
 *                - Navbar - Logo, Address to be delivered, Search, Help, Profile, Cart
 *
 *          - Body
 *                - Dish List --- Dish Cards
 *                - Restaurant Container --- Restaurant Cards
 *
 *
 *          - Footer
 *                - Address
 *                - Company
 *                - Contact Us
 *                - Legal
 *                - We deliver to
 *
 */

const Header = () => {
  <div className="navbar">
    <div className="swiggy--logo">
      <img
        src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png"
        alt=""
      />
    </div>
  </div>;
};

const Body = () => {};

const Footer = () => {};

const AppLayout = () => {
  return (
    <div className="app--layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
