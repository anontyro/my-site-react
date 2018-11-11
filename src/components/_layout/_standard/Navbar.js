import React from 'react';
import { Link } from '../../../../node_modules/react-router-dom';
import styled from '../../../../node_modules/styled-components';

const NavContainer = styled.div`
`;

const LinkList = styled.ul`
`;

const Navbar = () => (
  <NavContainer>
    <LinkList>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
    </LinkList>
  </NavContainer>);

export default Navbar;
