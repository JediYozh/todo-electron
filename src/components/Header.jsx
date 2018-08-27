import React from 'react';
import styled from 'styled-components';
import logo from '../assets/moon.svg';
import { Divider } from './common';

const Header = () => {

  return (
    <div>
      <StyledHeader>
        <Title>
            Todos
        </Title>
        <Icon>
          <img
            src={logo}
            width={20}
            height={20}
            alt="logo"
          />
        </Icon>
      </StyledHeader>
      <Divider left="-18px" />
    </div>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-weight: 500;
  padding-top: 20px;
  padding-bottom: 5px;
  margin: 0;
`;

const Icon = styled.span`
  margin-top: 6px;
  align-self: flex-start;
`;

export default Header;
