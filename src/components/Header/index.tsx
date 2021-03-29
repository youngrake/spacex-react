import React from 'react';

import * as S from './styled';

const routes = [
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
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
        <S.Logo to="/" />
        <S.Navigation>{content}</S.Navigation>
      </S.HeaderInner>
    </S.HeaderRoot>
  );
};

export default Header;
