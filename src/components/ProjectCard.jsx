import React from "react"

const ProjectCard = (props) => {
    return (
      <div className={`bg-[white] h-[20rem] rounded-lg shadow-lg ${props.span === "true" ? "col-span-2": ""}`}>
        <img alt="Image of Project" />
        <h1 className="">{props.name}</h1>
        <p>{props.description}</p>
      </div>

    );
  };

export default ProjectCard