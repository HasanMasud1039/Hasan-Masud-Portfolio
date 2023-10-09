import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from '../Sidebar/Sidebar';
import Introduction from '../HomePages/Introduction';
import AboutMe from '../HomePages/AboutMe';
import MySkills from '../HomePages/MySkills';
import Projects from '../HomePages/Projects';
import Education from '../HomePages/Education';
import Contact from '../HomePages/Contact';
import Navbar from '../Navbar/Navbar';

AOS.init();

function Home() {
  const introduceRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experiencesRef = useRef(null);
  // const educationRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative rounded-2xl container mx-auto py-6 bg-amber-50">
      <div className="grid sm:grid-cols-1 lg:grid-cols-12">
        {/* <div className="lg:col-span-3">
          <Sidebar />
        </div> */}

        <div className="col-span-11 pl-0 lg:pl-16">
          <div ref={introduceRef}>
            <Introduction />
          </div>
          <div ref={aboutRef} className='mt-8'>
            <AboutMe />
          </div>
          <div ref={skillsRef} className='mt-20'>
            <MySkills />
          </div>
          <div ref={projectsRef} className='mt-20'>
            <Projects />
          </div>
          <div ref={experiencesRef} className='mt-20'>
            <Education />
          </div>{' '}
          {/* <div ref={educationRef}>
            <Education />
          </div> */}
          <div ref={contactRef} className='mt-20'>
            <Contact />
          </div>
        </div>
        <div className="lg:col-span-1">
          <Navbar
            scrollToIntroduce={() => scrollToSection(introduceRef)}
            scrollToAbout={() => scrollToSection(aboutRef)}
            scrollToSkills={() => scrollToSection(skillsRef)}
            scrollToProjects={() => scrollToSection(projectsRef)}
            scrollToExperiences={() => scrollToSection(experiencesRef)}
            // scrollToEducation={() => scrollToSection(educationRef)}
            scrollToContact={() => scrollToSection(contactRef)}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;