import React from 'react';
import { LiaUserSolid } from 'react-icons/lia';

const AboutMe = () => {
    return (
        <div >
            <div className='mt-8'>
                <button className='btn btn-md font-bold text-lg rounded-2xl border-emerald-800 hover:bg-violet-800 hover:text-white btn-outline'><LiaUserSolid className='text-2xl'/>About</button>
            </div>
            <div className='text-2xl space-x-2 p-4 mt-8 font-serif'><span>Hello, I'm Hasan Masud, a passionate and creative web designer dedicated to crafting visually stunning and user-friendly websites. With a fresh perspective and a keen eye for design, I'm on a mission to turn ideas into engaging digital experiences.</span> <br /><br />
            <span>I made a conscious decision to take a step back and realign my skills. From January 2023 to July 2023, I dedicated myself to resharp my coding abilities as a MERN stack developer. Despite many challenges posed, I quickly regained my abilities and became a proficient professional in the field.</span>
            </div> 

        </div>
    );
};

export default AboutMe;