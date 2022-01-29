import React from "react";
import { Nav, NavLink, NavMenu } from '../components/NavBarElements';

/* This component will hold ALL the routes for my main navigation bar
   using styled components */
const NavBar = () => {

  return (
    <>
      <Nav >
        <NavLink to="/">
        <h1 style={{color:'white'}}>James San Diego</h1>
        </NavLink>

        <NavMenu>
          <NavLink to="/" activestyle="true" >
            Home
          </NavLink>
          
          <NavLink to="/about" activestyle="true" >
            About
          </NavLink>

          <NavLink to="/skillset" activestyle="true" >
            Skill Set
          </NavLink>

          {/* <NavLink to="/projects" activestyle="true">
            Projects
          </NavLink> */}

          <NavLink to="/contact" activestyle="true" >
            Contact
          </NavLink>

        </NavMenu>

      </Nav>
    
    </>
  )
}

export default NavBar;