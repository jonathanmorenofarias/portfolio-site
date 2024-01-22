import React from "react"
import SkillCard from "./SkillCard";
const Skills = () => {
    const frontEndSkills = ["HTML", "CSS", "Javascript", "React JS", "Tailwind"]
    const backEndSkills = ["Go", "Python", "Fast API", "Node JS", "Express JS", "MongoDB", "SQL"]
    const tools = ["Git", "Postman", "Vercel", "VS Code"]


    return (
      <div className="2xl:py-[6rem] md:[4rem] py-[3rem] 2xl:px-96 md:px-40 px-2">
        <h1 className="text-center font-bold text-black drop-shadow-lg text-[2rem] md:mb-[3rem] mb-[2rem]">Skills</h1>
        <div className="flex md:flex-row flex-col justify-center md:items-start items-center items-top md:gap-[8rem] gap-[1rem]">
          <SkillCard skill="Front End" skills={frontEndSkills}/>
          <SkillCard skill="Back End" skills={backEndSkills}/>
          <SkillCard skill="Tools" skills={tools}/>
        </div>
      </div>
    );
  };

export default Skills