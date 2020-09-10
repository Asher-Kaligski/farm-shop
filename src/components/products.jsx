import * as React from 'react';
import { Component } from 'react';
import ProductCart from './productCart';
import productService from './../services/productService';
import categoryService from './../services/categoryService';




class Products extends Component {

    state = { products: [], categories: [] };

    async componentDidMount() {
        ///make request to get all products
        const products = await productService.getAll();
        console.log('products', products);

        const categories = await categoryService.getAll();
        console.log('categories', categories);

        this.setState({ products, categories })
    }

    render() {
        const { products, categories } = this.state;

        if (!products.length) return (<h1>Products have not been found</h1>);

        return (<div className="container-fluid">
            <div className="row">

                <div className="col-3 d-block d-lg-none">
                    <div className="sticky-top">
                        <p>Mobile Select Categories</p>
                    </div>
                </div>

                <div className="col-3 d-none d-lg-block">
                    <div className="sticky-top">
                        <ul class="list-group my-1">
                            <li className="list-group-item list-group-item-action">All categories</li>
                            {
                                categories.map(category => (
                                    <li className="list-group-item list-group-item-action">{category.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {/* <div className="col-12 mt-4"> */}
                        {products.map((product, i) => (
                            <div className="col-md-2 col-lg-3 col-xl-4">
                                <ProductCart key={product._id} product={product} index={i} />
                            </div>

                        ))
                        }
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Products;

