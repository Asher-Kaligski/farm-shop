import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { paginate } from '../utils/paginate';
import shoppingCartService from './../services/shoppingCartService';
import Pagination from './common/pagination';
import SearchBox from './searchBox';
import ShoppingCartTable from './shoppinCartTable';

class ShoppingCart extends Component {
  state = {
    items: [],
    totalPrice: 0,
    searchQuery: '',
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: 'item.product.title', order: 'asc' },
  };

  async componentDidMount() {
    const { items, totalPrice } = await shoppingCartService.getCart();

    this.setState({ items, totalPrice });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      items: allItems,
    } = this.state;

    let filtered = allItems;
    if (searchQuery)
      filtered = allItems.filter((i) =>
        i.product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const items = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: items };
  };

  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

    const { totalCount, data: items } = this.getPagedData();

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center my-3">Shopping Cart</h1>

            <SearchBox
              value={searchQuery}
              onChange={this.handleSearch}
              placeholder="Search Product"
            />
            <ShoppingCartTable
              items={items}
              sortColumn={sortColumn}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
          <div className="col-12 mt-2 d-flex justify-content-around">
            <Link to="/check-out">
              <button
                type="button"
                disabled={!items.length}
                className="btn btn-primary"
              >
                Check Out
              </button>
            </Link>
            <Link to="/products">
              <button type="button" className="btn btn-primary">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
