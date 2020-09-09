import * as React from 'react';
import { Component} from 'react';
import ProductCart from './productCart';
import {getAll} from './../services/productService';



 
class Products extends Component {

    state = {  };

    async componentDidMount() {
        ///make request to get all products
        const products = await getAll();
        console.log('products', products);
    }
   
    render() { 
        return ( <div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <h1>Products iterate over all products</h1>
                    <ProductCart />
                </div>
            </div>
        </div> );
    }
}
 
export default Products;

