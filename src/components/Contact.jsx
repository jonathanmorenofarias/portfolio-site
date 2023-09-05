import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import EmailImage from '../data/images/email.jpg'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_txonl2m', 'template_o7dm687', form.current, 'Xc9V6jeySi9zquYbn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <div className="2xl:py-20 md:py-15 py-10 2xl:px-96 md:px-40 px-2 shadow-md">
        <h1 className="text-center font-bold text-[black] drop-shadow-lg text-[2rem] md:mb-[3rem] mb-[2rem]">Contact</h1>
        
        <div className='flex md:flex-row flex-col justify-around items-center'>
        <img src={EmailImage} alt="Abstract image of email"  className='md:h-[30rem] h-[20rem]'/>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center gap-3'>
            <input placeholder="Name" type="text" name="user_name" className='border-2 bg-[#e9e9e9] rounded-lg p-1 md:w-[25rem] w-[15rem]'/>
            <input placeholder="Email" type="email" name="user_email" className='border-2 bg-[#e9e9e9] rounded-lg p-1 md:w-[25rem] w-[15rem]'/>
            <textarea placeholder="Message" name="message" rows="5" className='border-2 bg-[#e9e9e9] rounded-lg p-1 md:w-[25rem] w-[15rem]'/>
            <input type="submit" value="Send" className='bg-secondary-color text-white rounded-md h-10 md:w-[25rem] w-[15rem] hover:cursor-pointer hover:scale-[103%] ease-out duration-200'/>
          </form>
        </div>
      </div>
    );
  };

export default Contact