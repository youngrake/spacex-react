import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { color, font } from '../../utils/styles';

export const HeaderRoot = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100px;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  background-color: ${color.backgroundPrimary};

  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  -webkit-transition: -webkit-transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.15s;
  transition: -webkit-transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.15s;
  transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.15s;
  transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.15s,
    -webkit-transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0.15s;
`;

export const HeaderInner = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: left;
`;

export const Navigation = styled.div`
  display: inline-block;
  left: 285px;
  position: absolute;
  top: 38px;
  height: 30px;
`;

export const LinksContainer = styled.ul`
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LinkRoot = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 12px;
`;

export const Link = styled(NavLink)`
  -webkit-transition: opacity 0.6s linear;
  transition: opacity 0.6s linear;

  ${font.regular}
`;

export const Logo = styled(NavLink)`
  position: absolute;
  top: 32px;
  left: 50px;
  width: 210px;
  height: auto;
`;
