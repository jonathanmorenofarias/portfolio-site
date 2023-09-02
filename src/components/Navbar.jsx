import React from "react"
import Logo from "../images/signature.png"

const Navbar = () => {
    return (
      <header className="flex justify-between items-center shadow-md h-20">
        <img src={Logo} alt="Image Of My Logo" className="h-[100%]"/>
        <nav className="">
            <a target="_blank" href="https://www.youtube.com" className="m-4">About me</a>
            <a target="_blank" href="https://www.youtube.com" className="m-4">Skills</a>
            <a target="_blank" href="https://www.youtube.com" className="m-4">Projects</a>
            <a target="_blank" href="https://www.youtube.com" className="m-4">Contact</a>
        </nav>

      </header>
    );
  };

export default Navbar