import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { ShopProvider } from './context/ShopContext';
import './i18n/i18n';
import './styles/App.css';

ReactDOM.render(
    <AuthProvider>
        <ProductProvider>
            <ShopProvider>
                <App />
            </ShopProvider>
        </ProductProvider>
    </AuthProvider>,
    document.getElementById('root')
);

