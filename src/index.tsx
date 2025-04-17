import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import icon10CSData from './data/icon10CSData';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App productData={icon10CSData.productInfo} />
  </React.StrictMode>
);