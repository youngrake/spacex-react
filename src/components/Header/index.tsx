import React from 'react';

const routes = [
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
  { path: '/falcon-9', content: 'Falcon 9' },
];

const Header = () => {
  return (
    <ul>
      {routes.map((route, index) => (
        <a href={route.path} key={index}>
          <li>{route.content}</li>
        </a>
      ))}
    </ul>
  );
};

export default Header;
