import React from "react"
import Me from "../data/images/jonathan-image.png"

const Main = () => {
    return (
      <div className="flex 2xl:flex-nowrap md:flex-wrap flex-wrap justify-center items-center h-[100vh]">
        <div className="m-8">
            <p className="text-[#03a9fc] font-bold md:text-[1.4rem] text-[1rem]">Hi my name is, </p>
            <h1 className="md:text-[3rem] text-[1.8rem] font-extrabold">Jonathan Moreno</h1>
            <h2 className="md:text-[3rem] text-[1.8rem] font-extrabold text-[#6b6b6b]">I develop web-based solutions.</h2>
        </div>
        <img src={Me} alt="" className="max-w-full h-auto border-2" />
      </div>

    );
  };

export default Main