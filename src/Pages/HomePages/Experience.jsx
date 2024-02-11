import React from 'react';
import { LiaBriefcaseSolid } from 'react-icons/lia';

const Experience = () => {
    return (
        <div className='py-4'>
            <div className='mb-8'>
                <button className='flex items-center gap-4 py-2 px-4 border-b-2 font-bold md:text-lg rounded-2xl border-emerald-800 text-white btn-outline uppercase'><LiaBriefcaseSolid className='text-2xl' />Experience</button>
            </div>
            <div className='font-bold md:text-lg'>
                <div>
                    <ol className="border-l border-emerald-800">
                            <li className="group" data-aos="fade-left" data-aos-duration="1000">
                                <div className="flex">
                                    <div className="-ml-[6px] h-[12px] w-[12px] rounded-full bg-[#9204BE] group-hover:bg-primary"></div>
                                    <p className="text-emerald-600  mb-3 -mt-1.5 ml-[52px] group-hover:text-[primary]">Feb 2024</p>
                                </div>
                                <div className="ml-14 mb-12 mt-2 w-fit">
                                    <h4 className="mb-1.5 section-subtitle">Full Stack Software Engineer</h4>
                                    <a href='' className="mb-3 text-[#6F75FA]">Sagbrain Corporation</a>
                                    <p>Tokyo, Japan</p>
                                </div>
                            </li>
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default Experience;