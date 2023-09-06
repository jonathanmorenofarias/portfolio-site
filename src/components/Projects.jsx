import React from "react"
import ProjectCard from "./ProjectCard";
import ProjectList from '../data/info/projects'

const Projects = () => {
    const completedProjects = ProjectList.map ((currProj, index) => {
        return <ProjectCard name={currProj.name} description={currProj.description} span={index % 3 === 0 ? "true": "false"}/>
    })

    return (
        <div className="bg-primary-color 2xl:py-20 md:py-15 py-10 2xl:px-96 md:px-40 px-2 shadow-md">
            <h1 className="text-center font-bold text-white drop-shadow-lg text-[2rem] md:mb-[3rem] mb-[2rem]">Projects</h1>
            <div className="md:grid md:grid-cols-3 md:gap-4 flex flex-col gap-12">
                {completedProjects}
            </div>
        </div>
    );
  };

export default Projects