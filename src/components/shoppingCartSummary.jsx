import React, { Component } from 'react';


class ShoppingCartSummary extends Component {
 

  render() {
    const { items, totalPrice } = this.props.shoppingCart;
    console.log('items', items);
    console.log('totalPrice', totalPrice);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="text-center">Order Summary</h3>
            <h4 className="text-center">
              You have {items.length} items in your shopping cart.
              <ul class="list-group list-group-flush">
                {items.map((item) => (
                  <li className="list-group-item">
                    {item.quantity} * {item.product.title}
                    <div class="float-right">{item.itemTotalPrice}</div>
                  </li>
                ))}
                <li class="list-group-item font-weight-bold">
                  Total
                  <div class="float-right">{totalPrice}</div>
                </li>
              </ul>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCartSummary;
