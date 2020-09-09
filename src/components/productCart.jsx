import React, { Component } from 'react';

class ProductCart extends Component {
    state = {  };
    render() { 
        const {product, index} = this.props;
        const isBreakRow = ((index + 1) % 4 === 0) ? true : false;
        console.log(product);
        return (
            <React.Fragment>
            <div className="card mb-4" style={{width: '18rem'}}>
            <img class="card-img-top" src={product.imageUrl} alt=""></img>
            
            <ul className="list-group list-group-flush">
              <li className="list-group-item text-center">{product.farm.name}</li>
              <li className="list-group-item text-center font-weight-bold">{product.title}</li>
              <li className="list-group-item text-center">{product.price}$</li>
            </ul>
            <a href="#" className="btn btn-primary">Add To Cart</a>
          </div>
          {/* {isBreakRow && <div className="w-100"></div>} */}
          </React.Fragment>
         );
    }
}
 
export default ProductCart;