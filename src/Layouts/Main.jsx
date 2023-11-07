import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import Sidebar from '../Pages/Sidebar/Sidebar';
import './Main.css'
import Home from '../Pages/Home/Home';
import ParticleBackground from '../Pages/ParticleBackground/ParticleBackground';


const Main = () => {
    return (
        <div className='main md:pt-8 md:max-w-[82%] mx-auto md:px-2 bg-black text-white '>
            
            <div className='mt-8 md:block hidden'>
                <Sidebar></Sidebar>
            </div>
            <div className='h-min-screen ml-12 w-[90%]'>
                <Home></Home>
            </div>

        </div>
    );
};

export default Main;