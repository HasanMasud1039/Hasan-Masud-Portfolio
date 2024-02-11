import React, { useState } from 'react';
import { IoGridOutline } from 'react-icons/io5';
import cdaImg from '../../assets/cda/banner.png';
import jpImg from '../../assets/projects/JP.png'
import toyImg from '../../assets/projects/toy.png';
import gypsyImg from '../../assets/projects/gypsy.png'
import diabeticImg from '../../assets/projects/diabetic.png'
import iotImg from '../../assets/projects/iot.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import img1 from '../../assets/cda/banner.png'
// import img1 from 'https://i.ibb.co/W6BK8BN/tr.jpg'
import img2 from '../../assets/cda/login.png'
import img3 from '../../assets/cda/reg.png'
import img4 from '../../assets/cda/class_page.png'
import img5 from '../../assets/cda/comments.png'
import img6 from '../../assets/cda/popular_instructor.png'
import img7 from '../../assets/cda/admin_home.png'
import img8 from '../../assets/cda/add_class.png'
import img9 from '../../assets/cda/manageClass.png'
import img10 from '../../assets/cda/add_class.png'
import imgGT1 from '../../assets/GT/Page1.png'
import imgGT2 from '../../assets/GT/page2.png'
import imgGT3 from '../../assets/GT/dest.png'
import imgGT4 from '../../assets/GT/destRang.png'
import imgGT5 from '../../assets/GT/blog.png'
import imgGT6 from '../../assets/GT/tourPack.png'
import imgGT7 from '../../assets/GT/logingt.png'
import imgT1 from '../../assets/tz/1.png'
import imgT2 from '../../assets/tz/2.png'
import imgT3 from '../../assets/tz/3.png'
import imgT4 from '../../assets/tz/4.png'
import imgT5 from '../../assets/tz/5.png'
import imgT6 from '../../assets/tz/6.png'
import imgT7 from '../../assets/tz/7.png'
import imgT8 from '../../assets/tz/8.png'
import imgT9 from '../../assets/tz/9.png'
import imgT10 from '../../assets/tz/10.png'
import imgT11 from '../../assets/tz/11.png'
import imgT12 from '../../assets/tz/12.png'
import imgDR1 from '../../assets/DR/1.png'
import imgDR2 from '../../assets/DR/2.png'
import imgDR3 from '../../assets/DR/3.png'
import imgDR4 from '../../assets/DR/4.png'
import imgDR5 from '../../assets/DR/5.png'
import imgDR6 from '../../assets/DR/6.png'
import imgIOT1 from '../../assets/IOT/1.png'
import imgIOT2 from '../../assets/IOT/2.png'
import imgIOT3 from '../../assets/IOT/3.png'
import imgIOT4 from '../../assets/IOT/4.png'
import imgIOT5 from '../../assets/IOT/5.png'
import imgIOT6 from '../../assets/IOT/6.png'

const Projects = () => {

  const [CDAimage, setCDAImage] = useState(img1);
  const [GTimage, setGTImage] = useState(gypsyImg);
  const [TZimage, setTZImage] = useState(toyImg);
  const [DRimage, setDRImage] = useState(diabeticImg);
  const [IOTimage, setIOTImage] = useState(iotImg);
  const projects = [
    {
      id: '1',
      name: "Champions Development Academy: Summer Camp Learning School",
      description:
        "The summer sports school Champions Development Academy provides a variety of courses and extracurricular opportunities for kids of all ages. Our website offers students a simple way to sign up for programs, look up skilled instructors, and keep track of their educational progress. The Academy's activities can be managed by the admin. The user experience is improved by the website's appealing visual design and intriguing layout.",
      tags: ['Express.js', 'MongoDB', 'JWT', 'React', 'Tanstack Query', 'Firebase', 'Stripe', 'Tailwind'],
      image: CDAimage,
      slideImg: [img1, img2, img4, img5, img6, img7, img8],
      clientRepo: 'https://github.com/HasanMasud1039/Champions-Development-Academy-Client-side',
      serverRepo: 'https://github.com/HasanMasud1039/Champions-Development-Academy-Server',
      demo: 'https://champions-development-academy.web.app/',
      note: 'Admin Email: champion@gmail.com , Admin Password: A1a@.!#Z0Z'
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
      id: '2',
      name: 'Toy Zone: A Toy Marketplace',
      image: TZimage,
      slideImg: [toyImg, imgT1, imgT3, imgT2, imgT4, imgT5, imgT6, imgT7, imgT8, imgT9, imgT10, imgT11, imgT12],
      description:
        'Toy Zone is an online platform where users can explore and purchase various kinds of vehicles toys. This marketplace provides a wide range of toys along with detailed information, pricing, available quantity, and seller information for each toy. In addition, authenticated sellers have the ability to upload, update, and delete their toy products.',
      tags: ['MongoDB', 'Express.js', 'React', 'Node,js', 'Firebase', 'AOS', 'Tailwind'],
      clientRepo: 'https://github.com/HasanMasud1039/toy-zone-client',
      serverRepo: 'https://github.com/HasanMasud1039/toy-zone-server',
      demo: 'https://toy-zone-727ba.web.app/',
    },
    {
      id: '3',
      name: 'GypsyTales: Travel Planner',
      image: GTimage,
      slideImg: [gypsyImg, imgGT1, imgGT2, imgGT3, imgGT4, imgGT5, imgGT6, imgGT7],
      description:
        'This is a travel agency website where user can select their destination, make booking, get alert before tour, make payment, select tour package, see the details. Admin can see the bookings, see payment details and send notification to users.',
      tags: ['Express.js', 'React', 'React Router', 'Firebase', 'CSS', 'Tailwind'],
      clientRepo: 'https://github.com/HasanMasud1039/GypsyTales',
      serverRepo: 'https://github.com/HasanMasud1039/GypsyTales-FullStack/tree/main/GypsyTales_Server',
      demo: 'https://gypsytales-56c6f.web.app/',
    },

    // {
    //   id: '4',
    //   name: 'The Japanese Taste: A Japanese Recipe Website',
    //   image: jpImg,
    //   description:
    //     'This website contains recipes. You can find information on the chefs and delectable Japanese cuisine. There are also recently added recipes available.',
    //   tags: ['Express.js', 'React', 'React Router', 'Firebase', 'CSS', 'Tailwind'],
    //   clientRepo: 'https://github.com/HasanMasud1039/taste-of-japan-client',
    //   serverRepo: 'https://github.com/HasanMasud1039/taste-of-japan-server',
    //   demo: 'https://taste-of-japan-80317.web.app/services',
    // },
    {
      id: '5',
      name: 'An Efficient System for Detecting Diabetic Retinopathy using SVM',
      image: DRimage,
      slideImg: [diabeticImg, imgDR1, imgDR2, imgDR3, imgDR4, imgDR5, imgDR6],
      description: "Diabetic Retinopathy (DR) is an eye disease caused by diabetes. Damage to the blood vessels of the light-sensitive tissue in the rear of the eye causes this condition (retina). Diabetic retinopathy may cause no symptoms or just minor vision abnormalities at first. However, it has the potential to cause blindness. Anyone with type 1 or type 2 diabetes can develop the illness. The longer you have diabetes and the less well your blood sugar is regulated, the more probable you are to acquire this vision problem. The objective of this project is to develop a method using Support Vector Machine(SVM) for detection and classification of diabetic retinopathy from digital colour fundus images of the retina.",
      tags: ['Matlab', 'Image Processing', 'SVM', 'Machine Learning'],
      serverRepo: 'https://github.com/HasanMasud1039/An-Efficient-System-for-Diabetic-Retinopathy-Detection-using-SVM',
      // serverRepo: 'https://github.com/HasanMasud1039/taste-of-japan-server',
      // demo: 'https://taste-of-japan-80317.web.app/services',
    },
    {
      id: '6',
      name: 'A Smart LPG Leakage Detection, Measurement and Alert System using Arduino',
      image: IOTimage,
      slideImg: [iotImg, imgIOT1, imgIOT2, imgIOT3, imgIOT4, imgIOT5, imgIOT6],
      description:
        'Large number of people are using LPG (Liquefied Petroleum Gas) instead of natural gas or other fuel. While using LPG cylinder, there is a risk of leakage of gas, explosion of the cylinder and a great fire. A system is built to detect the gas leakage and make the people alert. This system also measures the gas weight remains in cylinder and sends an alert message when it reaches below 20% to refill the cylinder.',
      tags: ['IOT', 'Arduino', 'Sensor', 'C++'],
      serverRepo: 'https://github.com/HasanMasud1039/IoT-Based-LPG-Leakage-Detection-Measurement-Alert-System',
      demo: 'https://www.youtube.com/watch?v=6Qi0v5xBetc',
    },
  ];

  const handleImg = (slideImg, id) => {
    if (id == 1) {
      setCDAImage(slideImg);
    }
    else if (id == 2) {
      setGTImage(slideImg)
    }
    else if (id == 3) {
      setTZImage(slideImg)
    }
    else if (id == 5) {
      setDRImage(slideImg)
    }
    else if (id == 6) {
      setIOTImage(slideImg)
    }
  }

  return (
    <div>
      <div className='mt-8'>
        <button className='flex items-center gap-4 py-2 px-4 border-b-2 font-bold md:text-lg rounded-2xl border-emerald-800 text-white btn-outline uppercase'><IoGridOutline className='text-2xl' />Projects</button>
      </div>
      <div className="pt-[50px] pb-[90px]">
        {projects.map((project, index) => (
          <div key={index} data-aos="fade-up" data-aos-duration="1000" className=' border-2 space-y-8 gap-8 my-8 bg-cyan-50 rounded-2xl'>
            <p className="mt-5 md:text-3xl font-subtitle text-black font-serif font-semibold text-center hover:underline">{project.name}</p>
            <div className="">
              <div className="flex justify-end">
                {
                  project.demo ?
                    <span className="bg-cyan-300 border-2 text-black  hover:bg-purple-400 hover:text-white md:px-5 px-2 py-2 mx-1 md:text-md text-sm md:font-semibold rounded-xl shadow-xl">
                      <a href={project?.demo} rel="noreferrer" target="_blank">
                        Live Demo
                      </a>
                    </span> : <></>
                }
                {
                  project.clientRepo ?
                    <span className="bg-black border-2 text-white hover:bg-violet-800 md:px-5 px-2 py-2 mx-1 md:text-md text-sm md:font-semibold rounded-xl shadow-xl">
                      <a href={project?.clientRepo} rel="noreferrer" target="_blank">
                        Client
                      </a>
                    </span>
                    : <></>
                }
                {
                  project.serverRepo ?
                    <span className="bg-black border-2 text-white hover:bg-violet-800 md:px-5 px-2 py-2 mx-1 md:text-md text-sm md:font-semibold rounded-xl shadow-xl">
                      <a href={project?.serverRepo} rel="noreferrer" target="_blank">
                        Server
                      </a>
                    </span>
                    : <></>
                }
                {
                  project.description ?
                    <div className="mt-0">
                      <button className="bg-black border-2 text-white hover:bg-violet-800 md:px-5 px-2 py-2 mx-1 md:text-md text-sm md:font-semibold rounded-xl shadow-xl" onClick={() => document.getElementById(`${project.id}`).showModal()}>Doc</button>
                      <dialog id={project.id} className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-error">✕</button>
                          </form>
                          <p className="py-2 text-center font-bold text-black">{project.name}</p>
                          <p className="py-2 text-black">{project.description}</p>

                        </div>
                      </dialog>
                    </div>
                    : <></>
                }

              </div>
              <div className='md:w-full w-80 border'>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper">
                  {
                    project.slideImg.map((slide) => <SwiperSlide
                    >
                      <div className='' onClick={() => handleImg(slide, project.id)}>
                        <img src={slide} alt="" className='md:w-full md:h-full' />
                      </div>
                    </SwiperSlide>)
                  }
                </Swiper>

              </div>
              <div className="my-2">
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