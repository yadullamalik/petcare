import React from "react";
import "./Home.css";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo_div">PetCare</div>
      <div className="center_div">
        <p>Home</p>
        <p>About us</p>
        <p>Services</p>
        <p>Pet Health</p>
        <p>Contact us</p>
      </div>
      <div className="right_div">
        <button>Register</button>
      </div>
    </div>
  );
};
