import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { MdOutlineCastForEducation } from "react-icons/md";

const Education = () => {
    const educations = [
        {
            id: '1',
            title: 'M.S. in Computer Science & Engineering',
            company_name: 'University of Chittagong, Bangladesh',
            link: 'https://cu.ac.bd/',
            date: 'Feb 2020 - Oct 2023',
        },
        {
            id: '2',
            title: 'B.Sc. in Computer Science & Engineering',
            company_name: 'University of Chittagong, Bangladesh',
            link: 'https://cu.ac.bd/',
            date: 'Jan 2015 - May 2019',
        },
        {
            id: '3',
            title: 'H.S.C.',
            company_name: 'Kulgaon City Corp. College, Chittagong, Bangladesh',
            link: 'https://kccc.edu.bd/',
            date: 'Jul 2012 - Mar 2014',
        },
        {
            id: '1',
            title: 'S.S.C.',
            company_name: 'Rangunia Khil Mogal Rashik High School, Chittagong, Bangladesh',
            link: 'https://www.sohopathi.com/rangunia-khilmogal-rashik-high-school/',
            date: '2010 - 2012',
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
                <button className='flex items-center gap-4 py-2 px-4 border-b-2 font-bold md:text-lg rounded-2xl border-emerald-800 text-white btn-outline uppercase'><MdOutlineCastForEducation className='text-2xl' />Education & Certification</button>
            </div>
            <h1 className='py-6 md:text-3xl text-xl font-bold flex justify-center text-emerald-600 uppercase'>Education</h1>

            <div className='font-bold md:text-lg'>
                <div>
                    <ol className="border-l border-emerald-800">
                        {educations.map((education) => (
                            <li key={education.id} className="group" data-aos="fade-left" data-aos-duration="1000">
                                <div className="flex">
                                    <div className="-ml-[6px] h-[12px] w-[12px] rounded-full bg-[#9204BE] group-hover:bg-primary"></div>

                                    <p className="text-emerald-600  mb-3 -mt-1.5 ml-[52px] group-hover:text-[primary]">{education.date}</p>
                                </div>

                                <div className="ml-14 mb-12 mt-2 w-fit">
                                    <h4 className="mb-1.5 section-subtitle">{education.title}</h4>
                                    <a href={education.link} className="mb-3 text-[#6F75FA]">{education.company_name}</a>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <h1 className='py-6 md:text-3xl text-xl font-bold flex justify-center text-[#03D05D] uppercase'>Certification</h1>
            <div className='font-bold md:text-lg'>
                <div>
                    <ol className="border-l border-emerald-800">
                        {certifications.map((certification) => (
                            <li key={certification.id} className="group" data-aos="fade-left" data-aos-duration="1000">
                                <div className="flex">
                                    <div className="-ml-[6px] h-[12px] w-[12px] rounded-full bg-[#9204BE] group-hover:bg-primary"></div>

                                    <p className="text-[#03D05D]  mb-3 -mt-1.5 ml-[52px] group-hover:text-primary">{certification.date}</p>
                                </div>

                                <div className="ml-14 mb-12 mt-2 w-fit">
                                    <div className='flex gap-4'>
                                        <h4 className="mb-1.5 section-subtitle">{certification.title}</h4>

                                        <a href={certification.certificateLink} className="mb-3 text-[#6F75FA]"><FaArrowUpRightFromSquare /></a>
                                    </div>
                                    <a href={certification.link} className="mb-3 text-[#6F75FA]">{certification.company_name}</a>
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