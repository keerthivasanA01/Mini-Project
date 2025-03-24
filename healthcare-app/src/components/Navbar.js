import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/navbar.css";

function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {currentUser ? (
        <>
          <Link to="/predict">Predict</Link>
          <Link to="/upload">Upload Report</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
