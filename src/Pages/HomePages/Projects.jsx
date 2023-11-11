import React from 'react';
import { IoGridOutline } from 'react-icons/io5';
import cdaImg from '../../assets/projects/cda.png'
import jpImg from '../../assets/projects/JP.png'
import toyImg from '../../assets/projects/toy.png'

const Projects = () => {
  const projects = [
    {
      id: '1',
      name: "Champions Development Academy: Summer Camp Learning School",
      description:
        "The summer sports school Champions Development Academy provides a variety of courses and extracurricular opportunities for kids of all ages. Our website offers students a simple way to sign up for programs, look up skilled instructors, and keep track of their educational progress. The Academy's activities can be managed by the admin. The user experience is improved by the website's appealing visual design and intriguing layout.",
      tags: ['Express.js', 'MongoDB', 'JWT', 'React', 'Tanstack Query', 'Firebase', 'Stripe', 'Tailwind'],
      image: cdaImg,
      clientRepo: 'https://github.com/HasanMasud1039/Champions-Development-Academy-Client-side',
      serverRepo: 'https://github.com/HasanMasud1039/Champions-Development-Academy-Server',
      demo: 'https://champions-development-academy.web.app/',
      note: 'Admin Email: champion@gmail.com , Admin Password: A1a@.!#Z0Z'
    },
    {
      id: '2',
      name: 'Toy Zone: A Toy Marketplace',
      image: toyImg,
      description:
        'Toy Zone is an online platform where users can explore and purchase various kinds of vehicles toys. This marketplace provides a wide range of toys along with detailed information, pricing, available quantity, and seller information for each toy. In addition, authenticated sellers have the ability to upload, update, and delete their toy products.',
      tags: ['MongoDB', 'Express.js', 'React', 'Node,js', 'Firebase', 'AOS', 'Tailwind'],
      clientRepo: 'https://github.com/HasanMasud1039/toy-zone-client',
      serverRepo: 'https://github.com/HasanMasud1039/toy-zone-server',
      demo: 'https://toy-zone-727ba.web.app/',
    },
    // {
    //   id: '3',
    //   name: 'EL-Carino Bistro: A Restaurant Website',
    //   description:
    //     'This is a restaurant website. You will find delicious foods, can order and make an online payment. Newly arrived foods also can be found by this website',
    //   tags: ['Express.js', 'React', 'React Router', 'Firebase', 'Stripe', 'JWT', 'Tailwind'],
    //   clientRepo: 'https://github.com/HasanMasud1039/El-Carino-Bistro-Client',
    //   ServerRepo: 'https://github.com/HasanMasud1039/El-Carino-Bistro-Server',
    //   demo: 'https://chef-recipe-558e5.web.app/',
    //   note:'Admin Email: el_carino_bistro@hotmail.com , Admin Password: Aa1$aa'
    // },
    {
      id: '4',
      name: 'The Japanese Taste: A Japanese Recipe Website',
      image: jpImg,
      description:
        'This website contains recipes. You can find information on the chefs and delectable Japanese cuisine. There are also recently added recipes available.',
      tags: ['Express.js', 'React', 'React Router', 'Firebase', 'CSS', 'Tailwind'],
      clientRepo: 'https://github.com/HasanMasud1039/taste-of-japan-client',
      serverRepo: 'https://github.com/HasanMasud1039/taste-of-japan-server',
      demo: 'https://taste-of-japan-80317.web.app/services',
    },
  ];
  return (
    <div>
      <div className='mt-8'>
        <button className='btn btn-md font-bold md:text-lg rounded-2xl border-emerald-800 hover:bg-violet-800 text-white btn-outline'><IoGridOutline className='text-2xl' />Projects</button>
      </div>
      <div className="pt-[50px] pb-[90px]">

        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-duration="1000" className='border-2 space-y-8 gap-8 my-8 bg-cyan-50 rounded-2xl'>
            <p className="mt-5 md:text-3xl font-subtitle text-black font-serif font-semibold text-center hover:underline">{project.name}</p>
            <div className="relative">
              <img
                src={project.image}
                alt=""
                className="h-[300px] lg:h-[500px] w-full object-cover object-left-top rounded-xl z-0 mt-20"
              />
              <div className="absolute top-[-48px] right-2 flex">
                <span className="bg-cyan-300 border-2 text-black  hover:bg-purple-400 hover:text-white md:px-5 px-2 py-2 mx-1 md:text-md text-sm md:font-semibold rounded-full shadow-xl">
                  <a href={project.demo} rel="noreferrer" target="_blank">
                    Live Demo
                  </a>
                </span>
                <span className="bg-black border-2 text-white hover:bg-violet-800 md:px-5 px-2 py-2 mx-1 md:text-md text-sm md:font-semibold rounded-full shadow-xl">
                  <a href={project.clientRepo} rel="noreferrer" target="_blank">
                    Client
                  </a>
                </span>
                <span className="bg-black border-2 text-white hover:bg-violet-800 md:px-5 px-2 py-2 mx-1 md:text-md text-sm md:font-semibold rounded-full shadow-xl">
                  <a href={project.serverRepo} rel="noreferrer" target="_blank">
                    Server
                  </a>
                </span>
              </div>
              <div className="absolute bottom-3 left-2 ">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-black text-white border-2  text-sm md:text-md hover:bg-gray-200 hover:text-black  px-3 py-1 mx-1 my-0.5 md:font-semibold uppercase rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;