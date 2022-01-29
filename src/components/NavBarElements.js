import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

/* Using Styled Components to Style my Navigation Bar*/

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) /2);
z-index: 10;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1 rem;
height: 100%;
cursor: pointer;
margin:5px;

&.active{
  color:#15cdfc
}
`;

/* When in Mobile View, display only Name and FaBars*/
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
  display: none;
}
`;


