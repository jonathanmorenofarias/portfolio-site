import React from "react"
import Moji from "../data/images/lifting.jpg"

const AboutMe = () => {
    return (
        <div className="bg-primary-color 2xl:py-20 md:py-15 py-10 2xl:px-96 md:px-40 px-2 shadow-md" id="About">
            <h1 className="text-center font-bold text-white drop-shadow-lg text-[2rem] md:mb-[3rem] mb-[2rem]">About Me</h1>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-[2rem]">
                <img src={Moji} alt="memeoji of myself" className="md:h-[28rem] h-[90vw] border-[#dddbdb] bg-white " />
                <div className="text-white">
                <p className="rounded-lg p-[1rem] md:w-[30rem]">I am in my final year of pursuing a degree in Computer Science at Oregon State University.
                    Over the last two years of my college career, I've found a passion for Software Development. From the front-end to the back-end, I love being able to come up with new solutions and working with a team to find them. </p> 

                <p className="rounded-lg p-[1rem] md:w-[30rem]">During the Summer of 2023, I was fortunate enough to work with Harder Mechanical Contractors on their inventory and billing applications. Through this internship, I gained 
                a lot of knowledge on the importance of the Software Development Process and was able to sharpen my skills with the Agile Model. I also got to work with various teams from UI to Database Management.
                </p>
                <p className="rounded-lg p-[1rem] md:w-[30rem]">Besides Coding I really enjoy the sport of Powerlifting. It's not only a sport to me, but a way for me to connect with other people that also use the gym as a stress reliever. 
                I have been training the Squat, Bench, and Deadlift since about 2019 and was able to compete in the Oregon State Championship in December of 2023.</p> 
                </div>   
            </div>
            
        </div>
    );
  };

export default AboutMe