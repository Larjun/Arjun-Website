import React from "react";
import { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const showNavbar = () => {
    if (navRef.current) navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <nav ref={navRef}>
        <a href="#technologies">Technologies</a>
        <a href="#experiences">Experiences</a>
        <a href="#projects">Projects</a>
        <a href="#extracurricular">Hobbies</a>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <MenuIcon />
      </button>
    </header>
  );
};

export default Navbar;
