import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.typography.family};
  }

  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-family: ${({ theme }) => theme.typography.family};

  }

  img{
    ::selection{
      pointer-events: none;
    }
  }

  a {
    outline: none;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  input {
    outline: none;
    border:none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
 
  `;
