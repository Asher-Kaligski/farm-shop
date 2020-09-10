import React from 'react';

const ProductQuantity = ({ quantity, onIncrement, onDecrement }) => {
  if (!quantity)
    return (
      <button className="btn btn-primary" onClick={onIncrement}>
        Add To Cart
      </button>
    );
  return (
    <React.Fragment>
      <div className="row no-gutters">
        <div className="col-2">
          <button
            className="btn btn-secondary  btn-block"
            onClick={onDecrement}
          >
            -
          </button>
        </div>
        <div className="col text-center mt-2">{quantity} in cart</div>
        <div className="col-2">
          <button className="btn btn-secondary btn-block" onClick={onIncrement}>
            +
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductQuantity;
