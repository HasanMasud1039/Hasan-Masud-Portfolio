import React from 'react';
import { LiaShapesSolid } from 'react-icons/lia';
import {
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNetlify,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { SiExpress, SiFigma, SiVercel } from 'react-icons/si';

const MySkills = () => {
  const skills = [
    {
      name: 'HTML 5',
      icon: <BiLogoHtml5 />,
      progress: 80
    },
    {
      name: 'CSS 3',
      icon: <BiLogoCss3 />,
      progress: 80
    },
    {
      name: 'Tailwind CSS',
      icon: <BiLogoTailwindCss />,
      progress: 80
    },
    {
      name: 'JavaScript',
      icon: <BiLogoJavascript />,
      progress: 70
    },
    {
      name: 'Bootstrap',
      icon: <BiLogoBootstrap />,
      progress: 70
    },
    {
      name: 'React JS',
      icon: <BiLogoReact />,
      progress: 80
    },
    {
      name: 'Node JS',
      icon: <BiLogoNodejs />,
      progress: 60
    },
    {
      name: 'Express.js',
      icon: <SiExpress />,
      progress: 60
    },
    {
      name: 'MongoDB',
      icon: <BiLogoMongodb />,
      progress: 60
    },
    {
      name: 'Github',
      icon: <BiLogoGithub />,
      progress: 70
    },
    {
      name: 'Figma',
      icon: <SiFigma />,
      progress: 80
    },
    {
      name: 'Netlify',
      icon: <BiLogoNetlify />,
      progress: 60
    },
    {
      name: 'Vercel',
      icon: <SiVercel />,
      progress: 60
    },
    // {
    //   name: 'Matlab',
    //   icon: <img src={matlabIcon} alt="" />,
    // }
  ];
  return (
    <div>
      <div className='my-8'>
        <button className='btn btn-md font-bold md:text-lg rounded-2xl border-emerald-800 hover:bg-violet-800 text-white btn-outline'><LiaShapesSolid className='text-2xl' />Skills</button>
      </div>

      <div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col bg-zinc-100 shadow-xl text-black justify-center items-center border-4 py-5 "
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              
              <div className="md:text-8xl text-3xl m-3 ">{skill.icon}</div>
              <p className="text-violet-800 font-semibold text-lg">{skill.name}</p>
              
<div className="w-[90%] bg-gray-300 rounded-full h-4 dark:bg-gray-700 mt-4">
  <div className= {`bg-blue-700 h-4 rounded-full text-sm text-center text-white font-semibold`} style={{width:`${skill.progress}%`}}>{skill.progress}%</div>
</div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MySkills;