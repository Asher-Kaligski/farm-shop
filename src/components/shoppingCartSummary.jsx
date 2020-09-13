import React, { Component } from 'react';


const ShoppingCartSummary = ({ items, totalPrice }) => {


  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="text-center">Order Summary</h3>
          <h4 className="text-center">
            You have {items.length} items in your shopping cart.
              <ul className="list-group list-group-flush">
              {items.map((item) => (
                <li key={item._id} className="list-group-item">
                  {item.quantity} * {item.product.title}
                  <div className="float-right">{item.itemTotalPrice}$</div>
                </li>
              ))}
              <li className="list-group-item font-weight-bold">
                Total
                  <div className="float-right">{totalPrice}$</div>
              </li>
            </ul>
          </h4>
        </div>
      </div>
    </div>
  );

}

export default ShoppingCartSummary;
