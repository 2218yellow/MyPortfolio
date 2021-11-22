import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="head-wrapper">
        <div className="main-info">
        <h1> <strong>Ndumiso's Portfolio</strong></h1>
        <Typed
        className = "typed-text"
        strings={["Web Design", "And", "Web Development"]}
        typeSpeed = {40}
        backSpeed = {60}
        loop
        />
   

        </div>  
        </div>
    )
}

export default Header
