import { useState } from "react";
import logo from "./stb_full_logo.svg";

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
        <div className="header-right">
          <a href="http://instagram.com/selftapebattle" target="_blank">
            {" "}
            <i class="fa-brands fa-instagram"></i>
          </a>
          <i class="fa-solid fa-bars menu-bar"></i>
        </div>
      </header>
      <div className={`menu ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
        <nav>
          <a href="#home" onClick={() => handleLinkClick()}>
            Home
          </a>
          <a href="#how-it-works" onClick={() => handleLinkClick()}>
            How it works
          </a>
          <a href="#about" onClick={() => handleLinkClick()}>
            About
          </a>
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
