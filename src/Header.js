import { useState } from "react";
import logo from "./star.svg";

import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <img src={logo} className="logo" />
        <i class="fa-solid fa-bars menu-bar"></i>
      </header>
      <div className={`menu ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
        <nav>
          <a href="#home">Home</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
          <a href="#faq" onClick={() => handleLinkClick()}>
            FAQ
          </a>
          <a href="#faq">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;
