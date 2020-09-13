import React, { Component } from 'react';
import Table from './common/table';
import { Link } from 'react-router-dom';

class OrdersTable extends Component {
  columns = [
    
    { path: 'datePlaced', label: 'Date Placed' },
    { path: 'shoppingCart.totalPrice', label: 'Total Price' },
    {
        path: "view",
        label: "Action",
        content: order => <Link to={`/view-order/${order._id}`}><button className="btn btn-primary">View</button></Link>
      }
  ];

  render() {
    const { orders, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={orders}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default OrdersTable;