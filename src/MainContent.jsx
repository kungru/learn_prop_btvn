import React from 'react';
import PostPreview from './PostPreview';
const MainContent = () => {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          <PostPreview check={true} 
          title='Man must explore, and this is exploration at its greatest' 
          subtitle='Problems look mighty small from 150 miles up' />

          <PostPreview 
          title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine." />
          
          <PostPreview check={true} 
          title='Science has not yet mastered prophecy' 
          subtitle='We predict too much for the next year and yet far too little for the next ten.' />

          {/* Pager*/}
          <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
        </div>
      </div>
    </div>



  )
};

export default MainContent;