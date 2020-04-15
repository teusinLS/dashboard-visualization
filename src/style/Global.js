// npm
import { createGlobalStyle } from "styled-components";

// style
const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

  body {
    background: #fff;
  }

  html {
    scroll-behavior: smooth;
  }

  .Toastify__toast {
    border-radius: 3px;
    font-weight: bold;
  }
`;

module.exports = Global;
