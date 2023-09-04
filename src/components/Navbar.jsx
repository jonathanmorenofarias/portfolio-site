import React from "react"

const Navbar = () => {
    return (
      <header className="flex flex-wrap justify-between items-center bg-white shadow-md sticky top-0 h-20 z-50 px-[1rem]">
        <h1>&#60;<span className="text-[#03a9fc] font-bold">Jonathan</span> &#47;&#62;</h1>
        <nav className="flex justify-center items-center gap-10">
            <a target="_blank" href="">About me</a>
            <a target="_blank" href="">Skills</a>
            <a target="_blank" href="">Projects</a>
            <a target="_blank" href="">Contact</a>
        </nav>

      </header>
    );
  };

export default Navbar