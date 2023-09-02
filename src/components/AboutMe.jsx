import React from "react"
import Moji from "../images/moji.png"

const AboutMe = () => {
    return (
        <div className="bg-[#03a9fc] 2xl:py-20 md:py-15 py-10 2xl:px-96 md:px-40 px-2 shadow-md">
            <h1 className="text-center font-bold text-white drop-shadow-lg text-[2rem] 2xl:m-5 md:m-3 m-2">About Me</h1>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center">
                <img src={Moji} alt="memeoji of myself" className="rounded-full border-[1px] 2xl:h-48 md:h-44 h-40 border-[#dddbdb] bg-white 2xl:m-5 md:m-3 m-2" />
                <p className="rounded-[10px] border-[1px] border-[#b5b5b5] bg-white p-[1rem] 2xl:m-5 md:m-3 m-2">I am in my final year of pursuing a degree in Computer Science at Oregon State University.
                    My passion lies in crafting exceptional user interfaces to enhance the overall viewing and user experience.
                    With a robust grasp of both front-end and back-end development, I possess the ability to rapidly adapt to
                    changing project requirements. I am highly confident in my communication skills and development expertise,
                    making me a valuable asset to any team.</p>    
            </div>
            
        </div>
    );
  };

export default AboutMe