import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import Sidebar from '../Pages/Sidebar/Sidebar';
import './Main.css'
import Home from '../Pages/Home/Home';


const Main = () => {
    return (
        <div className='main md:pt-8 md:max-w-[80%] mx-auto md:px-2'>
            <div className='mt-8 md:block hidden'>
                <Sidebar></Sidebar>
            </div>
            <div className='h-screen w-screen'>
                <Home></Home>
            </div>
        </div>
    );
};

export default Main;