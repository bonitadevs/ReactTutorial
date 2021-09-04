import React from 'react';
//Styles
import { GlobalStyle } from './GlobalStyle';
//Components
import Header from './components/Header/index';
import Home from './components/Home'
function App() { 
return (

    <div>
        <Header />
        <Home />
        <GlobalStyle />
    </div>

);
}

export default App;
