import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [burgerOpen, setBurgerOpen] = React.useState(false)

    function open() {
      return setBurgerOpen(x =>!x)
    }

    const itemsNav = ["About", "Skills", "Projects", "Contact"]
    const responsiveNav = itemsNav.map (item => {
      return (
        <div className="flex items-center justify-between w-[100%]">
        <FontAwesomeIcon icon={faChevronLeft} />
        <Link to={String(item)} smooth={true} offset={-70} duration={500} onClick={() => setBurgerOpen(false)} className="text-[1.125rem]">{item}</Link> 
        </div>
      )
    })

    return (
      <header className="sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center bg-primary-color shadow-lg h-20 px-[1rem]">
          <h1 className="text-[#F5F5F5]">&#60;<span className="text-secondary-color font-semibold">Jonathan</span> &#47;&#62;</h1>
          <nav className="flex justify-center items-center gap-10 md:flex hidden">
              {itemsNav.map (item => <Link to={String(item)} smooth={true} offset={-30} duration={500} className="hover:cursor-pointer hover:scale-[103%] duration-200 text-[#F5F5F5] font-semibold">{item}</Link>)}
          </nav>
          <FontAwesomeIcon icon={faBars} className="text-[#e2e2e2] md:hidden hover:cursor-pointer" onClick={open}/>
        </div>
        <div className={`h-[100vh] w-[90vw] bg-[white] flex flex-col fixed text-center top-0 gap-[1rem] p-[1.5rem] items-end font-bold md:hidden shadow-2xl duration-500 ${burgerOpen ? "right-0": "-right-[100vw]"}`}>
          <FontAwesomeIcon icon={faX} onClick={open} className="hover:cursor-pointer scale-75"/>
          <div className="h-[1px] w-[100%] bg-[#e2e2e2]"></div>
          {responsiveNav}
        </div>
      </header>
    );
  };

export default Navbar