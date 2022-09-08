import React from 'react';
import Footer from "./Footer";
import Header from './Header';
import AboutContent from "./AboutContent";
function About(){
    return(
        <div>
            <Header  url="url('assets/img/about-bg.jpg')" h1="About Me"subheading="This is what I do."/>
            <AboutContent />
            <Footer />
       </div>  )
}
export default About;