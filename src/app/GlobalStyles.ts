import styled, { createGlobalStyle } from 'styled-components';

import { color, font } from '../utils/styles';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        text-align: left;
        line-height: 26px;
        width: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;

        ${font.size(16)}
        ${font.regular}
        color: ${color.textPrimary};
        background-color: ${color.backgroundPrimary};
    }

    a {
        text-decoration: none;
        color: ${color.textPrimary};
    }

    ::selection {
        color: ${color.backgroundPrimary};
        background: ${color.textPrimary};
    }
`;

interface WrapperProps {
  isLoaded: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  overflow-x: hidden;

  transition: opacity 0.6s linear;
`;

export default GlobalStyles;
