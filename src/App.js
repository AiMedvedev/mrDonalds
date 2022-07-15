import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {NavBar} from './Components/NavBar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, sans-serif;
    font-size: 20px;
    color: black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3 {
    padding: 0;
    margin: 0;
    font-family: Pacifico
  }

  p {
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <NavBar/>
    </>
  );
}

export default App;
