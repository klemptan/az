import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.min.css';
import App from './App';
import ShopStore from './store/shop-store'
import { BrowserRouter } from 'react-router-dom';
import 'swiper/css';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)

root.render(
  <Context.Provider value={{
    shop: new ShopStore()
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>

);
