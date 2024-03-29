import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);