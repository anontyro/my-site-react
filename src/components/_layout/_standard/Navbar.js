import React from 'react';
import { Link } from '../../../../node_modules/react-router-dom';
import styled from '../../../../node_modules/styled-components';
import { COLOURS } from '../../../data/defaultColours';

const NavContainer = styled.div`
  display: flex;
  padding: 5px 30px;
`;

const Signature = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Pacifico');
  font-size: 30px;
  float: left;
  color: ${COLOURS.HEADING_COLOUR} !important;
  font-family: 'Pacifico', cursive;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 450px;
  line-height: 1.4;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${COLOURS.DEFAULT_TEXT_COLOUR};
  font-size: 22px;
  &:hover {color: ${COLOURS.HEADING_COLOUR}};

`

const Navbar = () => (
  <NavContainer>
    <Signature>Alex Wilkinson</Signature>
    <LinkList>
      <li><LinkItem to='/'>Home</LinkItem></li>
      <li><LinkItem to='/blog'>Blog</LinkItem></li>
      <li><LinkItem to='/'>Portfolio</LinkItem></li>
      <li><LinkItem to='/'>Resume</LinkItem></li>
      <li><LinkItem to='/'>About</LinkItem></li>
    </LinkList>
  </NavContainer>);

export default Navbar;
