import React from "react";
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';
import Fade from 'react-reveal/Fade';

/* This page will contain links to my GitHub, LinkedIn*/

/* This page currently does not contain an email form because
   I do not want to pay a monthly subscription for a back-end server*/
const ContactMe = () => {
  return (
    <div>
        <h1 style={{textAlign:'center'}}>Contact Me</h1>
        <Fade right>
        <p style={{textAlign:'center'}}> You may contact me through email or one of the methods below!</p>
        <p style={{textAlign:'center'}}>jamessandiego15@gmail.com</p>

        <div className="Contact-Grid">

          <a href="https://www.linkedin.com/in/james-matthew-sandiego">
            <BsLinkedin size={100} className="Contact" title="LinkedIn"/> 
          </a>

          <a href="https://github.com/JamesSanDiego">
            <AiOutlineGithub size={100} className="Contact" title="GitHub" /> 
          </a>
          
        </div>
        </Fade>

    </div>
  )
}

export default ContactMe;