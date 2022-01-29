import { useState, useEffect } from 'react';
import UseAnimations from 'react-useanimations';
import ArrowUp from 'react-useanimations/lib/arrowUp';

import { Link } from 'react-scroll';

const ScrollUp = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 300 ? setShowScroll(true) : setShowScroll(false);
        });
    }, []);



    return (
        <>
            {showScroll && <Link href='#header' className='hidden md:block fixed bottom-10 right-14 border-2 rounded-full p-1' to={"header"} spy={true} hashSpy={"projects"} smooth={true} duration={1000}>
                <UseAnimations animation={ArrowUp} size={26} strokeColor="white" autoPlay={true} loop={true} />
            </Link>}

        </>)
};

export default ScrollUp;
