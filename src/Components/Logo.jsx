import React from "react";
import logo from '../assets/Logo.png'
import { Link } from "react-router";
const Logo = () => {
  return (
    <>
      {/* Logo */}
      <Link to="/">
        <img className="w-auto h-8" src={logo} alt="Positivus logo" />
      </Link>
    </>
  );
};

export default Logo;
