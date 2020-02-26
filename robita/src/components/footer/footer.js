import React from 'react';
import './footer.css';
import logImg from '../Header/headerImgs/logo.svg';

const Footer = () =>{
   return(
    <section className="footer">
    <div className="container">
        <div>
            <div className="logo">
                <a href="/#">
                   <img src= { logImg } height="70" width="300" alt="robita" />
                </a>
           </div>
           <p>
               Robita the best to improve your meeting.Robita the best to improve your meeting.
           </p>
        </div>
        <div>
            <ul>
                <li><a href="/#">How It Works?</a></li>
                <li><a href="/#">Get the App</a></li>
                <li><a href="/#">Terms of Service</a></li>
                <li><a href="/#">Parteners</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="/#">FAQs</a></li>
                <li><a href="/#">Editor Help</a></li>
                <li><a href="/#">Life Chatting</a></li>
                <li><a href="/#">Contact Us</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="/#">Twitter</a></li>
                <li><a href="/#">Facebook</a></li>
                <li><a href="/#">Instagram</a></li> 
                <li><a href="/#">Dribbble</a></li>
            </ul>
        </div>
    </div>
</section>

   )
}

export default Footer;