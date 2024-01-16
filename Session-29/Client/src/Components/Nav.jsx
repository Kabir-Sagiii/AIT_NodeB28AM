import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "70px",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>MyCart App</h3>
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: "50px",
          }}
        >
          Home
        </Link>
        <Link
          to="/profile"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: "50px",
          }}
        >
          Profile
        </Link>
        <Link
          to="/products"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: "50px",
          }}
        >
          Products
        </Link>
        <div>
          <button className="btn btn-outline-danger">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
