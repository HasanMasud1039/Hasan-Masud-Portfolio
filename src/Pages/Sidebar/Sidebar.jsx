import React, { useState } from 'react';
import photo from '../../assets/hasan.jpg'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
import { LiaEnvelopeSolid } from 'react-icons/lia';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [secondSetActiveIndex, setSecondSetActiveIndex] = useState(null);
  const animatedText = ' ** Hasan Masud ** Full-Stack Developer ';
  const characters = [...animatedText];
  const handleClickSecond = (index) => {
    setSecondSetActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="mt-8">
      <div className="md:border-r-4 border-emerald-600 rounded-2xl flex flex-col w-full lg:w-fit justify-center items-center lg:top-1/2 lg:transform lg:-translate-y-1/2 md:p-5 lg:p-3 lg:fixed ">
        <div className="circle relative w-[220px] h-[220px] rounded-full flex justify-center items-center mt-5 mb-6">
          <div
            className={`logo border-2 absolute w-48 h-48 border-emerald-800 rounded-br-xl rounded-tl-xl bg-cover brightness-125 bg-center`}
          ></div>
          {/* <div className="circularText absolute border-2  border-violet-400 rounded-full  w-full h-full transform rotate-85">

              {characters.map((char, index) => (
                <span key={index} className='font-bold' style={{ transform: `rotate(${index * 9.5}deg)` }}>
                  {char}
                </span>
              ))}

            </div> */}
        </div>
        <p className='text-3xl font-semibold text-emerald-500'>Hasan Masud</p>
        <div className='text-center text-lg py-2 space-y-1 border-b-2 mb-4'>
          <p className='text-lg'>Full Stack Software Engineer</p>
          <p className='text-lg'><a href='https://sagbrain.com/'>Sagbrain Corporation</a></p>
          <p>Tokyo, Japan</p>
        </div>
        <div className="px-3 space-y-2">
          <a href='mailto: masud.39cu@gmail.com' className=" text-xl text-white mb-2 text-center">
            masud.39cu@gmail.com
          </a> <br />
          <p className="text-xl mb-7 text-center">+8801518372751</p>
          <p className="text-xl mb-7 text-center">Dhaka, Bangladesh</p>

        </div>
        {/* <div className="flex gap-2 text-2xl my-7">
            <a href="https://www.linkedin.com/in/hasan-masud-110203" target="_blank" rel="noreferrer">
              <div className="p-3 border-2 border-slate-400  hover:border-emerald-800 rounded-full  text-white hover:text-cyan-500 cursor-pointer">
                <FaLinkedin />
              </div>
            </a>

            <a href="https://github.com/HasanMasud1039" target="_blank" rel="noreferrer">
              <div className="p-3 border-2 border-slate-400  hover:border-emerald-800 rounded-full  text-white hover:text-cyan-500 cursor-pointer">
                <FaGithub />
              </div>
            </a>
            <a href="https://www.facebook.com/hasan.masud.1234" target="_blank" rel="noreferrer">
              <div className="p-3 border-2 border-slate-400  hover:border-emerald-800 rounded-full  text-white hover:text-cyan-500 cursor-pointer">
                <FaFacebookF />
              </div>
            </a>
          </div> */}
        <div className='social'>
          <div className="icons second flex justify-center items-center">
            <li onClick={() => handleClickSecond(0)}
              className={secondSetActiveIndex === 0 ? 'shadow-2 fill-color' : ''}><Link to='https://www.linkedin.com/in/hasan-masud-110203' target="_blank"><FaLinkedinIn className='text-3xl mx-auto mt-3' /></Link></li>
            <li onClick={() => handleClickSecond(1)}
              className={secondSetActiveIndex === 1 ? 'shadow-2 fill-color' : ''}><Link to='https://github.com/HasanMasud1039' target="_blank"><FaGithub className='text-3xl mx-auto mt-3' /></Link></li>
            <li onClick={() => handleClickSecond(2)}
              className={secondSetActiveIndex === 2 ? 'shadow-2 fill-color' : ''}><Link to='https://www.facebook.com/hasan.masud.1234' target="_blank"><FaFacebookF className='text-3xl mx-auto mt-3' /></Link></li>
            <li onClick={() => handleClickSecond(2)}
              className={secondSetActiveIndex === 3 ? 'shadow-2 fill-color' : ''}><Link to='https://www.youtube.com/channel/UCnjhdvm021ii54xrkVuTbTw' target="_blank"><FaYoutube className='text-3xl mx-auto mt-3' /></Link></li>
            {/* <li onClick={() => handleClickSecond(1)}
                className={secondSetActiveIndex === 1 ? 'shadow-2 fill-color' : ''}><a href="#"><span className="fab fa-twitter"><FaTwitter /></span></a></li>
              <li onClick={() => handleClickSecond(2)}
                className={secondSetActiveIndex === 2 ? 'shadow-2 fill-color' : ''}><a href="#"><span className="fab fa-instagram"><FaInstagram /></span></a></li> */}
          </div>
        </div>

        <div className="shadow-2 fill-color w-full flex justify-center mb-7 ">
          <a
            href="https://drive.google.com/file/d/1cIImj88-dDY-WyBAoEnydK8KJwe_Hhp7/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="w-full flex justify-center "
          >
            <button className="hover:bg-[#9204BE] text-white bg-emerald-600 hover:text-white border border-primary w-5/6 p-3 rounded-2xl text-black hover:text-primary">
              <div className="flex gap-4 items-center justify-center ">
                <div className="text-3xl">
                  <LiaEnvelopeSolid />
                </div>
                <p className="font-semibold md:text-lg">RESUME</p>
              </div>
            </button>
          </a>
        </div>
        <p className="text-sm mb-6 text-center text-zinc-400">© 2023 Hasan Mausd. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Sidebar;