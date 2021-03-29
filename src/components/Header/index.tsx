import React from 'react';

import LogoSVG from './LogoSVG';

import * as S from './styled';

const routes = [
  { path: '/falcon-9', content: 'Falcon 9', disabled: false },
  { path: '/launches', content: 'Falcon Heavy', disabled: false },
  { path: '/about', content: 'Dragon', disabled: false },
  { path: '/falcon-9', content: 'Starphip', disabled: false },
  { path: '/falcon-9', content: 'Human SpaceLight', disabled: true },
  { path: '/falcon-9', content: 'Rideshare', disabled: true },
];

const Header = () => {
  const content = (
    <S.LinksContainer>
      {routes.map((route, index) => (
        <S.LinkRoot key={index}>
          <S.Link to={route.path}>{route.content}</S.Link>
        </S.LinkRoot>
      ))}
    </S.LinksContainer>
  );

  return (
    <S.HeaderRoot>
      <S.HeaderBackground />
      <S.HeaderInner>
        <S.Logo to="/">
          <LogoSVG />
        </S.Logo>
        <S.Navigation>{content}</S.Navigation>
      </S.HeaderInner>
    </S.HeaderRoot>
  );
};

export default Header;
