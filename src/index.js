import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);

