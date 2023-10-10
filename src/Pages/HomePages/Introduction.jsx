import React from 'react';
import { FaHome } from 'react-icons/fa';

const Introduction = () => {
    return (
        <div>
            <div className='mt-8'>
                <button className='btn btn-md font-bold text-lg rounded-2xl border-emerald-800 hover:bg-violet-800 hover:text-white btn-outline'><FaHome/> Introduction</button>
            </div>
            <div className='py-12 uppercase space-y-8'>
                <p className='text-center text-[39px] md:text-[49px] font-bold'>Hello! This is <span className='text-violet-800'>Hasan Masud</span></p>
                <p className='text-center md:text-[29px] text-[19px] font-bold'>A Full-Stack Developer (MERN)</p>
            </div>
        </div>
    );
};

export default Introduction;