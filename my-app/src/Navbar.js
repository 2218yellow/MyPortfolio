import React from "react"
import myLogo from "./logo.png";




//REACT FONT AWESOME

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
        <a class="navbar-brand" href="wait"> <img className = "logo" src={myLogo} alt="logo..." /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/my-app/src/Header.js">Home </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="./About.js">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="wait">Contact</a>
            </li> */}
          </ul>
         
        </div>
        </div>
      </nav>
    )
}

export default Navbar
