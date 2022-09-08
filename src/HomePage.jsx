import React from 'react';
import Footer from "./Footer";
import Header from './Header';
import MainContent from './MainContent';
function HomePage() {
    return (
        <div>
            

            <Header 
            url='url("assets/img/home-bg.jpg")' 
            h1='Clean Blog' 
            subheading='A Blog Theme by Start Bootstrap' />

            <MainContent />
            <Footer />
        </div>
    )
}

export default HomePage;