import React from "react"
import Jonathan from '../data/images/Jonathan.jpeg'

const Main = () => {
    return (
      <div className="flex md:flex-row flex-col justify-center  items-center h-[95vh] gap-4 2xl:py-20 md:py-15 py-10 2xl:px-96 md:px-40 px-2 shadow-md">
        <div className="m-8 drop-shadow-sm">
            <p className="text-[#5e5e5e] font-bold md:text-[1.4rem] text-[1rem]">Hi, my name is </p>
            <h1 className="md:text-[3rem] text-[1.8rem] font-extrabold">Jonathan Moreno.</h1>
            <h2 className="md:text-[3rem] text-[1.8rem] font-extrabold text-secondary-color">I develop web-based solutions.</h2>
        </div>
        <img src={Jonathan} alt="Picture of me" className="md:h-[28rem] h-[25rem]  rounded-full border-2" />
      </div>

    );
  };

export default Main