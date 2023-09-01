import React from "react"
import {RxHamburgerMenu} from "react-icons/rx"
import {VscChromeClose} from "react-icons/vsc"

const Navbar = () => {
    return (
      <header className="shadow-md">
        <h1>Jonathan Moreno</h1>
        <nav className="">
            <a>About me</a>
            <a>Skills</a>
            <a>Projects</a>
            <a>Contact</a>
        </nav>

      </header>
    );
  };

export default Navbar