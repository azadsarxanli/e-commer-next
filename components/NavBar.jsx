import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={`/`}>JSM Headphones</Link>
      </p>
      <button className="cart-icon" onClick={null} type="button">
        <AiOutlineShopping />
        <span className="cart-item-qty">0</span>
      </button>
    </div>
  );
};

export default NavBar;
