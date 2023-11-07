import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { LiaBriefcaseSolid } from 'react-icons/lia';

const Education = () => {
    const educations = [
        {
            id: '1',
            title: 'M.S. in Computer Science & Engineering',
            company_name: 'University of Chittagong, Bangladesh',
            link: 'https://cu.ac.bd/',
            date: 'Jan 2020 - Dec 2022',
        },
        {
            id: '2',
            title: 'B.Sc. in Computer Science & Engineering',
            company_name: 'University of Chittagong, Bangladesh',
            link: 'https://cu.ac.bd/',
            date: 'Jan 2015 - May 2019',
        },
    ];
    const certifications = [
        {
            id: '1',
            title: 'Complete Web Development Course',
            company_name: 'Programming Hero',
            link: 'https://web.programming-hero.com/home',
            date: 'Jan 20123 - July 2023',
            certificateLink:'/'
        },
        {
            id: '2',
            title: 'Bangladesh Miyazaki ICT Engineers Educational Training Project B-MEET',
            company_name: 'Miyazaki University, Japan & JICA, Bangladesh',
            link: 'https://cpc.northsouth.edu/BMEET',
            date: 'October 2023 - Nov 2023',
            certificateLink:'https://drive.google.com/file/d/1Ayyk8hxKE8x8BP7ppudOegnDoI_SV80e/view?usp=drive_link'
        },
        {
            id: '3',
            title: 'IPv6 Development in Enterprise Network',
            company_name: 'ICT Cell, University of Chittagong',
            link: 'https://ictcell.cu.ac.bd/',
            date: 'December 2018',
            certificateLink: 'https://drive.google.com/file/d/1Azvupx93vbkR2zAnd8wtVrOsnRM5jQt-/view?usp=sharing'
        },
    ];
    return (
        <div>
            <div className='mt-8'>
                <button className='btn btn-md font-bold md:text-lg rounded-2xl border-emerald-800 hover:bg-violet-800 text-white btn-outline'><LiaBriefcaseSolid className='text-2xl' />Education & Certification</button>
            </div>
            <h1 className='py-6 md:text-3xl text-xl font-bold flex justify-center text-emerald-800 uppercase'>Education</h1>

            <div className='font-bold md:text-lg'>
                <div>
                    <ol className="border-l border-emerald-800">
                        {educations.map((education) => (
                            <li key={education.id} className="group" data-aos="fade-left" data-aos-duration="1000">
                                <div className="flex">
                                    <div className="-ml-[6px] h-[12px] w-[12px] rounded-full bg-violet-800 group-hover:bg-primary"></div>

                                    <p className="text-emerald-800  mb-3 -mt-1.5 ml-[52px] group-hover:text-primary">{education.date}</p>
                                </div>

                                <div className="ml-14 mb-12 mt-2 w-fit">
                                    <h4 className="mb-1.5 section-subtitle">{education.title}</h4>
                                    <a href={education.link} className="mb-3 text-blue-700">{education.company_name}</a>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <h1 className='py-6 md:text-3xl text-xl font-bold flex justify-center text-emerald-800 uppercase'>Certification</h1>
            <div className='font-bold md:text-lg'>
                <div>
                    <ol className="border-l border-emerald-800">
                        {certifications.map((certification) => (
                            <li key={certification.id} className="group" data-aos="fade-left" data-aos-duration="1000">
                                <div className="flex">
                                    <div className="-ml-[6px] h-[12px] w-[12px] rounded-full bg-violet-800 group-hover:bg-primary"></div>

                                    <p className="text-emerald-800 mb-3 -mt-1.5 ml-[52px] group-hover:text-primary">{certification.date}</p>
                                </div>

                                <div className="ml-14 mb-12 mt-2 w-fit">
                                    <div className='flex gap-4'>
                                        <h4 className="mb-1.5 section-subtitle">{certification.title}</h4>

                                        <a href={certification.certificateLink} className="mb-3 text-blue-700"><FaArrowUpRightFromSquare /></a>
                                    </div>
                                    <a href={certification.link} className="mb-3 text-blue-700">{certification.company_name}</a>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Education;