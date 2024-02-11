import { LiaBriefcaseSolid, LiaEnvelopeSolid, LiaHomeSolid, LiaShapesSolid, LiaUserSolid } from 'react-icons/lia';
import { IoGridOutline } from 'react-icons/io5';
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
import { FaSchool } from 'react-icons/fa6';
import { MdOutlineCastForEducation } from 'react-icons/md';
// import { PiGraduationCap } from 'react-icons/pi';

const Navbar = ({
  scrollToIntroduce,
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToExperiences,
  scrollToEducation,
  scrollToContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
      <div className="hidden absolute md:block top-1/6 right-[14%] transform-translate-y-1/2 translate-x-full lg:fixed">
        <div className="text-3xl text-white border-l-4 border-violet-600 rounded-full space-y-5 px-5 py-8">

          <div id="introduce" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToIntroduce}>
              <LiaHomeSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px] text-blue-400  text-zinc-500  transition duration-300">
                Home
            </span>
          </div>
          <div id="about" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToAbout}>
              <LiaUserSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px] text-blue-400  text-zinc-500  transition duration-300">
                About
            </span>
          </div>
          <div id="skills" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToSkills}>
              <LiaShapesSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px] text-blue-400  text-zinc-500  transition duration-300">
                Skills
            </span>
          </div>
          <div id="projects" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToProjects}>
              <IoGridOutline />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px] text-blue-400  text-zinc-500  transition duration-300">
                Projects
            </span>
          </div>
          <div id="experiences" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToExperiences}>
              <LiaBriefcaseSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px] text-blue-400  text-zinc-500  transition duration-300">
                Experience
            </span>
          </div>
          <div id="experiences" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToEducation}>
              <MdOutlineCastForEducation/>
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px] text-blue-400  text-zinc-500  transition duration-300">
                Education
            </span>
          </div>
          <div id="contact" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToContact}>
              <LiaEnvelopeSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px]  text-blue-400  transition duration-300">
                Contact
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation  */}
      <div className="md:hidden w-full">
        <div
          id="nav icon"
          className="text-4xl fixed top-6 left-8"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HiBars3 />
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 bg-zinc-300 rounded-xl font-semibold opacity-90 ">
            <div>
              <div
                className="absolute top-4 right-2 text-3xl"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <IoCloseCircleSharp />
              </div>
              <ol className="mt-6 pr-12 px-6 py-0 text-violet-800 text-lg leading-[40px] tracking-wide">
                <div id="introduce" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToIntroduce}>Introduction</a>
                </div>
                <div id="about" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToAbout}>About</a>
                </div>
                <div id="skills" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToSkills}>Skills</a>
                </div>
                <div id="projects" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToProjects}>Projects</a>
                </div>
                <div id="experiences" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToExperiences}>Experience</a>
                </div>
                <div id="education" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToEducation}>Education</a>
                </div>
                <div id="contact" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToContact}>Contact</a>
                </div>
              </ol>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;