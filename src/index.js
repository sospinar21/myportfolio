import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Stateful/App/App';
import { BrowserRouter } from 'react-router-dom'

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));

