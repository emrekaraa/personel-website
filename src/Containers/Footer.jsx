import UseAnimations from 'react-useanimations';
import ArrowDown from 'react-useanimations/lib/arrowDown'
import { BsGithub, BsInstagram, BsLinkedin, BsStackOverflow, BsTwitter } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="bg-primary">
            <div className='container md:px-48 py-10 flex flex-col items-center lg:block'>
                <h4 className="text-sm flex items-center">Don't forget to fallow me <UseAnimations animation={ArrowDown} size={26} strokeColor="white" autoPlay={true} loop={true} speed={1.5} /></h4>

                <div className='flex items-center justify-between mt-3 text-2xl w-52'>
                    <a href="https://github.com/emrekaraa"><BsGithub /></a>
                    <a href="https://www.linkedin.com/in/emrekaraa/"><BsLinkedin /></a>
                    <a href="https://twitter.com/EmreKara_a"><BsTwitter /></a>
                    <a href="https://www.instagram.com/emrekara_a"><BsInstagram /></a>
                    <a href="https://stackoverflow.com/users/15897548/emre-kara"><BsStackOverflow /></a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
