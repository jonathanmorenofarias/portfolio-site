import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const ProjectCard = (props) => {
    return (
      <div className={`flex flex-col w-[30rem]`}>
        <img src={props.imgUrl} alt="Image of Project" 
        className="h-[20rem] object-cover" />
        <div className="flex flex-col justify-between bg-white h-[25rem] p-[2rem]">
          <div>
            <h1 className="font-bold text-[1.5rem]">{props.name}</h1>
            <p className="mt-4">{props.description}</p>
          </div>
          <a target="_blank" href={props.url}><FontAwesomeIcon icon={faGithub} className=" text-[3rem] text-[#486ff0] hover:scale-110 ease-out duration-200" /></a>
        </div>
       
      </div>

    );
  };

export default ProjectCard