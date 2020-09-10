import React, { Component } from 'react';
import Table from './common/table';

class ShoppingCartTable extends Component {
  columns = [
    {
      path: 'product.title',
      label: 'Product',
    },
    { path: 'product.category', label: 'Category' },
    { path: 'quantity', label: 'Quantity' },
    { path: 'itemTotalPrice', label: 'TotalPrice' },
  ];

  render() {
    const { items, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={items}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ShoppingCartTable;
