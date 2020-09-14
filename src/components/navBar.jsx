import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <Link className="navbar-brand ml-2" to="/">
        <i className="fa fa-pagelines" aria-hidden="true"></i>
      </Link>
      <span>Farm Shop</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav  mr-auto">

        </div>
        <div className="navbar-nav">
          {user && (
            <div className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.firstName}
              </span>
              <div className="dropdown-menu user-menu dropdown-menu-center" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/my-orders">
                  My Orders
              </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/shopping-cart">
                  ShoppingCart
              </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/user-profile">
                  Profile
              </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="/logout">
                  Logout
                  </NavLink>

              </div>
            </div>
          )}
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
                  </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
                  </NavLink>
            </React.Fragment>
          )}
          <Link className="navbar-brand ml-2" to="/shopping-cart">
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
