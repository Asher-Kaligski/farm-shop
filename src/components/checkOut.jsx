import React, { Component } from 'react';
import ShippingForm from './shippingForm';
import ShoppingCartSummary from './shoppingCartSummary';
import shoppingCartService from './../services/shoppingCartService';

class CheckOut extends Component {
    state = { shoppingCart: '' };

    async componentDidMount() {
      const shoppingCart = await shoppingCartService.getCart();
      this.setState({ shoppingCart });
    }
  render() {
    return (
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-6">
            <ShippingForm />
          </div>
          <div class="col-md-6">
            <ShoppingCartSummary shoppingCart={this.state.shoppingCart}/>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
