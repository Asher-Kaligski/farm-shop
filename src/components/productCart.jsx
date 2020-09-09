import React, { Component } from 'react';

class ProductCart extends Component {
    state = {  };
    render() { 
        const {product} = this.props;
        console.log(product);
        return ( <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <p>{product.title}</p>
                </div>
            </div>
        </div> );
    }
}
 
export default ProductCart;