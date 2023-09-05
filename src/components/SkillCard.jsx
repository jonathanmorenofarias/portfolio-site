import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faCode} from '@fortawesome/free-solid-svg-icons'
import { faHtml5} from '@fortawesome/free-brands-svg-icons'
const SkillCard = (props) => {

    const skills = props.skills.map(curSkill => {
        return <p>{curSkill}</p>
    })

    function icons () {
        if (props.skill === "Front End") {
            return <FontAwesomeIcon icon={faHtml5} className="bg-[#e9f1f5] h-[2.5rem] w-[2.5rem] p-[1.5rem] rounded-full text-[#486ff0]"/>
        } else if (props.skill === "Back End") {
            return <FontAwesomeIcon icon={faCode} className="bg-[#e9f1f5] h-[2.5rem] w-[2.5rem] p-[1.5rem] rounded-full text-[#486ff0]" />

        }else if (props.skill === "Database") {
            return <FontAwesomeIcon icon={faDatabase} className="bg-[#e9f1f5] h-[2.5rem] w-[2.5rem] p-[1.5rem] rounded-full text-[#486ff0]"/>

        }
    }

    return (
      <div className="flex flex-col gap-[1rem] items-center whitespace-nowrap p-12">
        {icons()}
        <h1 className="font-bold text-[1.25rem] border-t-2 pt-2">{props.skill}</h1>
        {skills}
      </div>

    );
  };

export default SkillCard