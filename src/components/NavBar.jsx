import React, { useState } from 'react'
import { Link } from "react-scroll"

import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'About',
        },
        {
            id: 3,
            link: 'Portfolio',
        },
        {
            id: 4,
            link: 'Skills',
        },
        {
            id: 5,
            link: 'Contact',
        }
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-pink-400 fixed
     ">
            <div>
                <h1 className='text-5xl font-signature ml-2'>Shraddha</h1>
            </div>
            <ul className="hidden md:flex">

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-100 duration-150 
                 '>
                        <Link activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>{link}</Link>
                    </li>
                ))}






            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4
            z-10 text-white md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (


                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-pink-600 to-yellow-300 text-white">

                    {links.map(({ id, link }) => (
                        <li key={id} className=' px-4 cursor-pointer capitalize py-6 text-3xl'>
                            <Link onClick={() => setNav(!nav)} activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>{link}</Link>
                        </li>
                    ))}


                </ul>
            )}



        </div>
    );
};

export default NavBar
