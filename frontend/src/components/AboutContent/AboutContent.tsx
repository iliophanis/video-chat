import React from 'react';

const AboutContent: React.FC = () => {
 return (
  <div className="box">
   <h2 className="title is-2">About</h2>
   <div className="content">
    <p>Hello! Welcome to AUEB Video Chat by Ilias Theofanis Gravvanis.</p>
    <p>
     To test application, open app in two separate browsers tabs and sign in
     with your username in each browser.
    </p>
    <p>
     Video streaming between two peers works best between the same browsers. The
     video streams are not displayed on mobile browsers.
    </p>
   </div>
  </div>
 );
};

export default AboutContent;
