import React, { Component } from 'react';

import shoppingCartService from './../services/shoppingCartService';
import ShippingForm from './shippingForm';
import ShoppingCartSummary from './shoppingCartSummary';

class CheckOut extends Component {
  state = {
    items: [],
    totalPrice: 0,
  };

  async componentDidMount() {
    const { items, totalPrice } = await shoppingCartService.getCart();

    this.setState({ items, totalPrice });
  }
  render() {
    const { items, totalPrice } = this.state;
    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-md-6 mb-4">
            <ShippingForm />
          </div>
          <div className="col-md-6">
            <ShoppingCartSummary items={items} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;
