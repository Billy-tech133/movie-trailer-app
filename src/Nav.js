import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img src="https://bit.ly/3yUmF6i" alt="" className="nav-logo" />
      <img src="https://bit.ly/37QhJTK" alt="" className="nav-avatar" />
    </div>
  );
}

export default Nav;
