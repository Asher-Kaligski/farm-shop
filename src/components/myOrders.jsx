import React, { Component } from 'react';
import OrdersTable from './ordersTable';
import orderService from './../services/orderService';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import SearchBox from './searchBox';
import _ from 'lodash';

class MyOrders extends Component {
    state = {
        orders: [],
        searchQuery: '',
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'order.shoppingCart.totalPrice', order: 'asc' },
    };

    async componentDidMount() {
        const receivedOrders = await orderService.getAll();

        const orders = receivedOrders.map(o => {
            o.datePlaced = (new Date(o.datePlaced)).toLocaleString();
            return o;
        })

        this.setState({ orders });

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
            orders: allItems,
        } = this.state;


        let filtered = allItems;
        if (searchQuery)
            filtered = allItems.filter((o) =>
                o.shoppingCart.totalPrice.toString().toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const items = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: items };
    };

    render() {
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;

        const { totalCount, data: orders } = this.getPagedData();


        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center my-3">My Orders</h1>

                        <SearchBox
                            value={searchQuery}
                            onChange={this.handleSearch}
                            placeholder="Search By Total Price"
                        />
                        <OrdersTable
                            orders={orders}
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
                </div>
            </div>
        );
    }
}

export default MyOrders;