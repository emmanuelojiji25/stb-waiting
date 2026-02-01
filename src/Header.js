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
          <span className="email">info@selftapebattle.com</span>
          <a href="http://instagram.com/selftapebattle" target="_blank">
            {" "}
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
