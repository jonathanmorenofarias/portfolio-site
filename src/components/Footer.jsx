import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
      <footer className="flex flex-col justify-center items-center h-[12rem] bg-primary-color gap-4">
        <div className="grid grid-cols-3 gap-10 md:text-[2.5rem] text-[2rem] p-0 relative">
          <a target="_blank" href=""><FontAwesomeIcon icon={faEnvelope} className="text-[#486ff0] hover:scale-110 ease-out duration-200"/> </a>
          <a target="_blank" href="www.linkedin.com/in/jonathan-moreno-farias"><FontAwesomeIcon icon={faLinkedin} className="text-[#486ff0] hover:scale-110 ease-out duration-200" /></a>
          <a target="_blank" href="https://github.com/jonathanmorenofarias"><FontAwesomeIcon icon={faGithub} className="text-[#486ff0] hover:scale-110 ease-out duration-200" /></a>
        </div>
        <p className="text-center md:text-[.9rem] text-[.8rem] text-[white] border-t-[.5px] pt-2">© Copyright 2023 MorenoWebDesign. All rights reserved.</p>
      </footer>
    );
  };

export default Footer