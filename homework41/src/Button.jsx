import React from "react";
import './App.css';

const Button = ({ children, ...props }) => {

    return (
        <button className="myBtn" {...props}>
            {children}
        </button>
    )
};

export default Button;