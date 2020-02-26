import React ,{ Fragment } from 'react';
//import Link from 'react-router-dom';
import Sections from './Sections/Sections';
import Header from './Header/Header';
import Footer from './footer/footer';

const Home =()=>{
    return(
    <Fragment>
      <Header />
      <Sections />
      <Footer />
    </Fragment>
    ) 
}

export default Home;