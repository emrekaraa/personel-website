// Css
import '../Styles/Containers/Hero.css'
import '../Styles/Components/Button.css'
//Components
import NavBar from '../Components/NavBar';
import Button from '../Components/Button';
//Animations
import { Fade, Zoom } from "react-awesome-reveal";
import ScrollUp from '../Components/ScrollUp';

const Hero = () => {
    return (
        <div className='h-auto md:h-screen bg-primary' id='hero'>

            <NavBar />

            <div className="hero-container">
                <div className='hero-content'>
                    <Fade triggerOnce direction='left' duration={1500}>
                        <h4 className='text-textColor2 text-xl font-semibold flex items-center mt-3'><span className='heymoji text-3xl'> 👋🏼 </span> Hey there! My name is</h4>
                    </Fade>
                    <Zoom triggerOnce duration={1500}>
                        <h2 className='text-6xl font-semibold my-3'>Emre Kara</h2>
                        <h3 className='text-3xl text-textColor3'>I'm a passionate Frontend Developer!</h3>
                    </Zoom >
                    <Zoom triggerOnce duration={1500}>

                        <p className='mt-4 w-11/12 md:w-9/12 mx-auto lg:mx-0'>🌱 I’m currently learning everything about frontend. <br /> 🧐 I'm a selft-taught learner. <br /> ❤️ I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. </p>

                    </Zoom >
                    <Fade triggerOnce direction='left' duration={1500}>
                        <Button> <a href="https://drive.google.com/file/d/1rhTj5MtokI86dcK7M8y1hmTayrIX_1JG/view?usp=sharing" target={"_blank"}> <span className='text-xl'> 🖨 </span>Checkout my resume!</a> </Button>
                    </Fade>
                </div>
                <Zoom triggerOnce duration={1500}>
                    <div className='avatar'>
                        <img className='rounded-full w-48 lg:w-9/12 p-2 border lg:border-none ' src="https://avatars.githubusercontent.com/u/83719052?v=4" alt="avatar" />
                    </div>
                </Zoom>
            </div>

            <ScrollUp />

        </div>
    )
};

export default Hero;
