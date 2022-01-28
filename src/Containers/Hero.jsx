import NavBar from '../Components/NavBar';
import '../Styles/Hero.css'
import '../Styles/Components/Button.css'


const Hero = () => {


    return (
        <div className='h-screen'>

            <NavBar />

            <div className="hero-container">

                <div className='hero-content'>
                    <h4 className='text-textColor2 text-xl font-semibold flex items-center mt-3'><span className='heymoji text-3xl'> 👋🏼 </span> Hey there! My name is</h4>
                    <h2 className='text-6xl font-semibold my-3'>Emre Kara</h2>
                    <h3 className='text-3xl text-textColor3'>I'm a passionate Frontend Developer!</h3>
                    <p className='mt-4 w-11/12 md:w-9/12'>🌱 I’m currently learning everything about frontend. <br /> 🧐 I'm a selft-taught learner. <br /> ❤️ I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. </p>
                    <button className='btn btn__cta flex justify-center items-center'> <a href="https://drive.google.com/file/d/1rhTj5MtokI86dcK7M8y1hmTayrIX_1JG/view?usp=sharing" target={"_blank"}> <span className='text-xl'> 🖨 </span>Checkout my resume!</a> </button>
                </div>

                <div className='avatar'>
                    <img className='rounded-full w-48 lg:w-9/12 p-2 border lg:border-none ' src="https://avatars.githubusercontent.com/u/83719052?v=4" alt="avatar" />
                </div>
            </div>
        </div>
    )
};

export default Hero;
