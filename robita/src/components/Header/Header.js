import React from 'react';
import "./header.css";
const Header = ()=>{
    // start animate the header
   
    //end animate the header
    return(
        <section className="header" id='header'>
        <div className="header-content">
             <h2>FAST. EASY. RELIABLE. REDESIGNED.</h2>
             <h4>Kick some business with Robita</h4>
             <div className="header-content-but">
               <a href="/#"><h4>Start For Free</h4></a>
             </div>
        </div>
        </section>
    )
}

export default Header;