import React, { Component } from 'react';
import { toast } from 'react-toastify';

import shoppingCartService from './../services/shoppingCartService';
import ProductQuantity from './productQuantity';

class ProductCart extends Component {
  state = { quantity: 0 };

  componentDidMount() {
    this.setState({ quantity: this.props.product.quantity });
  }

  handleIncrement = async () => {
    try {
      const { _id } = this.props.product;
      let quantity = this.state.quantity;
      quantity += 1;

      await shoppingCartService.updateCart({ productId: _id, quantity });

      this.setState({ quantity });

      toast.success('The shopping cart has been updated successfully');
    } catch (err) {
      toast.error(err);
    }
  };

  handleDecrement = async () => {
    try {
      const { _id } = this.props.product;
      let quantity = this.state.quantity;
      quantity -= 1;

      await shoppingCartService.updateCart({ productId: _id, quantity });

      this.setState({ quantity });

      toast.success('The shopping cart has been updated successfully');
    } catch (err) {
      toast.error(err);
    }
  };

  render() {
    const { product } = this.props;

    return (
      <React.Fragment>
        <div className="card mb-4">
          <img
            className="card-img-top"
            src={product.imageUrl}
            style={{ height: '40vh' }}
            alt=""
          ></img>

          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">{product.farm.name}</li>
            <li className="list-group-item text-center font-weight-bold">
              {product.title}
            </li>
            <li className="list-group-item text-center">{product.price}$</li>
          </ul>
          <ProductQuantity
            quantity={this.state.quantity}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ProductCart;
