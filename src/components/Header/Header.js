import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [ menu, setMenu ] = useState(false);
    return (
        <div className="bg-gray-900 py-2">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <div className="logo">
                       <img className="w-32" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="" />
                    </div>
                    <div className="menu" id={menu ? 'hidden' : ''}>
                        <NavLink className="font-medium text-lg mx-4 capitalize text-white hover:text-green-600 transition-all duration-200 ease-in-out block sm:inline"  to="/home">Home</NavLink>
                        <NavLink className="font-medium text-lg mx-4 capitalize text-white hover:text-green-600 transition-all duration-200 ease-in-out block sm:inline"  to="/foods">Foods</NavLink>
                        <NavLink className="font-medium text-lg mx-4 capitalize text-white hover:text-green-600 transition-all duration-200 ease-in-out block sm:inline"  to="/contact">Contact</NavLink>
                        <NavLink className="font-medium text-lg mx-4 capitalize text-white hover:text-green-600 transition-all duration-200 ease-in-out block sm:inline"  to="/content">Content</NavLink>
                    </div>
                    <div className="social flex items-center">
                        <span className="text-xl cursor-pointer bg-white mx-2 w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out"><i class="fab fa-youtube"></i></span>
                        <span className="text-xl cursor-pointer bg-white mx-2 w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out"><i class="fab fa-facebook-f"></i></span>
                        <span className="text-xl cursor-pointer bg-white mx-2 w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out"><i class="fab fa-instagram"></i></span>
                        <span className="text-xl cursor-pointer bg-white mx-2 w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out"><i class="fab fa-linkedin-in"></i></span>
                        <span  onClick={()=>setMenu(!menu)}  className="text-xl cursor-pointer bg-red-700 mx-2 w-8 h-8 flex sm:hidden items-center justify-center hover:bg-red-500 text-white hover:text-green-600 transition-all duration-200 ease-in-out"><i class="fas fa-bars"></i></span>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;