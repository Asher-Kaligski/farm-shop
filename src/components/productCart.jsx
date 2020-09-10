import React, { Component } from 'react';

import ProductQuantity from './productQuantity';

import shoppingCartService from './../services/shoppingCartService';

import { toast } from 'react-toastify';

class ProductCart extends Component {
  state = { quantity: 0 };


  componentDidMount() {
    this.setState({ quantity: this.props.product.quantity });
  }


  handleIncrement = async () => {

    try {
      //  this.setState({ selectedCategory: categoryName });
      console.log('handleIncrement', this.props.product.quantity);
      let quantity = this.state.quantity;
      quantity += 1;


      // await shoppingCartService.updateCart(items);

      this.setState({ quantity });


      toast.success('The shopping cart has been updated successfully')

    } catch (err) {
      toast.error(err);
    }




  };



  handleDecrement = async () => {
    //  this.setState({ selectedCategory: categoryName });
    console.log('handleDecrement', this.props.product.quantity);
  };



  render() {
    const { product, index } = this.props;

    if (product.quantity)
      console.log(product);
    // const isBreakRow = ((index + 1) % 4 === 0) ? true : false;
    // console.log(product);
    return (
      <React.Fragment>
        <div className="card mb-4" >
          <img class="card-img-top" src={product.imageUrl} style={{ height: '40vh' }} alt=""></img>

          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">{product.farm.name}</li>
            <li className="list-group-item text-center font-weight-bold">{product.title}</li>
            <li className="list-group-item text-center">{product.price}$</li>
          </ul>
          <ProductQuantity quantity={this.state.quantity} onDecrement={this.handleDecrement} onIncrement={this.handleIncrement} />
          {/* <a href="#" className="btn btn-primary">Add To Cart</a> */}
        </div>
        {/* {isBreakRow && <div className="w-100"></div>} */}
      </React.Fragment>
    );
  }
}

export default ProductCart;