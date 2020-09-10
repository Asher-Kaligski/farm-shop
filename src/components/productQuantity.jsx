import React, { Component } from 'react';

class ProductQuantity extends Component {
    state = {  };
    render() { 
        const {product} = this.props;
        // const isBreakRow = ((index + 1) % 4 === 0) ? true : false;
        if (product.quantity)
        console.log(product);

        if (!product.quantity) return <a href="#" className="btn btn-primary">Add To Cart</a>;
        return (
            <React.Fragment>
            
            <div className="row no-gutters">
                <div className="col-2">
                <button className="btn btn-secondary  btn-block">-</button>
                </div>
                <div className="col text-center">{product.quantity}</div>
                <div className="col-2">
                    <button className="btn btn-secondary btn-block">+</button>
                </div>
            </div>
        
         
          </React.Fragment>
         );
    }
}
 
export default ProductQuantity;