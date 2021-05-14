import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
      font-size: 82.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
      @media ${(props) => props.theme.mediaQueries.largest} {
          font-size: 70%;
      }
      @media ${(props) => props.theme.mediaQueries.large} {
          font-size: 67.5%;
      }
      @media ${(props) => props.theme.mediaQueries.small} {
          font-size: 65%;
      }
    }
    * {
      outline: none;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    body {
      font-family: 'Sora', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
 
    }
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
