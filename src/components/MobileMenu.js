import React from "react";
import { StyledMobileMenu, StyledMobileLink } from "./MobileMenuElements";
/* This components handles all the routes for my Mobile Menu using
   Styled components */
const MobileMenu = ({handleMobileMenuToggle}) => {
  return (
    <StyledMobileMenu>
      <StyledMobileLink to="/">Home</StyledMobileLink>
      <StyledMobileLink to="/about">About</StyledMobileLink>
      <StyledMobileLink to="/skillset">Skill Set</StyledMobileLink>
      <StyledMobileLink to="/contact">Contact</StyledMobileLink>
      
    </StyledMobileMenu>

  )
}

export default MobileMenu;

