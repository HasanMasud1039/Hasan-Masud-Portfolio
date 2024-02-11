import React from 'react';
import { FaHome } from 'react-icons/fa';

const Introduction = () => {
    return (
        <div>
            <div className='mt-8'>
                <button className='flex items-center gap-4 py-2 px-4 border-b-2 font-bold md:text-lg rounded-2xl border-emerald-800 text-white btn-outline uppercase'><FaHome/> Introduction</button>
            </div>
            <div className='py-12 uppercase space-y-4'>
                <p className='text-center text-[33px] font-bold'>Hello! This is <br /><span className='text-[#9204BE] text-[39px]'>Hasan Masud</span></p>
                <p className='text-center text-[19px] font-bold'>Full-Stack Software Engineer</p>
            </div>
        </div>
    );
};

export default Introduction;