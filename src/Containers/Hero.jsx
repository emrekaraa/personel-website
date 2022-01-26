import React from 'react';
import NavBar from '../Components/NavBar';
import '../Styles/Hero.css'

const Hero = () => {
    return (
        <div className='h-screen'>

            <NavBar />

            <div className="hero-container">

                <div className='flex flex-col'>
                    <h4 className='text-textColor2 text-2xl'><span className='heymoji'> 👋🏼 </span> Hey there! My name is</h4>
                    <h2 className='text-6xl font-bold'>Emre Kara.</h2>
                    <h3 className='text-3xl text-textColor3'>I build beautiful things for the web!</h3>
                    <p>I'm a freshly graduated Frontend Developer who builds interfaces for users to have great experiences, <br />trying to improve himself on the web and enjoys it.</p>
                    <button>Check out my resume!</button>
                </div>

                <div className="hero-image">
                    <img className='rounded-full w-52 lg:w-60' src="https://avatars.githubusercontent.com/u/83719052?v=4" alt="avatar" />
                </div>

            </div>

        </div>
    )
};

export default Hero;
