import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => (    //children matlab type mei jo name hoga ya jo name humhe dena hai button ko wo pass hoga
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >   
        {children}
    </button>
);

export default CustomButton;