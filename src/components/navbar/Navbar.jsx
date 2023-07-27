import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="logo">Logo</div>
      <div className="headers">
        <Link className="heads" href="/">
          Home
        </Link>
        <Link className="heads" href="/about">
          About
        </Link>
        <Link className="heads" href="/contact">
          Contact
        </Link>
        <Link className="heads" href="/portfolio">
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
