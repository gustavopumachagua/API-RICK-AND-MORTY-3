import React from "react";
import logo from "../assets/fondo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Header() {
  return (
    <header className="bg-bodyLight dark:bg-bodyDark">
      <div className="bg-auto bg-center px-8 md:px-20 lg:px-64">
        <LazyLoadImage
          width="100%"
          min-height="144"
          effect="blur"
          src={logo}
          alt="logo"
        />
      </div>
    </header>
  );
}

export { Header };
