import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = JSON.parse(localStorage.getItem("cartB69")) || [];

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/dashboard" className="navbar-brand">
        MyShop
      </Link>
      

      <Link to="/cart" className="btn btn-outline-light">
        🛒 Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default Header;
