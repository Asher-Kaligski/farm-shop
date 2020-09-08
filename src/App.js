import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navBar';
import Products from './components/products';
import auth from './services/authService';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import Logout from './components/logout';

import axios from 'axios';

class App extends Component {

  state = {};

  async componentDidMount() {
    
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render(){

    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        
        <main className="container">
          <Switch>
            <Route path="/products" component={Products}/>
             <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            {/*<ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} /> */}
            {/* <Redirect from="/" exact to="/movies" /> */}
            <Redirect from="/" exact to="/products" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
