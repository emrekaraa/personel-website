import React, { useState } from 'react';
import menu4 from 'react-useanimations/lib/menu4';
import UseAnimations from 'react-useanimations';
import { Link } from 'react-scroll';
import "../Styles/Navbar.css"

const NavBar = () => {

    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(prev => !prev);
    }
    return (
        <header id='header'>
            <nav className='flex items-center'>

                <button onClick={handleClick}>
                    <UseAnimations animation={menu4} size={32} strokeColor="white" />
                </button>

                <ul className={`${show ? "items-show" : "items"}`}>
                    <li className='mr-2'><Link className='cursor-pointer' to={"tech-stack"} spy={true} offset={-50} smooth={true} duration={500}>Tech-Stack</Link></li>
                    <li className='mx-2'><Link className='cursor-pointer' to={"projects"} spy={true} offset={-50} smooth={true} duration={500}>Projects</Link></li>
                    <li className='mx-2'><Link className='cursor-pointer' to={"contact"} spy={true} offset={-50} smooth={true} duration={500}>Contact</Link></li>
                </ul>

            </nav>

        </header>
    );
};

export default NavBar;
