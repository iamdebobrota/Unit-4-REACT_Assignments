
import React, { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme , darkTheme, GlobalStyles} from './Themes.js'
import './App.css';
import Navbar from './Components/Navbar.jsx';


const StyledApp = styled.div`
color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme,setTheme]=useState("light");
  const themeToggle=()=>{
    theme==="light"? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
         <StyledApp>
         <Navbar themeToggle={themeToggle}/>
         </StyledApp>
    </ThemeProvider>
   
  );
}

export default App;
