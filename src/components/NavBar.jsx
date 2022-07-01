import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Register">Register</Link>
    </nav>
  );
}
