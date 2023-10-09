import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import Sidebar from '../Pages/Sidebar/Sidebar';
import './Main.css'
import Home from '../Pages/Home/Home';


const Main = () => {
    return (
        <div className='main pt-8 max-w-[80%] mx-auto'>
                    <Sidebar></Sidebar>
            <div className='h-screen'>
                    <Home></Home>
            </div>
        </div>
    );
};

export default Main;