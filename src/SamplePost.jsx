import React from 'react';
import Navigation from './Navigation';
import SamplePostHeader from './SamplePostHeader';
import SamplePostContent from './SamplePostContent';
import Footer from './Footer';

function SamplePost() {
    return (
        <div>
            <Navigation />
           <SamplePostHeader />
           <SamplePostContent />
            <Footer />
        </div>
    )
}
export default SamplePost;
