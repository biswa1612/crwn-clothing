import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps}) => (    //children matlab type mei jo name hoga ya jo name humhe dena hai button ko wo pass hoga
    <button className="custom-button" {...otherProps} >   
        {children}
    </button>
);

export default CustomButton;