import React from "react"


const Navbar = () => {
    return (
      <header className="flex justify-between items-center shadow-md h-20 p-4">
        <h1>Jonathan Moreno</h1>
        <nav className="">
            <a href="https://www.youtube.com" className="m-4">About me</a>
            <a href="https://www.youtube.com" className="m-4">Skills</a>
            <a href="https://www.youtube.com" className="m-4">Projects</a>
            <a href="https://www.youtube.com" className="m-4">Contact</a>
        </nav>

      </header>
    );
  };

export default Navbar