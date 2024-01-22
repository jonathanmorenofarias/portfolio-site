import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = (props) => {
    return (
      <div className={`flex flex-col md:w-[30rem] w-[90vw]`}>
        <img src={props.imgUrl} alt="Image of Project" 
        className="h-[20rem] object-cover" />
        <div className="flex flex-col justify-between bg-white md:h-[25rem] p-[2rem] gap-[2rem] shadow">
          <div>
            <h1 className="font-bold md:text-[1.5rem] text-[1.25rem]">{props.name}</h1>
            <p className="mt-4">{props.description}</p>
          </div>
          <div className="flex items-center gap-[1.5rem]">
            <a target="_blank" href={props.url}><FontAwesomeIcon icon={faGithub} className=" md:text-[3rem] text-[2.5rem] text-[#486ff0] hover:scale-110 ease-out duration-200" /></a>
            {props.isSite && <a href={props.direct} target="_blank" className="md:px-[3rem] md:py-[.75rem] px-[2rem] py-[.5rem] text-[1rem] bg-[#486ff0] rounded-2xl text-center hover:scale-105 ease-out duration-200">Direct Link</a>}
          </div>
        </div>
       
      </div>

    );
  };

export default ProjectCard