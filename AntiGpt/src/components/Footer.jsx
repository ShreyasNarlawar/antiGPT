import React from 'react';
// import passport from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-500">
            <div className="w-full py-5 mx-auto px-10 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <NavLink to="/" className='flex items-center mb-4 sm:mb-0 w-20'>
                        <img src="" className="h-8 mr-3" alt="AntiGptLogo" />
                    </NavLink>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-200 sm:mb-0 ">
                        <NavLink to="/About">
                            <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
                        </NavLink>

                        <NavLink to="/Privacy_Policy">
                            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </NavLink>

                        <NavLink to="/Licensing">
                            <a href="#" className="hover:underline">Brand guidelines</a>
                        </NavLink>
                    </ul>
                </div>

                <hr className=" border-gray-200 sm:mx-auto my-5" />
                <ul className="flex flex-wrap my-2 items-center justify-center gap-8 text-gray-100">
                    <a href="#" className="hover:text-gray-300">
                    <FaLinkedin className=' text-xl'/>
                    </a>

                    <a href="#" className="hover:text-gray-300">
                    <FaDiscord className=' text-xl'/>
                    </a>

                    <a href="#" className="hover:text-gray-300">
                    <FaDribbble className=' text-xl'/>
                    </a>


                    <a href="#" className="hover:text-gray-300">
                    <FaGithub className=' text-xl'/>
                    </a>
                </ul>
            </div>
        </footer>


    )
};
``
export default Footer;