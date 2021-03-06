import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import CheckOut from './components/checkOut';
import ProtectedRoute from './components/common/protectedRoute';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import MyOrders from './components/myOrders';
import NavBar from './components/navBar';
import Products from './components/products';
import RegisterForm from './components/registerForm';
import ShoppingCart from './components/shoppingCart';
import UserProfile from './components/userProfile';
import ViewOrder from './components/viewOrder';
import auth from './services/authService';

class App extends Component {
  state = {};

  componentDidMount() {
    document.title = "Online Farm Shop";

    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />

        <main className="container-fluid">
          <Switch>
            <Route path="/products" component={Products} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/shopping-cart" component={ShoppingCart} />

            <ProtectedRoute path="/my-orders" component={MyOrders} />
            <ProtectedRoute path="/user-profile" component={UserProfile} />
            <ProtectedRoute path="/view-order/:id" component={ViewOrder} />
            <ProtectedRoute path="/check-out" component={CheckOut} />

            <Redirect from="/" exact to="/products" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
