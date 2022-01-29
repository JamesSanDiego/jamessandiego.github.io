import React from "react";
import { StyledToggle } from "./ToggleMenuElements";

/* This component, when clicked, will toggle my mobile menu using styled
   components */

const Toggle = ({handleMobileMenuToggle}) => {
  return(

    <StyledToggle onClick={handleMobileMenuToggle} />
  )
  
}

export default Toggle;

