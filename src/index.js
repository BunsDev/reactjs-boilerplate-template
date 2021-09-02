import React from 'react';
import { render } from 'react-dom';
import App from './App';
import 'normalize.css';
import Theme from './styles/theme';

render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root')
);
