import React from 'react';

const Button = ({ children }) => {
    return (<>
        <button className='btn btn__cta flex justify-center items-center'>{children}</button>
    </>)
};

export default Button;
