import React from "react"
import Jonathan from '../data/images/Jonathan.jpeg'

const Main = () => {
    return (
      <div className="flex 2xl:flex-nowrap md:flex-wrap flex-wrap justify-center items-center h-[100vh]">
        <div className="m-8 drop-shadow-sm">
            <p className="text-[#5e5e5e] font-bold md:text-[1.4rem] text-[1rem]">Hi, my name is </p>
            <h1 className="md:text-[3rem] text-[1.8rem] font-extrabold">Jonathan Moreno.</h1>
            <h2 className="md:text-[3rem] text-[1.8rem] font-extrabold text-secondary-color">I develop web-based solutions.</h2>
        </div>
        <img src={Jonathan} alt="Picture of me" className="h-[25rem] w-[25rem] object-cover rounded-full border-2" />
      </div>

    );
  };

export default Main