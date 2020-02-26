import React,{ Fragment } from 'react';
import { Link  } from 'react-router-dom';
import './Navbar.css';
import logImg from '../Header/headerImgs/logo.svg';

const Navbar = () =>{



    function navBut(){
        let navScreen = document.getElementById('nav-screen');
        navScreen.classList.toggle('active-nav');
    }

    return(
        <Fragment>
           <div className="navbar">
               <div className="logo">
                    <Link to="/">
                       <img src = { logImg } alt="robita" height="70" width="300" />
                    </Link>
               </div>
               <ul>
                   <li><a href="/#">Features <i className="fas fa-angle-down"></i></a></li>
                   <li><Link to="/plan">Plans & Pricing</Link></li>
                   <li><a href="/#">Resources <i className="fas fa-angle-down"></i></a></li>
               </ul>
    
               <div className="sign">
                <div>
                    <a className="signIn" href="/#"><h4>Sign In</h4></a>
                    <a className="start" href="/#"><h4>Start For Free</h4></a>
                </div>
               </div>
               <div>
               <div className="screen-but" onClick={ navBut } id="screenBut">
                   <div className="line1"></div>
                   <div className="line2"></div>
                   <div className="line3"></div>
               </div>
               </div>
           </div>
            <div className="nav-screen" id="nav-screen">
                <ul>
                    <li><a href="/#">Features <i className="fas fa-angle-down"></i></a></li>
                    <li><Link to="/plan">Plans & Pricing</Link></li>
                    <li><a href="/#">Resources <i className="fas fa-angle-down"></i></a></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;