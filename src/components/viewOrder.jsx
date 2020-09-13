import React, { Component } from 'react';
import orderService from './../services/orderService';
import ShoppingCartSummary from './shoppingCartSummary';

class ViewOrder extends Component {
    state = { order: '' };

    async componentDidMount() {

        const { params } = this.props.match;
        const order = await orderService.getById(params.id);

        this.setState({ order });

    }

    render() {

        const { order } = this.state;

        return (
        <div className="container">

{order && <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center mb-4">Order Summary</h3>
          <h4 className="text-center">
            The order was placed at {(new Date(order.datePlaced)).toLocaleString()}.
              <ul className="list-group list-group-flush mt-3">
              {order.shoppingCart.items.map((item) => (
                <li key={item._id} className="list-group-item">
                  {item.quantity} * {item.product.title}
                  <div className="float-right">{item.itemTotalPrice}$</div>
                </li>
              ))}
              <li className="list-group-item font-weight-bold">
                Total
                  <div className="float-right">{order.shoppingCart.totalPrice}$</div>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </div>}
            
            {/* {order && <ShoppingCartSummary items={order.shoppingCart.items} totalPrice={order.shoppingCart.totalPrice} />} */}
        </div>);
    }
}

export default ViewOrder;