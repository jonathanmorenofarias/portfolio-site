import React from "react"
import { BiCodeAlt, BiLaptop } from 'react-icons/bi';
import { BsFillDatabaseFill } from 'react-icons/bs';

const SkillCard = (props) => {

    const skills = props.skills.map(curSkill => {
        return <p>{curSkill}</p>
    })

    function icons () {
        if (props.skill === "Front End") {
            return <BiCodeAlt className="text-[2rem] drop-shadow-lg"/>
        } else if (props.skill === "Back End") {
            return <BiLaptop className="text-[2rem] drop-shadow-lg"/>

        }else if (props.skill === "Database") {
            return <BsFillDatabaseFill className="text-[2rem] drop-shadow-lg"/>

        }
    }

    return (
      <div className="h-[17rem] text-center whitespace-nowrap bg-[#03a9fc] text-white p-12 rounded-lg shadow-lg">
        {icons()}
        <h1 className="font-bold">{props.skill}</h1>
        {skills}
      </div>

    );
  };

export default SkillCard