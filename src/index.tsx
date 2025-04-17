import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductExample from './components/ProductExample';
import { icon10CSData } from './data';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Toggle between true/false to switch between ProductExample and App
const showExampleComponent = true;

root.render(
  <React.StrictMode>
    {showExampleComponent ? (
      <ProductExample />
    ) : (
      <App productData={icon10CSData.productInfo} />
    )}
  </React.StrictMode>
);