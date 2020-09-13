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
        const orders = await orderService.getAll();
    
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
          filtered = allItems.filter((i) =>
            i.shoppingCart.totalPrice.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
        // else if (selectedGenre && selectedGenre._id)
        //   filtered = allItems.filter(m => m.genre._id === selectedGenre._id);
    
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    
        const items = paginate(sorted, currentPage, pageSize);
    
        return { totalCount: filtered.length, data: items };
       // return { totalCount: 1, data: items };
      };
    
      render() {
        //const { items } = this.state;
        const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    
        const { totalCount, data: orders } = this.getPagedData();
    
        // if (!items.length) return <h4>You have 0 orders</h4>;
    
        return (
          <div className="container">
            <div className="row">
              <div className="col-12 mt-2">
                <h2 className="text-center mb-3">My orders</h2>
    
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