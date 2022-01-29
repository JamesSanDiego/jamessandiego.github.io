import React from "react";
import Image from "../images/jmsandiego.jpg";
import Fade from 'react-reveal/Fade';

/* About Me page */

const AboutMe = () => {
  return (
    <div>

      <h1 style={{textAlign: 'center'}}>About Me</h1>

      <div className="About-Me-Grid">

        <Fade left>
        <img src={Image} alt='Me' width={350} height={500} style={{borderRadius:'50px'}}/>
        </Fade>

        <Fade right>
        <p className="About-Me">
          My name is James San Diego, and I have recently completed my Computer Programming diploma
          at Sheridan College. I am currently seeking an entry-level job in web development that will
          allow me to improve my skills. Specifically, front-end development. 
          <br /> <br />
          I decided to create this website from scratch using React to showcasing my 
          skills to employers. Once I start adding projects to my resume, I will
          add a "Projects" section to my website for employers to view.
          <br/><br/>
          When I'm not working on any projects, I'm most likely hanging out with friends or eating good food!
          <br/> <br/>
          My genuine interest in technological advancements and web development
          will make me a great asset to any team. Let's work!
        </p>
        
        </Fade>

      </div>

    </div>
  )
  
}

export default AboutMe;