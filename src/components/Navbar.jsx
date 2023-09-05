import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [burgerOpen, setBurgerOpen] = React.useState(false)

    function open() {
      return setBurgerOpen(x =>!x)
    }

    const itemsNav = ["About me", "Skills", "Projects", "Contact"]
    const responsiveNav = itemsNav.map (item => {
      return (
        <div className="flex justify-between w-[100%]">
        <FontAwesomeIcon icon={faChevronLeft} />
        <h1>{item}</h1> 
        </div>
      )
    })

    return (
      <header className="sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center bg-white shadow-md h-20 px-[1rem]">
          <h1>&#60;<span className="text-[#03a9fc] font-bold">Jonathan</span> &#47;&#62;</h1>
          <nav className="flex justify-center items-center gap-10 md:flex hidden">
              <h1>About me</h1>
              <h1>Skills</h1>
              <h1>Projects</h1>
              <h1>Contact</h1>
          </nav>
          <FontAwesomeIcon icon={faBars} className="md:hidden" onClick={open}/>
        </div>
        <div className={`h-[100vh] w-[90vw] bg-[white] flex flex-col fixed text-center top-0 gap-[1rem] p-[1.5rem] items-end font-bold md:hidden shadow-2xl duration-500 ${burgerOpen ? "right-0": "-right-[100vw]"}`}>
          <FontAwesomeIcon icon={faX} onClick={open}/>
          <div className="h-[1px] w-[100%] bg-[#e2e2e2]"></div>
          {responsiveNav}
        </div>
      </header>
    );
  };

export default Navbar