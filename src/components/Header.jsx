import React from "react";
import logo from "../assets/fondo.png";

function Header() {
  return (
    <header>
      <div className="bg-auto bg-center px-8 md:px-20 lg:px-64">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export { Header };
