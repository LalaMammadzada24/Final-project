import React from 'react'
import ReactDOM from 'react-dom'
import './assets/sass/style.scss'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Provider } from 'react-redux';
import { addBlog, getBlogsFromDatabase } from './tools/action/blogAction'
import configureStore from './tools/store/configureStore'
import { ModeProvider } from './context/ModeContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from 'react-use-wishlist';
import './i18n/i18next';

const store = configureStore();


  const result = (
    <WishlistProvider>
    <CartProvider>
    <ModeProvider>
    <ProductProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ProductProvider>
    </ModeProvider>
    </CartProvider>
    </WishlistProvider>
  )


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})
