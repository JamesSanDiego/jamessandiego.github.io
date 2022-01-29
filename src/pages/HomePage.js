import React from "react";
import Fade from 'react-reveal/Fade';

/* My homepage background is imported via url in app.css*/

const HomePage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '90vh'}} className="background-img">

      <Fade right>

      <h1 style={{color:'white'}}>
        Hi, My Name is James San Diego!
      </h1>

      </Fade>
      
    </div>
  )
}

export default HomePage;