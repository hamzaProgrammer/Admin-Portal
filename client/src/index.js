import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </BrowserRouter>,
  document.getElementById('root')
)
