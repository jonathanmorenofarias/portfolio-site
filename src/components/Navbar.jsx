import React from "react"
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [burgerOpen, setBurgerOpen] = React.useState(false)

    function open() {
      return setBurgerOpen(x =>!x)
    }

    return (
      <header className="sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center bg-white shadow-md h-20 px-[1rem]">
          <h1>&#60;<span className="text-[#03a9fc] font-bold">Jonathan</span> &#47;&#62;</h1>
          <nav className="flex justify-center items-center gap-10 md:flex hidden">
              <a target="_blank" href="">About me</a>
              <a target="_blank" href="">Skills</a>
              <a target="_blank" href="">Projects</a>
              <a target="_blank" href="">Contact</a>
          </nav>
          <GiHamburgerMenu onClick={open} className="md:hidden"/>
        </div>
        <div className={`h-[70vh] w-[40vw] bg-[gray] absolute text-center top-20 right-0  ${burgerOpen ? "": "hidden"}`}>
              <h1 target="_blank" href="">About me</h1>
              <h1 target="_blank" href="">Skills</h1>
              <h1 target="_blank" href="">Projects</h1>
              <h1 target="_blank" href="">Contact</h1>
        </div>
      </header>
    );
  };

export default Navbar