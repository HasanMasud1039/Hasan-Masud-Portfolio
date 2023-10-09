import { LiaBriefcaseSolid, LiaEnvelopeSolid, LiaHomeSolid, LiaShapesSolid, LiaUserSolid } from 'react-icons/lia';
import { IoGridOutline } from 'react-icons/io5';
import { HiBars3 } from 'react-icons/hi2';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { useState } from 'react';
// import { PiGraduationCap } from 'react-icons/pi';

const Navbar = ({
  scrollToIntroduce,
  scrollToAbout,
  scrollToSkills,
  scrollToProjects,
  scrollToExperiences,
  // scrollToEducation,
  scrollToContact,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="hidden  md:block top-1/4 right-[14%] transform-translate-y-1/2 translate-x-full fixed ">
        <div className="text-2xl text-emerald-800 border border-violet-800 rounded-full space-y-5 px-5 py-8">

        {/* <button class="relative group px-6 py-3 bg-blue-500 text-lime-300 hover:bg-blue-700 transition duration-300">
            <span className="hidden left-[150px] group-hover:block absolute inset-0 bg-red-300 text-blue-500  transition duration-300">
                Your Name
            </span>
            Hover Me
        </button> */}

          <div id="introduce" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToIntroduce}>
              <LiaHomeSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px]  text-zinc-500  transition duration-300">
                Home
            </span>
          </div>
          <div id="about" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToAbout}>
              <LiaUserSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px]  text-zinc-500  transition duration-300">
                About
            </span>
          </div>
          <div id="skills" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToSkills}>
              <LiaShapesSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px]  text-zinc-500  transition duration-300">
                Skills
            </span>
          </div>
          <div id="projects" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToProjects}>
              <IoGridOutline />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px]  text-zinc-500  transition duration-300">
                Projects
            </span>
          </div>
          <div id="experiences" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToExperiences}>
              <LiaBriefcaseSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px]  text-zinc-500  transition duration-300">
                Education
            </span>
          </div>
          {/* <div id="education" className="hover:text-primary cursor-pointer">
          <a onClick={scrollToEducation}>
            <PiGraduationCap />
          </a>
        </div> */}
          <div id="contact" className="hover:text-primary cursor-pointer relative group">
            <a onClick={scrollToContact}>
              <LiaEnvelopeSolid />
            </a>
            <span class="hidden left-[45px] group-hover:block absolute inset-0 text-[20px]  text-zinc-500  transition duration-300">
                Contact
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation  */}
      <div className="md:hidden w-full">
        <div
          id="nav icon"
          className="text-3xl fixed top-6 left-8"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <HiBars3 />
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 bg-black opacity-90">
            <div>
              <div
                className="absolute top-6 left-8 text-3xl"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <IoCloseCircleSharp />
              </div>
              <ol className="mt-12 pr-16 px-14 py-7 text-primary text-lg leading-[40px] tracking-wide">
                <div id="introduce" className="hover:text-primary cursor-pointer">
                  <a onClick={scrollToIntroduce}>Introduce</a>
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
                  <a onClick={scrollToExperiences}>Experiences</a>
                </div>
                {/* <div id="education" className="hover:text-primary cursor-pointer">
          <a onClick={scrollToEducation}>
            <PiGraduationCap />
          </a>
        </div> */}
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