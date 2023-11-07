import React from 'react';
import photo from '../../assets/hasan.jpg'
import { } from "react-icons/fa";
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { LiaEnvelopeSolid } from 'react-icons/lia';
import './Sidebar.css'

const Sidebar = () => {
  const animatedText = ' ** Hasan Masud ** Full-Stack Developer ';
  const characters = [...animatedText];
  // console.log(characters);

  return (
    <div>
      <div className="mt-8">
        <div className="border-2 border-emerald-800 rounded-2xl flex flex-col w-full lg:w-fit justify-center items-center lg:top-1/2 lg:transform lg:-translate-y-1/2 md:p-5 lg:p-3 lg:fixed ">
          <div className="circle relative w-[220px] h-[220px] rounded-full flex justify-center items-center mt-5 mb-12">
            <div
              className={`logo border-2 absolute w-40 h-40 border-emerald-800 rounded-full bg-cover bg-center`}
            ></div>
            <div className="circularText absolute border-2  border-violet-400 rounded-full  w-full h-full transform rotate-85">

              {characters.map((char, index) => (
                <span key={index} className='font-bold' style={{ transform: `rotate(${index * 9.5}deg)` }}>
                  {/* <p className='transform rotate-80'>
                  {char}
                  </p> */}
                  {char}
                </span>
              ))}

            </div>
          </div>
          <div className="px-3 space-y-4">
            <a href='mailto: masud.39cu@gmail.com' className=" text-2xl text-blue-800 mb-2 text-center">
              masud.39cu@gmail.com
            </a> <br />
            <p className="text-xl mb-7 text-center">+8801518372751</p>
            <p className="text-2xl mb-7 text-center">Dhaka, Bangladesh</p>

          </div>
          <div className="flex gap-2 text-2xl my-7">
            <a href="https://www.linkedin.com/in/hasan-masud-110203" target="_blank" rel="noreferrer">
              <div className="p-3 border-2 border-violet-800  hover:border-emerald-800 rounded-full  text-violet-800  hover:text-emerald-800 cursor-pointer">
                <FaLinkedin />
              </div>
            </a>

            <a href="https://github.com/HasanMasud1039" target="_blank" rel="noreferrer">
              <div className="p-3 border-2 border-violet-800  hover:border-emerald-800 rounded-full text-violet-800  hover:text-emerald-800 cursor-pointer">
                <FaGithub />
              </div>
            </a>
            <a href="https://www.facebook.com/hasan.masud.1234" target="_blank" rel="noreferrer">
              <div className="p-3 border-2 border-violet-800  hover:border-emerald-800 rounded-full text-violet-800  hover:text-emerald-800 cursor-pointer">
                <FaFacebookF />
              </div>
            </a>
          </div>

          <div className="w-full flex justify-center mb-7 ">
            <a
              href="https://drive.google.com/file/d/1o7nWBhWLqyMjW9As00uNV-ofusJyVvsw/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="w-full flex justify-center "
            >
              <button className="bg-violet-800  text-white hover:bg-emerald-600 hover:text-white border border-primary w-5/6 p-3 rounded-full text-black hover:text-primary">
                <div className="flex gap-4 items-center justify-center ">
                  <div className="text-3xl">
                    <LiaEnvelopeSolid />
                  </div>
                  <p className="font-semibold">HIRE ME !</p>
                </div>
              </button>
            </a>
          </div>
          <p className="text-sm mb-6 text-center text-violet-800">© 2023 Hasan Mausd. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;