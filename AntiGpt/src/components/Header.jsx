import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
// import logo from "../assets/logo.png"
import {Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    let [open, setOpen] = useState(false);
    return (
        <>

            <div className='w-full fixed md:relative top-0 left-0 z-10 px-0 backdrop-blur-xl'>
                <div className='md:flex items-center justify-between relative py-4 md:px-10'>
                        <NavLink to="/" className='font-bold text-2xl cursor-pointer flex items-center'>
                            <img src="" className='h-10' alt="logo" />
                        </NavLink>
                        
                    <div onClick={() => setOpen(!open)} className='absolute right-8 top-5 cursor-pointer md:hidden w-7 h-7 '>
                        {
                            open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                        }
                    </div>
                    <ul className={`md:flex md:items-center md:bg-opacity-0 bg-shade3 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-0 transition-all duration-500 ease-in md:mt-0 mt-4 ${open ? 'duration-700 md:h-auto h-screen overflow-y-hidden' : 'top-[-490px]'}`}>
                        
                                <li className='md:ml-8 md:my-0 font-semibold md:text-shade4 text-shade1 mt-10 tracking-wider flex flex-col items-center gap-10 sm:col-auto md:flex md:flex-row'>
                                    <NavLink to="/" className='hover:text-gray-700 duration-500 hover:text-shade2'>
                                        Home
                                    </NavLink>

                                    <NavLink to="/Product" className='hover:text-gray-700 duration-500 hover:text-shade2'>
                                        Product
                                    </NavLink>

                                    {/* <NavLink to="/Contact" className='hover:text-gray-700 duration-500 hover:text-shade2'>
                                        Contact
                                    </NavLink> */}

                                    <NavLink to="/About" className='hover:text-gray-700 duration-500 hover:text-shade2'>
                                        About
                                    </NavLink>

                                    <NavLink to="/About" className='flex items-center hover:text-gray-700 duration-500 hover:text-shade2 border-2 px-3 py-1'>
                                        Sign Up <FaArrowRight className="rotate-[-45deg] ml-1"/>
                                    </NavLink>
                                    
                                </li>
                    </ul>
                </div>
            </div>
            </>
    )
}

export default Header;

