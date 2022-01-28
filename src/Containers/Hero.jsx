// Css
import '../Styles/Containers/Hero.css'
import '../Styles/Components/Button.css'
//Components
import NavBar from '../Components/NavBar';
//Animations
import Flip from 'react-reveal/Fade';
import { Zoom, Fade } from 'react-reveal';

const Hero = () => {
    return (
        <div className='h-auto md:h-screen bg-primary' id='hero'>
            <NavBar />
            <div className="hero-container">
                <div className='hero-content'>
                    <Flip left delay={500} duration={1500}>
                        <h4 className='text-textColor2 text-xl font-semibold flex items-center mt-3'><span className='heymoji text-3xl'> 👋🏼 </span> Hey there! My name is</h4>
                    </Flip>
                    <Flip top duration={1500}>
                        <h2 className='text-6xl font-semibold my-3'>Emre Kara</h2>
                    </Flip>
                    <Flip bottom duration={1500}>
                        <h3 className='text-3xl text-textColor3'>I'm a passionate Frontend Developer!</h3>
                    </Flip>
                    <Fade duration={1500}>
                        <p className='mt-4 w-11/12 md:w-9/12'>🌱 I’m currently learning everything about frontend. <br /> 🧐 I'm a selft-taught learner. <br /> ❤️ I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. </p>
                    </Fade >
                    <Flip left delay={500} duration={1500}>
                        <button className='btn btn__cta flex justify-center items-center'> <a href="https://drive.google.com/file/d/1rhTj5MtokI86dcK7M8y1hmTayrIX_1JG/view?usp=sharing" target={"_blank"}> <span className='text-xl'> 🖨 </span>Checkout my resume!</a> </button>
                    </Flip>
                </div>
                <Zoom delay={1000} duration={1500}>
                    <div className='avatar'>
                        <img className='rounded-full w-48 lg:w-9/12 p-2 border lg:border-none ' src="https://avatars.githubusercontent.com/u/83719052?v=4" alt="avatar" />
                    </div>
                </Zoom>
            </div>
        </div>
    )
};

export default Hero;
