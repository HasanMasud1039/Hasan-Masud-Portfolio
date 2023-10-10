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
  import matlabIcon from '../../assets/matlab.png'

const MySkills = () => {
    const skills = [
        {
          name: 'HTML 5',
          icon: <BiLogoHtml5 />,
        },
        {
          name: 'CSS 3',
          icon: <BiLogoCss3 />,
        },
        {
          name: 'Tailwind CSS',
          icon: <BiLogoTailwindCss />,
        },
        {
          name: 'JavaScript',
          icon: <BiLogoJavascript />,
        },
        {
          name: 'Bootstrap',
          icon: <BiLogoBootstrap />,
        },
        {
          name: 'React JS',
          icon: <BiLogoReact />,
        },
        {
          name: 'Node JS',
          icon: <BiLogoNodejs />,
        },
        {
          name: 'Express.js',
          icon: <SiExpress />,
        },
        {
          name: 'MongoDB',
          icon: <BiLogoMongodb />,
        },
        {
          name: 'Github',
          icon: <BiLogoGithub />,
        },
        {
          name: 'Figma',
          icon: <SiFigma />,
        },
        {
          name: 'Netlify',
          icon: <BiLogoNetlify />,
        },
        {
          name: 'Vercel',
          icon: <SiVercel />,
        },
        // {
        //   name: 'Matlab',
        //   icon: <img src={matlabIcon} alt="" />,
        // }
      ];
    return (
        <div>
            <div className='my-8'>
                <button className='btn btn-md font-bold md:text-lg rounded-2xl border-emerald-800 hover:bg-violet-800 hover:text-white btn-outline'><LiaShapesSolid className='text-2xl'/>Skills</button>
            </div>

            <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col bg-zinc-100 shadow-xl justify-center items-center border rounded-[60px] py-10"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {/* <img src={skill.icon} alt="skill" className="h-[100px] lg:h-[100px] w-auto my-6" /> */}
              <div className="md:text-8xl text-5xl my-6">{skill.icon}</div>
              <p className="text-violet-800 font-semibold text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
            </div>
            
        </div>
    );
};

export default MySkills;