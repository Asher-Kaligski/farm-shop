import * as React from 'react';
import { Component } from 'react';
import ProductCart from './productCart';
import CategoriesList from './common/categoriesList';
import productService from './../services/productService';
import categoryService from './../services/categoryService';




class Products extends Component {

    state = { products: [], categories: [], selectedCategory: null };

    async componentDidMount() {
        const products = await productService.getAll();
        console.log('products', products);

        const categories = await categoryService.getAll();

        this.setState({ products, categories })
    }

    handleCategorySelect = categoryName => {
        this.setState({ selectedCategory: categoryName});
      };

    render() {
        const { products, categories, selectedCategory } = this.state;


        let filteredProducts = [];
        if (selectedCategory)
            filteredProducts = products.filter(p => p.category === selectedCategory);
        else filteredProducts = products;

        if (!filteredProducts.length) return <h1>Products have not been found</h1>;

        return (<div className="container-fluid">
            <div className="row">

                <div className="col-3 d-block d-lg-none">
                    <div className="sticky-top">
                        <p>Mobile Select Categories</p>
                    </div>
                </div>

                <div className="col-3 d-none d-lg-block">
                    <div className="sticky-top">
                        <CategoriesList
                            items={categories}
                            selectedItem={selectedCategory}
                            onItemSelect={this.handleCategorySelect}
                        />
                        {/* <ul class="list-group my-1">
                            <li className="list-group-item list-group-item-action active">All categories</li>
                            {
                                categories.map(category => (
                                    <li className="list-group-item list-group-item-action">{category.name}</li>
                                ))
                            }
                        </ul> */}
                        {/* <ul class="list-group my-1">
                            <li className="list-group-item list-group-item-action active">All categories</li>
                            {
                                categories.map(category => (
                                    <li className="list-group-item list-group-item-action">{category.name}</li>
                                ))
                            }
                        </ul> */}
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        {/* <div className="col-12 mt-4"> */}
                        {filteredProducts.map((product, i) => (
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

