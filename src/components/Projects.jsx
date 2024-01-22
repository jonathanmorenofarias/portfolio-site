import React from "react"
import ProjectCard from "./ProjectCard";
import ProjectList from '../data/info/projects'

const Projects = () => {
    const completedProjects = ProjectList.map ((currProj, index) => {
        return <ProjectCard name={currProj.name} imgUrl={currProj.imgUrl} url={currProj.url} description={currProj.description} isSite={currProj.isSite} direct={currProj.direct} span={index % 3 === 0 ? "true": "false"}/>
    })

    return (
        <div className="flex flex-col justify-center items-center bg-primary-color 2xl:py-20 md:py-15 py-10 2xl:px-96 md:px-40 px-2 shadow-md" id="Projects">
            <h1 className="text-center font-bold text-white drop-shadow-lg text-[2rem] md:mb-[3rem] mb-[2rem]">Projects</h1>
                <div className="flex justify-center items-center flex-wrap gap-[2rem]">
                    {completedProjects}
                </div>

        </div>
    );
  };

export default Projects