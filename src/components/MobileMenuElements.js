import { Link } from "react-router-dom";
import styled from "styled-components";

/* Using Styled Components */

export const StyledMobileMenu = styled.div`
display: none;
@media screen and (max-width: 768px){
  display: flex;
  background: #000;
  flex-direction: column;
  width 100%;
  height: 55vh;
  position: absolute;
  align-items: center;
  top: 80px;
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1;
}
`;

export const StyledMobileLink = styled(Link)`
@media screen and (max-width: 768px){
  color: white;
  text-align: center;
  padding: 2rem;
  width: 100%;
  display: table;
  text-decoration: none;
}
`;
