import React from "react";
import {DiJavascript, DiPhp, DiHtml5, DiCss3, DiAngularSimple, DiReact, DiJqueryLogo, DiMysql,DiGit, DiJava, DiNodejs, DiMongodb, DiLinux, DiGithubBadge} from "react-icons/di";
import Fade from 'react-reveal/Fade';

/* This page will consist of different Icons representing my Skill Set*/

const SkillSet = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>
        My Skill Set
      </h1>
      <Fade right>

      <div className="Skill-set-grid">
        <DiJavascript size= '100px' className="Skill-set" title="JavaScript" color="#f0db4f"/> 

        <DiPhp size= '100px' className="Skill-set" title="PHP" color="#232531" /> 

        <DiHtml5 size= '100px' className="Skill-set" title="HTML5" color="#ff4500" /> 

        <DiCss3 size= '100px' className="Skill-set" title="CSS3" color="#264de4"  /> 

        <DiAngularSimple size= '100px' className="Skill-set" title="Angular" color="#dd1b16" /> 

        <DiReact size= '100px' className="Skill-set" title="React" color="#7cc5d9" /> 

        <DiJqueryLogo size= '100px' className="Skill-set" title="jQuery" color="#0769ad" /> 

        <DiMysql size= '100px' className="Skill-set" title="MySQL" color="#00758F" />

        <DiGit size= '100px' className="Skill-set" title="Git" color="#f34f29"/> 
 
        <DiJava size= '100px' className="Skill-set" title="Java" color="#f89820" /> 

        <DiNodejs size= '100px' className="Skill-set" title="Nodejs" color="#68a063" /> 

        <DiMongodb size= '100px' className="Skill-set" title="MongoDB" color="#4DB33D"/> 

        <DiLinux size= '100px' className="Skill-set" title="Linux" color="" />  

        <DiGithubBadge size= '100px' className="Skill-set" title="GitHub" color="#424242" /> 

      </div>

      </Fade>


    </div>
)
    

}

export default SkillSet;