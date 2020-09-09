import * as React from 'react';
import { Component } from 'react';
import ProductCart from './productCart';
import productService from './../services/productService';




class Products extends Component {

    state = { products: [] };

    async componentDidMount() {
        ///make request to get all products
        const products = await productService.getAll();
        console.log('products', products);

        this.setState({ products })
    }

    render() {
        const { products } = this.state;

        if (!products.length) return (<h1>Products have not been found</h1>);

        return (<div className="container">
            <div className="row">
                <div className="col-12 mt-4">
                    <h1>Products iterate over all products</h1>
                    {products.map(product => (
                        <ProductCart key={product._id} product={product} />
                    ))
                    }
                </div>
            </div>
        </div>);
    }
}

export default Products;

