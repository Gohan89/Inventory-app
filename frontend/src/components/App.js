import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Cart from './components/Cart/Cart';
import ProductList from './components/Products/ProductList';
import AddProduct from './components/Products/AddProduct';
import ShopList from './components/Shops/ShopList';
import AddShop from './components/Shops/AddShop';
import NotFound from './components/NotFound';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/products" exact component={ProductList} />
                    <Route path="/products/add" component={AddProduct} />
                    <Route path="/shops" exact component={ShopList} />
                    <Route path="/shops/add" component={AddShop} />
                    <Route component={NotFound} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
};

export default App;

