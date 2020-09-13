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

        return (<div className="container">
            {order && <ShoppingCartSummary items={order.shoppingCart.items} totalPrice={order.shoppingCart.totalPrice} />}
        </div>);
    }
}

export default ViewOrder;