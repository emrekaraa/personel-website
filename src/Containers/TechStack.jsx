// Css
import '../Styles/Containers/TechStack.css';
// Animations
import Fade from 'react-reveal/Fade';
// Icons
import {
    IoLogoJavascript,
    IoLogoReact,
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoSass
} from 'react-icons/io5';
import { SiTailwindcss, SiBootstrap, SiJquery, SiRedux } from 'react-icons/si'

const TechStack = () => {
    return (
        <div className='bg-secondary' id='tech-stack'>
            <div className='container lg:px-48 py-10'>
                <h1 className='text-4xl text-textColor2 font-bold text-center'>Tech Stack</h1>
                <ul className='tech-items'>
                    <Fade left delay={250} duration={1200}>
                        <li className='tech-item'><span><IoLogoHtml5 className='text-red-500 mr-2' /></span>HTML5</li>
                        <li className='tech-item'><span><IoLogoCss3 className='text-blue-400 mr-2' /></span>CSS3</li>
                        <li className='tech-item'><span><IoLogoSass className='text-pink-400 mr-2' /></span>Sass</li>
                        <li className='tech-item'><span><SiBootstrap className='text-purple-500 mr-2' /></span>Bootstrap</li>
                        <li className='tech-item'><span><SiTailwindcss className='text-blue-400 mr-2' /></span>Tailwind</li>
                        <li className='tech-item'><span><SiJquery className='text-orange-400 mr-2' /></span>jQuery</li>
                        <li className='tech-item'><span><IoLogoJavascript className='text-yellow-300 mr-2' /></span>JavaScript</li>
                        <li className='tech-item'><span><IoLogoReact className='text-blue-400 mr-2' /></span>ReactJs</li>
                        <li className='tech-item'><span><SiRedux className='text-purple-500 mr-2' /></span>Redux</li>
                    </Fade>
                </ul>
            </div>
        </div>)
};

export default TechStack;
